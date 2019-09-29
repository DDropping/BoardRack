import store from '../../store';
import { CHANGE_POST_STEP } from '../types';

export const changePostStep = currentStep => dispatch => {
  dispatch({ type: CHANGE_POST_STEP, payload: currentStep });
};

export const clickNext = () => dispatch => {
  dispatch({
    type: CHANGE_POST_STEP,
    payload: store.getState().postSteps.currentStep + 1
  });
};

export const clickPrevious = () => dispatch => {
  dispatch({
    type: CHANGE_POST_STEP,
    payload: store.getState().postSteps.currentStep - 1
  });
};
