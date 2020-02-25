const express = require('express');
const router = express.Router();
const axios = require('axios');
const request = require('request');
const AWS = require('aws-sdk');
//const fs = require('fs');

const config = require('config');
const HERE_REST_APP_ID = config.get('here_REST_App_Id');
const HERE_REST_APP_CODE = config.get('here_REST_App_Code');
const HERE_API_KEY = config.get('here_API_Key');
const IPSTACK_ACCESS_KEY = config.get('ipstack_access_key');
const S3_KEY = config.get('S3_Access_Key_Id');
const S3_SECRET = config.get('S3_Secret_Acess_Key');
const S3_REGION = config.get('S3_Region');
const S3_BUCKET = config.get('S3_Bucket');

var s3 = new AWS.S3({
  accessKeyId: S3_KEY,
  secretAccessKey: S3_SECRET
});

// @route   GET api/externalAPI/map
// @desc    Get picture of location of map given coords
// @access  Public
router.get('/uploadMap', async (req, res) => {
  var url = `https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=${HERE_API_KEY}&c=37.7552896,-122.503168&z=12`;
  request({ url, encoding: null }, (err, resp, buffer) => {
    s3.upload({
      Bucket: S3_BUCKET,
      ACL: 'public-read',
      Key: Date.now().toString(),
      Body: buffer
    })
      .promise()
      .then(data => res.send(data.Location));
  });
});

// @route   GET api/externalAPI/map
// @desc    Get picture of location of map given coords
// @access  Public
router.get('/map2', async (req, res) => {
  const fs = require('fs');
  const Path = require('path');
  var url = `https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=${HERE_API_KEY}&c=37.7552896,-122.503168&z=12`;
  const path = Path.resolve(__dirname, '00_Notes', 'img.jpeg');
  console.log('starting download');
  const response = axios({
    method: 'GET',
    url: url,
    responseType: 'stream'
  });
  res.send(url);
  console.log('starting create write stream');
  response.data.pipe(fs.createWriteStream(path));
  console.log('finished create write stream');
  return new Promise((resolve, reject) => {
    response.data.on('end', () => {
      console.log('finshed done');
      resolve();
    });
    response.data.on('error', err => {
      reject(err);
    });
  });
});

// @route   GET api/externalAPI/map
// @desc    Get picture of location of map given coords
// @access  Public
router.get('/map', async (req, res) => {
  try {
    // const lat = req.body.lat;
    // const lng = req.body.lng;
    console.log('sending request');
    ///////////////////////

    const uploadRemoteFileToS3 = async remoteAddr => {
      const response = await axios({
        method: 'get',
        url: remoteAddr,
        responseType: 'stream'
      });
      if (response.status === 200) {
        const file_name = remoteAddr.substring(remoteAddr.lastIndexOf('/') + 1);
        const content_type = response.headers['content-type'];
        response.data.pipe(uploadFromStream(file_name, content_type));
      }
      return new Promise((resolve, reject) => {
        response.data.on('end', response => {
          console.log(response);
          resolve(response);
        });

        response.data.on('error', () => {
          console.log(response);
          reject(response);
        });
      });
    };

    const uploadFromStream = (file_name, content_type) => {
      return new Promise((resolve, reject) => {
        const pass = new stream.PassThrough();
        const obj_key = generateObjKey(file_name);
        const params = {
          bucket: S3_BUCKET,
          acl: 'public-read',
          Key: obj_key,
          ContentType: content_type,
          Body: pass
        };
        s3.upload(params, function(err, data) {
          if (!err) {
            console.log(data);
            return resolve(data.Location);
          } else {
            console.log(err);
            return reject(err);
          }
        });
      });
    };

    //call uploadRemoteFileToS3
    var remoteAddr = `https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=${HERE_API_KEY}&c=37.7552896,-122.503168&z=12`;
    uploadRemoteFileToS3(remoteAddr)
      .then(finalResponse => {
        console.log(finalResponse);
      })
      .catch(err => {
        console.log(err);
      });

    ///////////////////////

    // const locationImg = await axios
    //   .get(
    //     `https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=${HERE_API_KEY}&c=37.7552896,-122.503168&z=12`,
    //     {
    //       responseType: 'arraybuffer'
    //     }
    //   )
    //   .then(response =>
    //     Buffer.from(response.data, 'binary').toString('base64')
    //   );

    console.log('finished request');

    // if (!locationImg) {
    //   return res.status(400).json({ msg: 'Could not retrieve location map' });
    // } else {
    res.send('locationImg');
    // }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/externalAPI/getApproximateLocation
// @desc    Get user Location with user IP address
// @access  Public
router.get('/getApproximateLocation', async (req, res) => {
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;

  try {
    if (ip === '::1' || ip === '127.0.0.1') {
    } else {
      const approxLocation = await axios.get(
        `http://api.ipstack.com/${ip}?access_key=${IPSTACK_ACCESS_KEY}`
      );

      //setup response
      const {
        country_name,
        region_name,
        city,
        zip,
        latitude,
        longitude
      } = approxLocation.data;

      const location = {
        country_name,
        region_name,
        city,
        zip,
        latitude,
        longitude
      };

      res.json(location);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/externalAPI/getAddress
// @desc    Get user address provided lat/lng
// @access  Public
router.post('/getAddress', async (req, res) => {
  const { lat, lng } = req.body;
  try {
    const location = await axios.get(
      `https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?app_id=${HERE_REST_APP_ID}&app_code=${HERE_REST_APP_CODE}&mode=retrieveAddresses&prox=${lat},${lng}`
    );

    //setup response
    const {
      Country,
      State,
      City,
      PostalCode
    } = location.data.Response.View[0].Result[0].Location.Address;

    const address = { lat, lng, Country, State, City, PostalCode };

    res.json(address);
  } catch {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/externalAPI/getCoords
// @desc    Get user lat/lng given address
// @access  Public
router.post('/getCoords', async (req, res) => {
  const { address, city, state, postalCode } = req.body;
  try {
    const location = await axios.get(
      `https://geocoder.api.here.com/6.2/geocode.json?app_id=${HERE_REST_APP_ID}&app_code=${HERE_REST_APP_CODE}&searchtext=${address}+${city}+${state}+${postalCode}`
    );

    //setup response
    const {
      Latitude,
      Longitude
    } = location.data.Response.View[0].Result[0].Location.DisplayPosition;
    const {
      Country,
      State,
      City,
      PostalCode
    } = location.data.Response.View[0].Result[0].Location.Address;

    const position = {
      lat: Latitude,
      lng: Longitude,
      Country,
      State,
      City,
      PostalCode
    };

    res.json(position);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
