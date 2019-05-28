//Message details model:
//postID, messageThreads[{}]

const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post'
  },
  messageThreads: [
    {
      mFrom: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = Message = mongoose.model('message', MessageSchema);
