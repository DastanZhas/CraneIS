import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_CRANES, DELETE_CRANE, ADD_CRANE, UPDATE_CRANE } from "./types";
import { tokenConfig } from "./auth";
import cranes from "../reducers/cranes";

//GET CRANES
export const getCranes = () => (dispatch, getState) => {
    axios.get("/api/cranes", tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_CRANES,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//DELETE CRANE
export const deleteCranes = (id) => (dispatch, getState) => {
    axios.delete(`/api/cranes/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deleteCrane: "Crane Deleted" }));
        dispatch({
            type: DELETE_CRANE,
            payload: id
        });
    }).catch(err => console.log(err));
}

//ADD CRANE
export const addCranes = (cranes) => (dispatch, getState) => {
    axios.post("/api/cranes/", cranes, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addCrane: "Crane Added" }));
        dispatch({
            type: ADD_CRANE,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//UPDATE CRANE (PUT)
export const updateCranes = (id, cranes) => dispatch => {
    axios.put(`/api/cranes/${id}/`, cranes, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ updateCrane: "Crane Updated!" }));
        dispatch({
            type: UPDATE_CRANE,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// export const findByinventorizationNumber = inventorizationNumber