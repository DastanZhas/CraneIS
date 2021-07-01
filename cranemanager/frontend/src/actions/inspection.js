import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_INSPECTION, ADD_INSPECTION, DELETE_INSPECTION, PUT_INSPECTION } from "./types";
import { tokenConfig } from "./auth";

// INSPECTION # Обследование и сроки
// GET Inspection
export const getInspection = () => (dispatch, getState) => {
    axios.get("/api/inspection/", tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_INSPECTION,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//ADD Inspection
export const addInspection = (inspection) => (dispatch, getState) => {
    axios.post("/api/inspection", inspection, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addinspectionperiod: "Inspections and period added successfully" }));
        dispatch({
            type: ADD_INSPECTION,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//DELETE Inspection
export const deleteInspection = (id) => (dispatch, getState) => {
    axios.delete(`/api/inspection/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deleteinspectionperiod: "Inspections and periods are deleted" }));
        dispatch({
            type: DELETE_INSPECTION,
            payload: id
        });
    }).catch(err => console.log(err));
}

// UPDATE Inspection # PUT
export const updateInspection = (id) => (dispatch, getState) => {
    axios.put(`/api/inspection/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ updateinspectionperiod: "Inspections and periods are updated" }));
        dispatch({
            type: PUT_INSPECTION,
            payload: id
        });
    }).catch(err => console.log(err));
}

