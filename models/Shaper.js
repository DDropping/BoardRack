//Shaper account model:
//username, email, password, address, storeHours, website, [contactInfo], [messageThreads], isShaper, isShop, date
//add later: avgTurnAroudTime, boards[{}]

// const mongoose = require('mongoose');

// const ShaperSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   address: {
//     country: {
//       type: String
//     },
//     state: {
//       type: String
//     },
//     city: {
//       type: String
//     },
//     zip: {
//       type: String
//     },
//     address: {
//       type: String
//     }
//   },
//   storeHours: {
//     sunday: {
//       type: String
//     },
//     monday: {
//       type: String
//     },
//     tuesday: {
//       type: String
//     },
//     wednesday: {
//       type: String
//     },
//     thursday: {
//       type: String
//     },
//     friday: {
//       type: String
//     },
//     saturday: {
//       type: String
//     }
//   },
//   website: {
//     type: String
//   },
//   contactInfo: {
//     contactEmail: {
//       type: String
//     },
//     contactPhone: {
//       type: String
//     }
//   },
//   messageThreads: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'message'
//     }
//   ],
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = Shaper = mongoose.model('shaper', ShaperSchema);
