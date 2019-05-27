const express = require('express');
const router = express.Router();

// @route   GET api/shops
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('Shops Route');
});

module.exports = router;
