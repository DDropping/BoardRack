//User account model:
//username, email, password, [likedposts], [messageThreads], isShaper, isShop, date

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  likedPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post'
    }
  ],
  messageThreads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'message'
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
