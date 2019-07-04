//Post details model:
//new, title, price, shpaer, model, boardType, condition, waterTight, dimensions, location, discription, author
//add later: potos []

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
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
      type: String,
      required: false
    },
    width: {
      type: String,
      required: false
    },
    depth: {
      type: String,
      required: false
    },
    volume: {
      type: String,
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
  description: {
    type: String,
    required: false
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      }
    }
  ]
});

module.exports = Post = mongoose.model('post', PostSchema);
