import {
  ADD_IMG_URL_TO_STORE,
  ADD_THUMBNAIL_URL_TO_STORE,
  IMAGE_UPLOADING_TRUE,
  IMAGE_UPLOADING_FALSE,
  ADD_IMAGE_PREVIEW_OBJECTURL,
  OBJECTURL_IMG_URL,
  DEFAULT_IMG_URL,
  THUMBNAIL_IMG_URL,
  INCREASE_IMG_KEY,
  DECREASE_IMG_KEY
} from '../../actions/types';

const INITIAL_STATE = {
  imgList: [],
  thumbnailList: [],
  previewList: [],
  isLoading: false,
  imgKey: 0,
  imgList2: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREASE_IMG_KEY:
      return {
        ...state,
        imgKey: state.imgKey + 1
      };
    case DECREASE_IMG_KEY:
      return {
        ...state,
        imgKey: state.imgKey - 1
      };
    case OBJECTURL_IMG_URL:
      return {
        imgList2: state.imgList2.concat({
          key: action.payload.imgKey,
          objectUrl: action.payload.objectUrl,
          imgDefault: null,
          imgThumbnail: null
        })
      };
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
