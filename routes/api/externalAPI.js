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

// @route   GET api/externalAPI/locationMap
// @desc    Get picture of location of map given coords
// @access  Public
router.get('/locationMap', async (req, res) => {
  try {
    var lat = req.body.lat.toFixed(2);
    var lng = req.body.lng.toFixed(2);
    var url = `https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=${HERE_API_KEY}&c=${lat},${lng}&z=13&w=1920&h=1080&u=1500`;
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
