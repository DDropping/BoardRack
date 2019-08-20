import {TOGGLE_LOGOUT_MODAL} from '../../actions/types';

const initialState = {
    isVisible = false,
    isLoading = false
}

export default function(state=initialState, action){
    switch(action.payload){
        case TOGGLE_LOGOUT_MODAL:
            return{
                ...state,
                isVisible= !state.isVisible
            }
        case TOGGLE_LOGOUT_LOADING:
            return{
                ...state,
                isLoading = action.payload
            }
        default:
            return state
    }
}