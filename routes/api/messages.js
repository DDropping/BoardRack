const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Post = require('../../models/Post');
const Message = require('../../models/Message');

// !!! ROUTE NOT COMPLETE !!! ROUTE NOT COMPLETE !!!
// @route   GET api/messages
// @desc    Create message thread / add message to existing thread
// @access  Private
router.get('/:postId', auth, async (req, res) => {
  try {
    //get related post
    // const post = await Post.findOne({ postId: req.params.postId }).populate();
    // res.json(post);

    const post = await Post.findById(req.params.id).populate();
    //get owner and buyer
    //check if thread between users already exists for this post
    //create new thread
    //add message to thread
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

module.exports = router;
