//Post details model:
//new, title, price, shpaer, model, boardType, condition, waterTight, dimensions, location, discription, author
//add later: potos []

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  new: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  shaper: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  boardType: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    required: true
  },
  waterTight: {
    type: Boolean,
    required: true
  },
  dimensions: {
    height: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    depth: {
      type: Number,
      required: true
    },
    voluem: {
      type: Number,
      required: true
    }
  },
  location: {
    country: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    zip: {
      type: String,
      required: true
    }
  },
  discription: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
