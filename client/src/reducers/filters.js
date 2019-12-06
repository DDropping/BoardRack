import {
  UPDATE_LAYOUT,
  UPDATE_CONDITION,
  UPDATE_BOARD_TYPE,
  UPDATE_PRICE_HIGH,
  UPDATE_PRICE_LOW,
  UPDATE_ANY_PRICE,
  UPDATE_DISTANCE,
  DELETE_PRICE
} from '../actions/types';

const initialState = {
  layout: 'Thumb',
  distance: 25,
  anyPrice: true, // any price
  priceLow: null,
  priceHigh: null,
  boardType: [],
  condition: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LAYOUT:
      return {
        ...state,
        layout: action.payload
      };
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
    case DELETE_PRICE:
      return {
        ...state,
        anyPrice: true
      };
    default:
      return state;
  }
}
