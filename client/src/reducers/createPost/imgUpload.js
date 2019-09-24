import {
  ADD_IMG_URL_TO_STORE,
  ADD_THUMBNAIL_URL_TO_STORE,
  IMAGE_UPLOADING_TRUE,
  IMAGE_UPLOADING_FALSE
} from '../../actions/types';

const INITIAL_STATE = {
  imgList: [],
  thumbnailList: [],
  isLoading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_IMG_URL_TO_STORE:
      return {
        ...state,
        imgList: state.imgList.concat(action.payload)
      };
    case ADD_THUMBNAIL_URL_TO_STORE:
      return {
        ...state,
        thumbnailList: state.thumbnailList.concat(action.payload)
      };
    case IMAGE_UPLOADING_TRUE:
      return {
        ...state,
        isLoading: true
      };
    case IMAGE_UPLOADING_FALSE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
