import axios from 'axios';

export const createPost = (formProps, imgList) => async dispatch => {
  const images = imgList.map(obj => {
    return {
      thumbnail: obj.imgThumbnail,
      default: obj.imgDefault
    };
  });

  const postItems = formProps;
  postItems.images = images;

  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //stringify the form items
  const body = JSON.stringify(postItems);

  //post new account to DB
  try {
    console.log(body);
    const res = await axios.post('/api/posts', body, config);
    console.log(res);
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};
