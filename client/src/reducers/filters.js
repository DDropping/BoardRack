import {
  UPDATE_CONDITION,
  UPDATE_BOARD_TYPE,
  UPDATE_PRICE_HIGH,
  UPDATE_PRICE_LOW,
  UPDATE_ANY_PRICE
} from '../actions/types';

const initialState = {
  distance: 25,
  areaCode: null,
  anyPrice: true, // any price
  priceLow: 0,
  priceHigh: 1000,
  boardType: [
    'Shortboard',
    'Longboard',
    'Fish',
    'Funboard',
    'Hybrid',
    'Gun',
    'Grovler',
    'SUP'
  ],
  condition: ['New', 'Lightly Used', 'Used', 'Heavily Used', 'Thrashed']
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
    default:
      return state;
  }
}
