import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_TO2, ADD_TO2, DELETE_TO2, PUT_TO2 } from "./types";
import { tokenConfig } from "./auth";

// First Technical Maintenance ## Техническое обслуживание 1
// GET TO2
export const getTo2 = () => (dispatch, getState) => {
    axios.get("/api/to2/", tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_TO2,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//ADD TO2
export const addTo2 = (to2) => (dispatch, getState) => {
    axios.post("/api/to2/", to2, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addTo2: "TO2 added" }));
        dispatch({
            type: ADD_TO2,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//DELETE TO2
export const deleteTo2 = (id) => (dispatch, getState) => {
    axios.delete(`/api/to2/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deleteTM2: "TO2 deleted" }));
        dispatch({
            type: DELETE_TO2,
            payload: id
        });
    }).catch(err => console.log(err));
}

// UPDATE TO2 # PUT
export const updateTo2 = (id) => (dispatch, getState_) => {
    axios.put(`/api/to2/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ updatePutTo2: "Data updated in TO2" }));
        dispatch({
            type: PUT_TO2,
            payload: id
        });
    }).catch(err => console.log(err));
}