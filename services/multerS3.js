const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const config = require('config');
const S3_KEY = config.get('S3_Access_Key_Id');
const S3_SECRET = config.get('S3_Secret_Acess_Key');
const S3_REGION = config.get('S3_Region');

aws.config.update({
  secretAccessKey: S3_KEY,
  accessKeyId: S3_SECRET,
  region: S3_REGION
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'boardrack',
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;
