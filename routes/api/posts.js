const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const User = require('../../models/User');

// @route   GET api/posts  ***NEEDS WORK / NOT FINISHED***
// @desc    Get selected post
// @access  Public
router.get('/', async (req, res) => {
  try {
    const post = await Post.findOne({});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
