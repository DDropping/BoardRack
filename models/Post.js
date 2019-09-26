//Post details model:
//add later: potos []

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  imgList: [
    {
      imgKey: String,
      objectUrl: String,
      imgDefault: String,
      imgThumbnail: String
    }
  ],
  title: {
    type: String,
    required: true
  },
  price: {
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
  description: {
    type: String,
    required: true
  },
  tail: {
    type: String,
    required: true
  },
  finSystem: {
    type: String,
    required: true
  },
  finConfiguration: {
    type: String,
    required: true
  },
  LengthFt: {
    type: String,
    required: true
  },
  LengthIn: {
    type: String,
    required: true
  },
  width: {
    type: String,
    required: true
  },
  depth: {
    type: String,
    required: true
  },
  volume: {
    type: String,
    required: true
  },
  construction: {
    type: String,
    required: true
  },
  glassing: {
    type: String,
    required: true
  },
  contour: {
    type: String,
    required: true
  },
  waveSize: {
    type: String,
    required: true
  },
  drive: {
    type: String,
    required: true
  },
  paddlePower: {
    type: String,
    required: true
  },
  movability: {
    type: String,
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
