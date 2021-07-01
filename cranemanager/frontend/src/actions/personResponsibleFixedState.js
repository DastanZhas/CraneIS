import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_PERSON_FIXED_STATE, ADD_PERSON_FIXED_STATE, DELETE_PERSON_FIXED_STATE, PUT_PERSON_FIXED_STATE } from "./types";
import { tokenConfig } from "./auth";

// Person Responsible To Fixed State # Лицо ответственное за исправленное состояние
// GET Person
export const getPersonResponsibleToFixedState = () => (dispatch, getState) => {
    axios.get("/api/personResponsibleFix/", tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_PERSON_FIXED_STATE,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//ADD PERSON FIX
export const addPersonResponsibleToFixedState = (personResponsibleToFixedState) => (dispatch, getState) => {
    axios.post("/api/personResponsibleFix", personResponsibleToFixedState, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addResponsibleFix: "Person added successfully" }));
        dispatch({
            type: ADD_PERSON_FIXED_STATE,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//DELETE PERSON FIX
export const deletePersonResponsibleToFixedState = (id) => (dispatch, getState) => {
    axios.delete(`/api/personResponsibleFix/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deletePersonResponsibleFix: "Person deleted" }));
        dispatch({
            type: DELETE_PERSON_FIXED_STATE,
            payload: id
        });
    }).catch(err => console.log(err));
}

// UPDATE PERSON FIX # PUT
export const updatePersonResponsibleToFixedState = (id) => (dispatch, getState) => {
    axios.put(`/api/personResponsibleFix/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ updatePersonResponsibleFix: "Person data updated" }));
        dispatch({
            type: PUT_PERSON_FIXED_STATE,
            payload: id
        });
    }).catch(err => console.log(err));
}

