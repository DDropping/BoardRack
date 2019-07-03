const express = require('express');
const router = express.Router();

// @route   GET api/messages
// @desc    Create message threat / add message to existing thread
// @access  Private
router.get('/', auth, (req, res) => {
  try {
    res.send('Message');
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

module.exports = router;
