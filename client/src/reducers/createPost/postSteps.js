const INITIAL_STATE = {
  currentStep: 0,
  stepOneStatus: 'process',
  stepTwoStatus: 'wait',
  stepThreeStatus: 'wait'
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
