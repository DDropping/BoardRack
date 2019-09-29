const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const config = require('config');
const S3_KEY = config.get('S3_Access_Key_Id');
const S3_SECRET = config.get('S3_Secret_Acess_Key');
const S3_REGION = config.get('S3_Region');
const S3_BUCKET = config.get('S3_Bucket');

aws.config.update({
  secretAccessKey: S3_SECRET,
  accessKeyId: S3_KEY,
  region: S3_REGION
});

const s3 = new aws.S3();

const imageFilter = (req, file, callback) => {
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

const maxSize = 5 * 1000 * 1000; //max file size

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: S3_BUCKET,
    acl: 'public-read',
    limits: {
      fileSize: maxSize,
      files: 5
    },
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    },
    fileFilter: imageFilter,
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    }
  })
});

module.exports = upload;
