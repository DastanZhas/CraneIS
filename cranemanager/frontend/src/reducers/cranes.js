import { GET_CRANES, DELETE_CRANE, ADD_CRANE } from '../actions/types';

const initialState = {
    cranes: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_CRANES:
            return {
                ...state,
                cranes: action.payload
            };
        case DELETE_CRANE:
            return {
                ...state,
                cranes: state.cranes.filter(cranes => cranes.id !== action.payload)
            };
        case ADD_CRANE:
                return {
                    ...state,
                    cranes: [...state.cranes, action.payload]
                };
    default:
        return state;
    }
}