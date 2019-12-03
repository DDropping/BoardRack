//Post details model:
// add geo-location

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
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
  description: { type: String },
  tail: { type: String },
  finSystem: { type: String },
  finConfiguration: { type: String },
  LengthFt: { type: Number },
  LengthIn: { type: Number },
  width: { type: Number },
  depth: { type: Number },
  volume: { type: Number },
  construction: { type: String },
  glassing: { type: String },
  contour: { type: String },
  waveSize: { type: String },
  drive: { type: String },
  paddlePower: { type: String },
  movability: { type: String },
  shaper: { type: String },
  model: { type: String },
  location: {
    lat: { type: Number },
    lng: { type: Number },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    postalCode: { type: String }
  },
  images: [
    {
      imgKey: String,
      thumbnail: String,
      default: String
    }
  ],
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  viewCount: {
    type: Number,
    default: 0
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
