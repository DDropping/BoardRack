const express = require('express');
const router = express.Router();
const axios = require('axios');

const config = require('config');
const HERE_REST_APP_ID = config.get('here_REST_App_Id');
const HERE_REST_APP_CODE = config.get('here_REST_App_Code');

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
  const { city, state, postalCode } = req.body;
  try {
    const location = await axios.get(
      `https://geocoder.api.here.com/6.2/geocode.json?app_id=${HERE_REST_APP_ID}&app_code=${HERE_REST_APP_CODE}&searchtext=${city}+${state}+${postalCode}`
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

    const address = {
      lat: Latitude,
      lng: Longitude,
      Country,
      State,
      City,
      PostalCode
    };

    res.json(address);
  } catch {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
