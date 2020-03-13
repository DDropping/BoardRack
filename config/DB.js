//Connection to MongoDB

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const db_dev = config.get('mongoURI_dev');

const connectDB = async () => {
  try {
    await mongoose.connect(db_dev, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
