import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_CRANES, DELETE_CRANE, ADD_CRANE } from "./types";

//GET CRANES
export const getCranes = () => dispatch => {
    axios.get("/api/cranes/")
    .then(res => {
        dispatch({
            type: GET_CRANES,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//DELETE CRANE
export const deleteCranes = (id) => dispatch => {
    axios.delete(`/api/cranes/${id}/`)
    .then(res => {
        dispatch(createMessage({ deleteCrane: "Crane Deleted" }));
        dispatch({
            type: DELETE_CRANE,
            payload: id
        });
    }).catch(err => console.log(err));
}

//ADD CRANE
export const addCranes = (cranes) => dispatch => {
    axios.post("/api/cranes/", cranes)
    .then(res => {
        dispatch(createMessage({ addCrane: "Crane Added" }));
        dispatch({
            type: ADD_CRANE,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}