const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const config = require('config');
const S3_KEY = config.get('S3_Access_Key_Id');
const S3_SECRET = config.get('S3_Secret_Acess_Key');
const S3_REGION = config.get('S3_Region');

aws.config.update({
  secretAccessKey: S3_SECRET,
  accessKeyId: S3_KEY,
  region: S3_REGION
});

const s3 = new aws.S3();

const imageFilter2 = (req, file, callback) => {
  var path = require('path');
  var ext = path.extname(file.originalname);
  if (
    ext !== '.png' &&
    ext !== '.PNG' &&
    ext !== '.jpg' &&
    ext !== '.JPG' &&
    ext !== '.jpeg' &&
    ext !== '.JPEG'
  ) {
    return callback(new Error('Only images are allowed'));
  }
  callback(null, true);
};

const upload = multer({
  fileFilter: imageFilter2,
  storage: multerS3({
    s3: s3,
    bucket: 'boardrack',
    acl: 'public-read',
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  }),
  limits: { fileSize: 2000000 } //limit file size to 2,000,000 bytes = 2MB
});

module.exports = upload;
