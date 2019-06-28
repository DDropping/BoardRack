//Routes for api/posts
// - POST api/posts (create a new post)
// - POST api/posts/update/:id (update an existing post)
// - GET api/posts/:id (retrieve post given id)
// - GET api/posts (retrieve all posts)

const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Post = require('../../models/Post');
const User = require('../../models/User');

// @route   POST api/posts
// @desc    Create a post
// @access  Private
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

// @route   POST api/posts/update/:id ***might not be secure, need to test if anyone can change or just the origional poster***
// @desc    Update a post
// @access  Private
router.post(
  '/update/:id',
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
      let post = await Post.findById({ _id: req.params.id }); //need to handle catch if post DNE

      if (post) {
        // Update
        post = await Post.findByIdAndUpdate(
          req.params.id,
          { $set: postFields },
          { new: true }
        );

        return res.json(post);
      }
    } catch (err) {
      console.error(err.message);
      re.status(500).send('Server Error');
    }
  }
);

// @route   GET api/posts/:id
// @desc    Get specific post
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      'user',
      'username'
    );

    if (!post) {
      return res.status(400).json({ msg: 'There is no post with this id' });
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   GET api/posts
// @desc    Get specific post
// @access  Public
router.get('/', async (req, res) => {
  try {
    const post = await Post.find({}).populate('user', 'username');

    if (!post) {
      return res.status(400).json({ msg: 'There is no posts' });
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @TODO    Allow admin to delete post
// @route   DELETE api/posts/delete/:id
// @desc    Delete specific post
// @access  Private
router.delete('/delete/:postId', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ msg: 'Post Not Found' });
    }
    if (post.user.toString() !== req.user.id) {
      return res.status(400).json({ msg: 'User Not Authorized' });
    }
    await post.remove();
    res.json('Post Deleted');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
