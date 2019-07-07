// @route   GET api/messages/allMessages (ADMIN only: get all messages)
// @route   GET api/messages/ (get all messages associated with user)
// @route   POST api/messages/openMessages/:postId (create new message thread)
// @route   PUT api/messages/addMessages/:threadId (add new message)

const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Post = require('../../models/Post');
const Message = require('../../models/Message');
const { check, validationResult } = require('express-validator/check');

// @route   GET api/messages/allMessages
// @desc    Get all message threads
// @access  Private (admin only)
router.get('/allMessages', auth, async (req, res) => {
  //check if admin
  if (req.user.userType !== 'admin') {
    return res.status(400).json('User Not Authorized');
  }
  try {
    const message = await Message.find({});
    res.json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

// @route   GET api/messages/
// @desc    Retrieve all messages user is involved in
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const messageList = await Message.find({
      $or: [{ userId: req.user.id }, { authorId: req.user.id }]
    });
    res.json(messageList);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

// @route   POST api/messages/openMessages/:postId
// @desc    Create message thread
// @access  Private
router.post('/openThread/:postId', auth, async (req, res) => {
  try {
    const msgThread = await Message.findOne({
      postId: req.params.postId,
      userId: req.user.id
    });
    if (msgThread) {
      res.json(msgThread.id);
    }
    //if msgThread does not exist
    const messageFields = {};
    messageFields.postId = req.params.postId;
    messageFields.userId = req.user.id;
    messageFields.authorId = req.body.authorId;

    let message = new Message(messageFields);
    await message.save();
    res.json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

// @route   PUT api/messages/addMessages/:threadId
// @desc    Add message to thread
// @access  Private
router.put(
  '/addMessage/:threadId',
  [
    auth,
    [
      check('messageBody', 'Message is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //add message to message thread
      const message = await Message.findById(req.params.threadId);
      message.messageThread.unshift({
        mFrom: req.user.id,
        message: req.body.messageBody
      });
      message.save();
      res.json(message);
    } catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  }
);

module.exports = router;
