const express = require('express');
const router = express.Router();

// @route   GET api/shapers
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('Shapers Route');
});

//***** NEEDS TO BE SECURED ********
//does not include posts, can use populate to add in
// @route   GET api/shapers
// @desc    Get all shapers
// @access  Public
router.get('/', async (req, res) => {
  try {
    const profiles = await User.find({ userType: 'shaper' }).select(
      '-password -email -messageThreads'
    );
    res.json(profiles);
  } catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
