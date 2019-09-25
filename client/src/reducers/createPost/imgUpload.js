import {
  OBJECTURL_IMG_URL,
  DEFAULT_IMG_URL,
  THUMBNAIL_IMG_URL,
  IMAGE_UPLOADING_TRUE,
  IMAGE_UPLOADING_FALSE,
  INCREASE_IMG_KEY,
  DECREASE_IMG_KEY,
  DELETE_IMG_PREVIEW
} from '../../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  imgKey: 0,
  imgList: []
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
        /* filter would not remove img by itself, adding ternerary console.log makes it work */
        imgList: state.imgList.filter(img =>
          img.imgKey !== action.payload
            ? console.log(img.imgKey + ' removed')
            : console.log()
        )
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
