//Routes for api/accounts
// - GET api/accounts (retrieve all account profiles)
// - GET api/myAccount (retrieve current user account given JWT)
// - GET api/accounts/:user_id (retrieve user given user ID)
// - POST api/accounts (create a new account with username, email, password, userType)

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const Post = require('../../models/Post');

// @route   GET api/accounts
// @desc    Get all registered accounts (does not include posts, can use populate to add in)
// @access  Protected (Admin only)
router.get('/', auth, async (req, res) => {
  try {
    //check if admin
    if (req.user.userType !== 'admin') {
      return res.status(400).json('User Not Authorized');
    }
    //get profiles
    const profiles = await User.find().select(
      '-password -email -messageThreads'
    );
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/accounts/myAccount
// @desc    Get current users profile
// @access  Protected
router.get('/myAccount', auth, async (req, res) => {
  try {
    const userProfile = await User.findById(req.user.id).select('-password');
    res.json(userProfile);

    if (!userProfile) {
      return res.status(400).json({ msg: 'This user does not exist ' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/accounts/:user_id
// @desc    Get profile by user_id
// @access  Public
router.get('/:user_id', async (req, res) => {
  try {
    const Profile = await User.findById(req.params.user_id).select('-password');
    res.json(Profile);

    if (!Profile) {
      return res.status(400).json({ msg: 'This profile does not exist ' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/accounts
// @desc    register new account (username, email, password, userType)
// @access  Public
// validation checks >> return errors >> check if user exists >> create user instance >> encrypt password >> save to mongodb >> create jsonWebToken
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('username', 'Username is required')
      .not()
      .isEmpty(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, confirmPassword, userType } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        errors: [{ msg: 'Passwords do not match' }]
      });
    }

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          errors: [{ msg: 'Email is already associated with an account' }]
        });
      }

      user = new User({
        username,
        email,
        password,
        userType
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
          userType: user.userType
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   DELETE api/accounts/myAccount
// @desc    Delete user account and associated posts
// @access  Protected (only owner of account - JWT)
router.delete('/myAccount', auth, async (req, res) => {
  try {
    //remove posts associated with account
    await Post.deleteMany({ user: req.user.id });
    //remove account
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'Account Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
