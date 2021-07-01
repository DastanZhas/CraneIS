import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { ADD_PERSON_SUPERVISION, GET_PERSON_SUPERVISION, PUT_PERSON_SUPERVISION, } from "./types";
import { tokenConfig } from "./auth";

// Person Responsible For Supervision # Лицо ответственное по надзору
// GET Person
export const getPersonResponsibleSupervision = () => (dispatch, getState) => {
    axios.get("/api/personResponsibleVision/", tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_PERSON_SUPERVISION,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//ADD PERSON Supervision
export const addPersonResponsibleSupervision = (personResponsibleSupervision) => (dispatch, getState) => {
    axios.post("/api/personResponsibleVision", personResponsibleSupervision, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addResponsibleVision: "Person added successfully" }));
        dispatch({
            type: ADD_PERSON_SUPERVISION,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//DELETE PERSON Supervision
export const deletePersonResponsibleSupervision = (id) => (dispatch, getState) => {
    axios.delete(`/api/personResponsibleVision/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deleteResponsibleVision: "Person deleted" }));
        dispatch({
            type: DELETE_PERSON_FIXED_STATE,
            payload: id
        });
    }).catch(err => console.log(err));
}

// UPDATE PERSON FIX # PUT
export const updatePersonResponsibleSupervision = (id) => (dispatch, getState) => {
    axios.put(`/api/personResponsibleVision/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ updateResponsibleVision: "Person data updated" }));
        dispatch({
            type: PUT_PERSON_SUPERVISION,
            payload: id
        });
    }).catch(err => console.log(err));
}

