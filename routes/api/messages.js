const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Post = require('../../models/Post');
const Message = require('../../models/Message');

// @route   POST api/messages/openMessages
// @desc    Create message thread
// @access  Private

// @route   PUt api/messages/openMessages
// @desc    Add message to thread
// @access  Private
module.exports = router;
