//Routes for api/shops
// - GET api/shops (retrieve all shop profiles)

const express = require('express');
const router = express.Router();

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
