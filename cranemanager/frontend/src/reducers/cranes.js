import { GET_CRANES, DELETE_CRANE, ADD_CRANE, UPDATE_CRANE } from '../actions/types';
import { GET_EXAMINATION, DELETE_EXAMINATION, ADD_EXAMINATION } from "../actions/types";
import { GET_TO1, GET_TO2, ADD_TO1, ADD_TO2, DELETE_TO1, DELETE_TO2, PUT_TO1, PUT_TO2 } from '../actions/types';
import { GET_INSPECTION, ADD_INSPECTION, DELETE_INSPECTION, PUT_INSPECTION } from '../actions/types';
import { GET_PERSON_FIXED_STATE, ADD_PERSON_FIXED_STATE, DELETE_PERSON_FIXED_STATE, PUT_PERSON_FIXED_STATE } from '../actions/types';
import { GET_PERSON_SUPERVISION, ADD_PERSON_SUPERVISION, DELETE_PERSON_SUPERVISION, PUT_PERSON_SUPERVISION } from '../actions/types';

const initialState = {
    cranes: [],
    examination: [],
    to1: [],
    to2: [],
    inspection: [],
    personResponsibleToFixedState: [],
    personResponsibleForSupervision: []
};

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
        case UPDATE_CRANE:
            return {
                ...state,
                cranes: state.cranes.filter(cranes => cranes.id !== action.payload)
            };
    default:
        return state;
    }
}