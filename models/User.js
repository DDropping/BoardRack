//User account model:
//username, email, password, [likedposts], [messageThreads], isShaper, isShop, date

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
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
  date: {
    type: Date,
    default: Date.now
  },
  isUser: {
    type: Boolean,
    default: false,
    required: true
  },
  isShop: {
    type: Boolean,
    default: false,
    required: true
  },
  isShaper: {
    type: Boolean,
    default: false,
    required: true
  },

  //user account (likedPost, messageThreads, posts)
  userInfo: {
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
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
      }
    ]
  },

  //shop account (address, storeHours, website, contactInfo, messageThreads, posts)
  shopInfo: {
    address: {
      country: {
        type: String
      },
      state: {
        type: String
      },
      city: {
        type: String
      },
      zip: {
        type: String
      },
      address: {
        type: String
      }
    },
    storeHours: {
      sunday: {
        type: String
      },
      monday: {
        type: String
      },
      tuesday: {
        type: String
      },
      wednesday: {
        type: String
      },
      thursday: {
        type: String
      },
      friday: {
        type: String
      },
      saturday: {
        type: String
      }
    },
    website: {
      type: String
    },
    contactInfo: {
      contactEmail: {
        type: String
      },
      contactPhone: {
        type: String
      }
    },
    messageThreads: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'message'
      }
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
      }
    ]
  },

  //shaper account (address, storeHours, website, contactInfo, messageThreads, posts)
  shaperInfo: {
    address: {
      country: {
        type: String
      },
      state: {
        type: String
      },
      city: {
        type: String
      },
      zip: {
        type: String
      },
      address: {
        type: String
      }
    },
    storeHours: {
      sunday: {
        type: String
      },
      monday: {
        type: String
      },
      tuesday: {
        type: String
      },
      wednesday: {
        type: String
      },
      thursday: {
        type: String
      },
      friday: {
        type: String
      },
      saturday: {
        type: String
      }
    },
    website: {
      type: String
    },
    contactInfo: {
      contactEmail: {
        type: String
      },
      contactPhone: {
        type: String
      }
    },
    messageThreads: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'message'
      }
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
      }
    ]
  }
});

module.exports = User = mongoose.model('user', UserSchema);
