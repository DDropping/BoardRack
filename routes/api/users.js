const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const User = require('../../models/User');

// @route   POST api/users
// @desc    register new user
// @access  Public
// validation checks >> return errors >> check if user exists >> create user instance >> encrypt password >> save to mongodb >> create jsonWebToken
router.post(
  '/',
  [
    check('username', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
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

    const { username, email, password, isUser } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        username,
        email,
        password,
        isUser
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
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

// @route   GET api/users/me
// @desc    Get current users profile
// @access  Private
router.get('/me', auth, async (req, res) => {
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

//***** NEEDS TO BE SECURED ********
//does not include posts, can use populate to add in
// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/', async (req, res) => {
  try {
    const profiles = await User.find().select(
      '-password -email -messageThreads'
    );
    res.json(profiles);
  } catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

//***** NEEDS TO BE SECURED ********
//does not include posts, can use populate to add in
// @route   GET api/users/isUser
// @desc    Get all users
// @access  Public
router.get('/isUser', async (req, res) => {
  try {
    const profiles = await User.find({ isUser: 'true' }).select(
      '-password -email -messageThreads'
    );
    res.json(profiles);
  } catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

//***** NEEDS TO BE SECURED ********
//does not include posts, can use populate to add in
// @route   GET api/users/isShop
// @desc    Get all shops
// @access  Public
router.get('/isShop', async (req, res) => {
  try {
    const profiles = await User.find({ isShop: 'true' }).select(
      '-password -email -messageThreads'
    );
    res.json(profiles);
  } catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

//***** NEEDS TO BE SECURED ********
//does not include posts, can use populate to add in
// @route   GET api/users/isShaper
// @desc    Get all shapers
// @access  Public
router.get('/isShaper', async (req, res) => {
  try {
    const profiles = await User.find({ isShaper: 'true' }).select(
      '-password -email -messageThreads'
    );
    res.json(profiles);
  } catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
