import { CHANGE_POST_STEP } from '../../actions/types';

const INITIAL_STATE = {
  currentStep: 0,
  isStepOneVisible: true,
  isStepTwoVisible: false,
  isStepThreeVisible: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_POST_STEP:
      if (action.payload == 0) {
        return {
          currentStep: action.payload,
          isStepOneVisible: true,
          isStepTwoVisible: false,
          isStepThreeVisible: false
        };
      } else if (action.payload == 1) {
        return {
          currentStep: action.payload,
          isStepOneVisible: false,
          isStepTwoVisible: true,
          isStepThreeVisible: false
        };
      } else {
        return {
          currentStep: action.payload,
          isStepOneVisible: false,
          isStepTwoVisible: false,
          isStepThreeVisible: true
        };
      }
      return {
        currentStep: action.payload
      };
    default:
      return state;
  }
}
