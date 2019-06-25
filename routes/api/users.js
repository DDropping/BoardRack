const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const User = require('../../models/User');

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
    const profiles = await User.find({ userType: 'user' }).select(
      '-password -email -messageThreads'
    );
    res.json(profiles);
  } catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
