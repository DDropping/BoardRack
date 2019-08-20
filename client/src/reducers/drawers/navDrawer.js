import { TOGGLE_NAV_DRAWER } from '../../actions/types';

const initialState = {
  isVisible: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV_DRAWER:
      return {
        ...state,
        isVisible: !isVisible
      };
  }
}
