import axios from 'axios';

export const getUserAddress = ({ lat, lng }) => async dispatch => {
  console.log('Inside get user address action');
  console.log('action: ' + lat);

  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ lat, lng });
  console.log('body: ' + body);

  console.log('sending to server...');
  try {
    const res = await axios.post('/api/externalAPI/getAddress', body, config);
    console.log(res);
  } catch (e) {
    console.log(e.msg);
  }
};
