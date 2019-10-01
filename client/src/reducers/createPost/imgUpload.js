import {
  OBJECTURL_IMG_URL,
  DEFAULT_IMG_URL,
  THUMBNAIL_IMG_URL,
  INCREASE_IMG_KEY,
  DECREASE_IMG_KEY,
  DELETE_IMG_PREVIEW,
  IMG_UPLOAD_DONE
} from '../../actions/types';

const INITIAL_STATE = {
  imgKey: 0,
  imgList: [],
  imgLoading: []
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
        ...state,
        imgList: [
          ...state.imgList,
          {
            imgKey: action.payload.imgKey,
            isLoading: true,
            objectUrl: action.payload.objectUrl,
            imgDefault: null,
            imgThumbnail: null
          }
        ]
      };
    case DEFAULT_IMG_URL:
      return {
        ...state,
        imgList: state.imgList.map(item =>
          item.imgKey === action.payload.imgKey
            ? { ...item, imgDefault: action.payload.imgDefault }
            : item
        )
      };
    case THUMBNAIL_IMG_URL:
      return {
        ...state,
        imgList: state.imgList.map(item =>
          item.imgKey === action.payload.imgKey
            ? { ...item, imgThumbnail: action.payload.imgThumbnail }
            : item
        )
      };
    case DELETE_IMG_PREVIEW:
      return {
        ...state,
        imgList: state.imgList.filter(img => {
          if (img.imgKey === action.payload) {
            return false;
          }
          return true;
        })
      };
    case IMG_UPLOAD_DONE:
      return {
        ...state,
        imgList: state.imgList.map(item =>
          item.imgKey === action.payload ? { ...item, isLoading: false } : item
        )
      };
    default:
      return state;
  }
}
