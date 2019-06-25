const express = require('express');
const router = express.Router();

// @route   GET api/shops
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('Shops Route');
});

//***** NEEDS TO BE SECURED ********
//does not include posts, can use populate to add in
// @route   GET api/shops
// @desc    Get all shops
// @access  Public
router.get('/', async (req, res) => {
  try {
    const profiles = await User.find({ userType: 'shop' }).select(
      '-password -email -messageThreads'
    );
    res.json(profiles);
  } catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
