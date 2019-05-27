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
      type: Schema.Types.ObjectId,
      ref: 'post'
    }
  ],
  messageThreads: [
    {
      type: Schema.Types.ObjectId,
      ref: 'message'
    }
  ],
  isShaper: {
    type: Boolean,
    defualt: false
  },
  isShop: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
