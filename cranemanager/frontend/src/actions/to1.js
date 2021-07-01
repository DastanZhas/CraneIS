import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_TO1, ADD_TO1, DELETE_TO1, PUT_TO1 } from "./types";
import { tokenConfig } from "./auth";

// First Technical Maintenance ## Техническое обслуживание 1
// GET TO1
export const getTo1 = () => (dispatch, getState) => {
    axios.get("/api/to1/", tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_TO1,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//ADD TO1
export const addTo1 = (to1) => (dispatch, getState) => {
    axios.post("/api/to1/", to1, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addTo1: "TO1 added" }));
        dispatch({
            type: ADD_TO1,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//DELETE TO1
export const deleteTo1 = (id) => (dispatch, getState) => {
    axios.delete(`/api/to1/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deleteTM1: "TO1 deleted" }));
        dispatch({
            type: DELETE_TO1,
            payload: id
        });
    }).catch(err => console.log(err));
}

// UPDATE TO1 # PUT
export const updateTo1 = (id) => (dispatch, getState_) => {
    axios.put(`/api/to1/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ updatePutTo1: "Data updated in TO1" }));
        dispatch({
            type: PUT_TO1,
            payload: id
        });
    }).catch(err => console.log(err));
}