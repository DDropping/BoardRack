import {
  ADD_IMG_URL_TO_STORE,
  ADD_THUMBNAIL_URL_TO_STORE,
  IMAGE_UPLOADING_TRUE,
  IMAGE_UPLOADING_FALSE,
  ADD_IMAGE_PREVIEW_OBJECTURL
} from '../../actions/types';

const INITIAL_STATE = {
  imgList: [],
  thumbnailList: [],
  previewList: [],
  isLoading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_IMAGE_PREVIEW_OBJECTURL:
      return {
        ...state,
        previewList: state.previewList.concat(action.payload)
      };
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
