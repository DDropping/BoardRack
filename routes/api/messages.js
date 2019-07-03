const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Message = require('../../models/Message');

// @route   GET api/messages
// @desc    Create message thread / add message to existing thread
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
