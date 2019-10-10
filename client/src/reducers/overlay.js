import {
  OPEN_POST_MODAL,
  CLOSE_POST_MODAL,
  TOGGLE_REGISTER_MODAL,
  TOGGLE_REGISTER_BUTTON_LOADING,
  TOGGLE_LOGOUT_MODAL,
  TOGGLE_LOGIN_MODAL,
  TOGGLE_LOGIN_BUTTON_LOADING,
  TOGGLE_NAV_DRAWER,
  CLOSE_NAV_DRAWER
} from '../actions/types';

const initialState = {
  isPostModalVisible: false,
  isRegisterModalVisible: false,
  isRegisterModalLoading: false,
  isLogoutModalVisible: false,
  isLogoutModalLoading: false,
  isLoginModalVisible: false,
  isLoginModalLoading: false,
  isNavDrawerVisible: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_POST_MODAL:
      console.log('post modal reducer');
      return {
        ...state,
        isPostModalVisible: true
      };
    case CLOSE_POST_MODAL:
      return {
        ...state,
        isPostModalVisible: false
      };
    case TOGGLE_REGISTER_MODAL:
      return {
        ...state,
        isRegisterModalVisible: !state.isRegisterModalVisible
      };
    case TOGGLE_REGISTER_BUTTON_LOADING:
      return {
        ...state,
        isRegisterModalLoading: action.payload
      };
    case TOGGLE_LOGOUT_MODAL:
      return {
        ...state,
        isLogoutModalVisible: !state.isLogoutModalVisible
      };
    case TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        isLoginModalVisible: !state.isLoginModalVisible
      };
    case TOGGLE_LOGIN_BUTTON_LOADING:
      return {
        ...state,
        isLoginModalLoading: action.payload
      };
    case TOGGLE_NAV_DRAWER:
      return {
        ...state,
        isNavDrawerVisible: !state.isNavDrawerVisible
      };
    case CLOSE_NAV_DRAWER:
      return {
        ...state,
        isNavDrawerVisible: false
      };
    default:
      return state;
  }
}
