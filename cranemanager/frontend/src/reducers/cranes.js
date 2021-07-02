import { GET_CRANES, DELETE_CRANE, ADD_CRANE } from '../actions/types';
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
        //Examination Period and passport # Срок освидетельствование и паспорт
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
        //Technical Maintenance 2 # Техническое обслуживание 1 - ТО1
        case GET_TO1:
            return {
                ...state,
                to1: action.payload
            }
        case ADD_TO1:
            return {
                ...state,
                to1: [...state.to1, action.payload]
            }
        case DELETE_TO1:
            return {
                ...state,
                to1: state.to1.filter(to1 => to1.id !== action.payload)
            }
        case PUT_TO1:
            return {
                ...state,
                to1: state.to1.filter(to1 => to1.ud !== action.payload)
            }
        //Technical Maintenance 2 # Техническое обслуживание 2 - ТО2
        case GET_TO2:
            return {
                ...state,
                to2: action.payload
            }
        case ADD_TO2:
                return {
                    ...state,
                    to2: [...state.to2, action.payload]
                }
        case DELETE_TO2:
                return {
                    ...state,
                    to2: state.to2.filter(to2 => to2.id !== action.payload)
                }
        case PUT_TO2:
                return {
                    ...state,
                    to2: state.to2.filter(to2 => to2.ud !== action.payload)
                }
        //Inspection # Обследование и сроки
        case GET_INSPECTION:
            return {
                ...state,
                inspection: action.payload
            }
        case ADD_INSPECTION:
            return {
                ...state,
                inspection: [...state.inspection, action.payload]
            }
        case DELETE_INSPECTION:
            return {
                ...state,
                inspection: state.inspection.filter(inspection => inspection.id !== action.payload)
            }
        case PUT_INSPECTION:
            return {
                ...state,
                inspection: state.inspection.filter(inspection => inspection.id !== action.payload)
            }
        // Person Responsible to fixed state # Лицо ответственное за исправленное состояние
        case GET_PERSON_FIXED_STATE:
            return {
                ...state,
                personResponsibleToFixedState: action.payload
            }
        case ADD_PERSON_FIXED_STATE:
            return {
                ...state,
                personResponsibleToFixedState: [...state.personResponsibleToFixedState, action.payload]
            }
        case DELETE_PERSON_FIXED_STATE:
            return {
                ...state,
                personResponsibleToFixedState: state.personResponsibleToFixedState.filter(personResponsibleToFixedState => personResponsibleToFixedState.id !== action.payload)
            }
        case PUT_PERSON_FIXED_STATE:
            return {
                ...state,
                personResponsibleToFixedState: state.personResponsibleToFixedState.filter(personResponsibleToFixedState => personResponsibleToFixedState.id !== action.payload)
            }
        // Person Responsible for Supervision # Лицо ответственное по надзору
        case GET_PERSON_SUPERVISION:
            return {
                ...state,
                personResponsibleForSupervision: action.payload
            }
        case ADD_PERSON_SUPERVISION:
            return {
                ...state,
                personResponsibleForSupervision: [...state.personResponsibleForSupervision, action.payload]
            }
        case DELETE_PERSON_SUPERVISION:
            return {
                ...state,
                personResponsibleForSupervision: state.personResponsibleForSupervision.filter(personResponsibleForSupervision => personResponsibleForSupervision.id !== action.payload)
            }
        case PUT_PERSON_SUPERVISION:
            return {
                ...state,
                personResponsibleForSupervision: state.personResponsibleForSupervision.filter(personResponsibleForSupervision => personResponsibleForSupervision.id !== action.payload)
            }
    default:
        return state;
    }
}