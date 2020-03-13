//Routes for api/upload
// - GET api/upload (upload list of images to digital ocean spaces

const express = require('express');
const router = express.Router();

const upload = require('../../services/multerS3');

const singleUpload = upload.single('image');

router.post('/', function(req, res) {
  singleUpload(req, res, function(err) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: 'Image Upload Error', detail: err.message }]
      });
    }
    return res.json({ imageUrl: req.file.location });
  });
});

module.exports = router;

// /////////////////////////////////////////
// const express = require('express');
// const router = express.Router();
// const aws = require('aws-sdk');
// const multer = require('multer');
// const multerS3 = require('multer-s3');

// //set s3 endpoint to digitalocean spaces
// const spacesEndpoint = new aws.Endpoint('sfo2.digitaloceanspaces.com');
// const s3 = new aws.S3({
//   endpoint: spacesEndpoint
// });

// //multer function to upload file to DO spaces
// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'boardrack-spaces',
//     acl: 'public-read',
//     key: function(request, file, cb) {
//       console.log(file);
//       cb(null, file.originalname);
//     }
//   })
// }).array('upload', 1);

// //route to upload image
// router.post('/upload', function(request, response, next) {
//   upload(request, response, function(error) {
//     if (error) {
//       console.log(error);
//     }
//     console.log('File uploaded successfully.');
//   });
// });

// //does not include posts, can use populate to add in
// // @route   GET api/shops
// // @desc    Get all shops
// // @access  Public
// // router.get('/', async (req, res) => {
// //     try {
// //       const profiles = await User.find({ userType: 'shop' }).select(
// //         '-password -email -messageThreads'
// //       );
// //       res.json(profiles);
// //     } catch (err) {
// //       console.err(err.message);
// //       res.status(500).send('Server Error');
// //     }
// //   });

// module.exports = router;
