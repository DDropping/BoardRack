//Post details model:
//new, title, price, shpaer, model, boardType, condition, waterTight, dimensions, location, discription, author
//add later: potos []

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  isNewBoard: {
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
    required: false
  },
  model: {
    type: String,
    required: false
  },
  boardType: {
    type: String,
    required: false
  },
  condition: {
    type: String,
    required: false
  },
  isWaterTight: {
    type: Boolean,
    required: false
  },
  dimensions: {
    height: {
      type: Number,
      required: false
    },
    width: {
      type: Number,
      required: false
    },
    depth: {
      type: Number,
      required: false
    },
    volume: {
      type: Number,
      required: false
    }
  },
  location: {
    country: {
      type: String,
      required: false
    },
    state: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    zip: {
      type: String,
      required: false
    }
  },
  discription: {
    type: String,
    required: false
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
