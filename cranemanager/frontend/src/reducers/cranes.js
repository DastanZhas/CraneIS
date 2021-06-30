import { GET_CRANES, DELETE_CRANE, ADD_CRANE, GET_EXAMINATION, DELETE_EXAMINATION, ADD_EXAMINATION } from '../actions/types';

const initialState = {
    cranes: [],
    examination: []
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
        case GET_EXAMINATION:
            return {
                ...state,
                examination: action.payload
            }
        case DELETE_EXAMINATION:
            return {
                ...state,
                examination: state.examination.filter(examination => examination.id !== action.payload)
            }
        case ADD_EXAMINATION:
            return {
                ...state,
                examination: [...state.examination, action.payload]
            }
    default:
        return state;
    }
}