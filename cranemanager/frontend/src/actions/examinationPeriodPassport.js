import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_EXAMINATION, DELETE_EXAMINATION, ADD_EXAMINATION } from "./types";
import { tokenConfig } from "./auth";

//GET EXAMINATION
export const getExamination = () => (dispatch, getState) => {
    axios.get("/api/examination/", tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_EXAMINATION,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//ADD EXAMINATION
export const addExamination = (examination) => (dispatch, getState) => {
    axios.post("/api/examination/", examination, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addExamination: "Examination passport and period Added" }));
        dispatch({
            type: ADD_EXAMINATION,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//DELETE EXAMINATION
export const deleteExamination = (id) => (dispatch, getState) => {
    axios.delete(`/api/examination/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deleteCrane: "Examination tech passport row Deleted" }));
        dispatch({
            type: DELETE_EXAMINATION,
            payload: id
        });
    }).catch(err => console.log(err));
}