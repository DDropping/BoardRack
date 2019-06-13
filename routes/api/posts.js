const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const User = require('../../models/User');

// @route   GET api/posts/postID  ***NEEDS WORK / NOT FINISHED / NEEDS TO BE TESTED***
// @desc    Get selected post
// @access  Public
router.get('/', async (req, res) => {
  try {
    const post = await Post.findOne({ post: req.post.id }).populate('user', [
      'username'
    ]);

    if (!post) {
      return res.status(400).json({ msg: 'There is no post with this id' });
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/posts/create
// @desc    Create a new post
// @access  Public
router.post('/', async (req, res) => {});

module.exports = router;
