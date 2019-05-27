//Message account model:
//postID, messageThreads[{}]

const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  postId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'post'
    }
  ],
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

module.exports = User = mongoose.model('message', MessageSchema);
