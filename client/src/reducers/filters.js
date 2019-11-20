import {
  UPDATE_CONDITION,
  UPDATE_BOARD_TYPE,
  UPDATE_PRICE_HIGH,
  UPDATE_PRICE_LOW,
  UPDATE_ANY_PRICE,
  UPDATE_DISTANCE,
  UPDATE_POSTAL_CODE,
  DELETE_PRICE
} from '../actions/types';

const initialState = {
  distance: 25,
  areaCode: null,
  anyPrice: true, // any price
  priceLow: null,
  priceHigh: null,
  boardType: [],
  condition: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CONDITION:
      return {
        ...state,
        condition: action.payload
      };
    case UPDATE_BOARD_TYPE:
      return {
        ...state,
        boardType: action.payload
      };
    case UPDATE_PRICE_HIGH:
      return {
        ...state,
        priceHigh: action.payload
      };
    case UPDATE_PRICE_LOW:
      return {
        ...state,
        priceLow: action.payload
      };
    case UPDATE_ANY_PRICE:
      return {
        ...state,
        anyPrice: action.payload
      };
    case UPDATE_DISTANCE:
      return {
        ...state,
        distance: action.payload
      };
    case UPDATE_POSTAL_CODE:
      return {
        ...state,
        areaCode: action.payload
      };
    case DELETE_PRICE:
      return {
        ...state,
        anyPrice: true
      };
    default:
      return state;
  }
}
