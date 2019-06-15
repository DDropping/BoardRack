const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Post = require('../../models/Post');
const User = require('../../models/User');

// @route   GET api/posts/postID  ***NEEDS WORK / NOT FINISHED / NEEDS TO BE TESTED***
// @desc    Get selected post
// @access  Public
// router.get('/', async (req, res) => {
//   try {
//     const post = await Post.findOne(req.post.id).populate('user', ['username']);

//     if (!post) {
//       return res.status(400).json({ msg: 'There is no post with this id' });
//     }

//     res.json(post);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// @route   POST api/posts
// @desc    Create a post
// @access  Public
router.post(
  '/',
  [
    auth,
    [
      (check('title', 'Title is required')
        .not()
        .isEmpty(),
      check('price', 'Price is required')
        .not()
        .isEmpty())
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      isNewBoard,
      title,
      price,
      shaper,
      model,
      boardType,
      condition,
      isWaterTight,
      height,
      width,
      depth,
      volume,
      country,
      state,
      city,
      zip,
      description
    } = req.body;

    //build post object
    const postFields = {};
    postFields.user = req.user.id;
    if (isNewBoard) postFields.isNewBoard = isNewBoard;
    if (title) postFields.title = title;
    if (price) postFields.price = price;
    if (shaper) postFields.shaper = shaper;
    if (model) postFields.model = model;
    if (boardType) postFields.boardType = boardType;
    if (condition) postFields.condition = condition;
    if (isWaterTight) postFields.isWaterTight = isWaterTight;
    if (description) postFields.description = description;

    // //build dimensions object
    postFields.dimensions = {};
    if (height) postFields.dimensions.height = height;
    if (width) postFields.dimensions.width = width;
    if (depth) postFields.dimensions.depth = depth;
    if (volume) postFields.dimensions.volume = volume;

    // //build location object
    postFields.location = {};
    if (country) postFields.location.country = country;
    if (state) postFields.location.state = state;
    if (city) postFields.location.city = city;
    if (zip) postFields.location.zip = zip;

    try {
      let post = new Post(postFields);
      await post.save();
      res.json(post);
      console.log(post);
    } catch (err) {
      console.error(err.message);
      re.status(500).send('Server Error');
    }
  }
);

module.exports = router;
