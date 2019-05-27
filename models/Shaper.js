//Shaper account model:
//username, email, password, [messageThreads], isShaper, isShop, date
//add later: country, state, zip, address, hoursOfOperation, contactPhoneNumber, contactEmail, avgTurnAroudTime, boards[{}]

const mongoose = require('mongoose');

const ShaperSchema = new mongoose.Schema({
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
  messageThreads: [
    {
      type: Schema.Types.ObjectId,
      ref: 'message'
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('shaper', ShaperSchema);
