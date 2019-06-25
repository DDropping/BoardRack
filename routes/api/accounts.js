const express = require('express');
const router = express.Router();

//***** NEEDS TO BE SECURED ********
//does not include posts, can use populate to add in
// @route   GET api/accounts
// @desc    Get all registered accounts
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

module.exports = router;
