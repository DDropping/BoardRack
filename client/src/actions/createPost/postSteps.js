import { CHANGE_POST_STEP } from '../types';

export const changePostStep = currentStep => dispatch => {
  dispatch({ type: CHANGE_POST_STEP, payload: currentStep });
};
