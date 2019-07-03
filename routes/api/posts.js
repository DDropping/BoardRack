//Routes for api/posts
// - POST api/posts (create a new post)
// - POST api/posts/update/:id (update an existing post)
// - GET api/posts/postId/:id (retrieve post given id)
// - GET api/posts (retrieve all posts)
// - GET api/posts/filter (retrieve filtered posts)
// - DELETE api/posts/delete/:postId (delete post given id)

const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Post = require('../../models/Post');
const User = require('../../models/User');

// @route   POST api/posts
// @desc    Create a post
// @access  Protected
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

// @route   POST api/posts/update/:id
// @desc    Update a post
// @access  Protected
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
      let post = await Post.findById({ _id: req.params.id });

      if (!post) {
        res.status(404).json('Post Not Found');
      }

      if (post.user.toString() !== req.user.id) {
        return res.status(400).json({ msg: 'User Not Authorized' });
      }

      // Update
      post = await Post.findByIdAndUpdate(
        req.params.id,
        { $set: postFields },
        { new: true }
      );

      return res.json(post);
    } catch (err) {
      console.error(err.message);
      re.status(500).send('Server Error');
    }
  }
);

// @route   GET api/posts/postId/:id
// @desc    Get specific post
// @access  Public
router.get('/postId/:id', async (req, res) => {
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
      return res.status(404).json({ msg: 'Post Not Found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   GET api/posts
// @desc    Get all post
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

//TODO      Check if in filters{} the json formats should be like if(height) filters.dimensions.height = height
// @route   GET api/posts/filter
// @desc    Get filtered posts
// @access  Public
router.get('/filter', async (req, res) => {
  try {
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

    const filters = {};
    if (isNewBoard) filters.isNewBoard = isNewBoard;
    if (description) filters.description = description;
    if (title) filters.title = title;
    if (price) filters.price = price;
    if (shaper) filters.shaper = shaper;
    if (model) filters.model = model;
    if (boardType) filters.boardType = boardType;
    if (condition) filters.condition = condition;
    if (isWaterTight) filters.isWaterTight = isWaterTight;
    if (height) filters.height = height;
    if (width) filters.width = width;
    if (depth) filters.depth = depth;
    if (volume) filters.volume = volume;
    if (country) filters.country = country;
    if (state) filters.state = state;
    if (city) filters.city = city;
    if (zip) filters.zip = zip;

    const posts = await Post.find(filters).populate('user', 'username');
    res.json(posts);
  } catch {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @TODO    Allow admin to delete post
// @route   DELETE api/posts/delete/:id
// @desc    Delete specific post
// @access  Protected (Owner only)
router.delete('/delete/:postId', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    //check if post exists
    if (!post) {
      return res.status(404).json({ msg: 'Post Not Found' });
    }
    //check if user === post author
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

// @route   PUT api/posts/like/:id
// @desc    Like a specific post
// @access  Private
router.put('/like/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    //check if user has already liked the post
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: 'Post already liked' });
    }

    //add like and save
    post.likes.unshift({ user: req.user.id });
    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/posts/unlike/:id
// @desc    Unlike a specific post
// @access  Private
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    //check if user has already liked the post
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length ===
      0
    ) {
      return res.status(400).json({ msg: 'Post has not been liked' });
    }

    //remove like and save
    const removePostIndex = post.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removePostIndex, 1);

    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
