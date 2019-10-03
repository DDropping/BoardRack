import axios from 'axios';

// const config = require('config');
// const HERE_REST_APP_ID = config.get('here_REST_App_Id');
// const HERE_REST_APP_CODE = config.get('here_REST_App_Code');

export const getUserAddress = (lat, lng) => async dispatch => {
  console.log('Inside get user address action');
  //   const address = await axios.get(
  //     `https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?app_id=${HERE_REST_APP_ID}&app_code=${HERE_REST_APP_CODE}&mode=retrieveAddresses&prox=${lat},${lng}`
  //   );
  //   console.log(address.data.Response.View[0].Result[0].Location.Address);
};
