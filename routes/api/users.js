//Routes for api/users
// - GET api/users (retrieve all users profiles)

const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const User = require('../../models/User');

//does not include posts, can use populate to add in
// @route   GET api/users
// @desc    Get all users
// @access  Protected (only Admin)
router.get('/', async (req, res) => {
  try {
    //check if admin
    if (req.user.userType !== 'admin') {
      return res.status(400).json('User Not Authorized');
    }
    //get profiles
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
