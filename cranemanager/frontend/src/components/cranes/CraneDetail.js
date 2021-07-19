import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { tokenConfig } from '../../actions/auth';
import store from '../../store';
import { useDispatch } from "react-redux";
import { DELETE_CRANE, DELETE_EXAMINATION } from '../../actions/types';
import { returnErrors, createMessage } from "../../actions/messages";


const CraneDetail = () => {
    const [crane, setCrane] = useState("");
    const [examination, setExamination] = useState("");

    const { id } = useParams();

    const dispatch = useDispatch();

    const getSingleCrane = () => async (dispatch, getState) => {
        const { data } = await axios
            .get(`http://127.0.0.1:8000/api/cranes/${id}/`, tokenConfig(getState))
        setCrane(data);
    }

    // useParams crane id and examination id is not the same
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
                dispatch({ type: DELETE_CRANE })
                history.push('/')
            }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    }

    const deleteSingleExamination = () => async (dispatch, getState) => {
        await axios
            .delete(`http://127.0.0.1:8000/api/examination/${id}`, tokenConfig(getState))
            .then((response) => {
                dispatch(createMessage({ examinationDelete: "Examination was deleted successfully!" }))
                dispatch({ type: DELETE_EXAMINATION })
                history.push('/')
            }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    }

    useEffect(() => {
        store.dispatch(getSingleCrane());
        store.dispatch(getSingleExamination());
    }, [])
    
    const handleDeleteClick = () => {
        store.dispatch(deleteSingleCrane());
        store.dispatch(deleteSingleExamination());
    }

    return (
        <div>
            <h1>CraneDetail</h1>
            <div>
                <p>Тип крана: {crane.craneType}</p>
                <p>Грузоподьемность: {crane.loadCapacity}</p>
                <p>Регистрационный номер: {crane.registerNumber}</p>
                <p>Заводской номер: {crane.factoryNumber}</p>
                <p>Инвентаризационный: {crane.inventorizationNumber}</p>
                <p>Завод изготовитель: {crane.factoryManufacturer}</p>
                <div>
                    <strong>Сроки освидетельствования и технический паспорт</strong>
                    <p>ID: {crane.examinationPeriod}</p>
                    <p>Срок освидетельствования: {examination.examinationPeriodDate}</p>
                    <p>{examination.technicalPassportdownloadUrl}</p>
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
