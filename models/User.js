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
  date: {
    type: Date,
    default: Date.now
  },
  userType: {
    type: String,
    default: 'user',
    required: true
  },
  location: {
    lat: { type: Number },
    lng: { type: Number },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    postalCode: { type: String },
    mapImage: { type: String }
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
  ],
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post'
    }
  ],

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
      postalCode: {
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
    }
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
      postalCode: {
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
    }
  }
});

module.exports = User = mongoose.model('user', UserSchema);
