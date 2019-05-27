const express = require('express');
const router = express.Router();

// @route   GET api/shapers
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('Shapers Route');
});

module.exports = router;
