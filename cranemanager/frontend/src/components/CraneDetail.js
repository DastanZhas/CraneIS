import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { tokenConfig } from '../actions/auth';
import store from '../store';
import { useDispatch } from "react-redux";
import { DELETE_CRANE } from '../actions/types';
import { returnErrors, createMessage } from "../actions/messages";


const CraneDetail = () => {

    const [crane, setCrane] = useState("")
    const [examination, setExamination] = useState("")

    const { id } = useParams();

    const dispatch = useDispatch();

    const getSingleCrane = () => async (dispatch, getState) => {
        const { data } = await axios
                .get(`http://127.0.0.1:8000/api/cranes/${id}/`, tokenConfig(getState))
                setCrane(data);
    }

    const getSingleExamination = () => async (dispatch, getState) => {
        const { data } = await axios
                .get(`http://127.0.0.1:8000/api/examination/${id}/`, tokenConfig(getState))
                setExamination(data);
    }

    const deleteSingleCrane = () => async (dispatch, getState) => {
        await axios
        .delete(`http://127.0.0.1:8000/api/cranes/${id}/`, tokenConfig(getState))
        .then((response) => {
            dispatch(createMessage({ craneDelete: "Crane was deleted" }));
            dispatch({type: DELETE_CRANE})
            history.push('/')
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    }

    useEffect(() => {
        store.dispatch(getSingleCrane());
        store.dispatch(getSingleExamination());
    }, [])

    const handleDeleteClick = () => {
        store.dispatch(deleteSingleCrane());
    }

    return (
        <div>
            <br />
            <h1>CraneDetail</h1>
            <div className="card card-body modal-card">
                <p>{crane.craneType}</p>
                <p>{crane.loadCapacity}</p>
                <p>{crane.registerNumber}</p>
                <p>{crane.factoryNumber}</p>
                <p>{crane.inventorizationNumber}</p>
                <p>{crane.factoryManufacturer}</p>
                <div>
                    <strong>-----</strong>
                    <p>{crane.examinationPeriod}</p>
                    <p>{examination.examinationPeriodDate}</p>
                    <p>{examination.examinationPeriodTitle}</p>
                    <p>{examination.examinationPeriodContent}</p>
                    <strong>-----</strong>
                </div>
                <p>{crane.workMode}</p>
                <p>{crane.installationPlace}</p>
                <p>{crane.technicalMaintenanceFirst}</p>
                <p>{crane.technicalMaintenanceSecond}</p>
                <p>{crane.inspection}</p>
                <p>{crane.personResponsibleToFixedState}</p>
                <p>{crane.personResponsibleForSupervision}</p>
                <p>{crane.metalInspection}</p>
                <p>{crane.mechanicalControl}</p>
                <p>{crane.electricalParts}</p>
                <p>{crane.owner}</p>



                <Link className="btn btn-warning" to={`/${crane.id}/update`}>Редактировать</Link>
                <br />
                <Link className="btn btn-danger" to="/cranes" onClick={handleDeleteClick}>Удалить</Link>
                <br />
                <Link className="btn btn-primary" to="/cranes">Назад</Link>
            </div>
        </div>
    );
};

export default CraneDetail;