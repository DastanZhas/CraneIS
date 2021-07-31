import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { tokenConfig } from '../../actions/auth';
import store from '../../store';
import { useDispatch } from "react-redux";
import { DELETE_CRANE, DELETE_EXAMINATION, GET_CRANES, GET_EXAMINATION, GET_INSPECTION, GET_PERSON_FIXED_STATE, GET_PERSON_SUPERVISION, GET_TO1, GET_TO2 } from '../../actions/types';
import { returnErrors, createMessage } from "../../actions/messages";
import PropTypes, { element } from 'prop-types';
import cranes from '../../reducers/cranes';


const CraneDetail = () => {
    const [crane, setCrane] = useState([]);
    const [examination, setExamination] = useState([]);
    const [to1, setTo1] = useState([]);
    const [to2, setTo2] = useState([]);
    const [inspection, setInspection] = useState([]);
    const [personResponsibleToFixedState, setPersonResponsibleToFixedState] = useState([]);
    const [personResponsibleForSupervision, setPersonResponsibleForSupervision] = useState([]);

    const { id } = useParams();

    const dispatch = useDispatch();

    const getSingleCrane = () => async (dispatch, getState) => {
        await axios
            .get(`http://127.0.0.1:8000/api/cranes/${id}/`, tokenConfig(getState))
            .then((response) => {
                dispatch({type: GET_CRANES});
                dispatch({type: GET_EXAMINATION});
                dispatch({type: GET_TO1});
                dispatch({type: GET_TO2});
                dispatch({type: GET_INSPECTION});
                dispatch({type: GET_PERSON_FIXED_STATE});
                dispatch({type: GET_PERSON_SUPERVISION});
                const singleCrane = response.data;
                const singleExamination = response.data.examinationPeriod;
                const to1data = response.data.technicalMaintenanceFirst;
                const to2data = response.data.technicalMaintenanceSecond;
                const inspectionData = response.data.inspection;
                const personResponsibleFixedStateData = response.data.personResponsibleToFixedState;
                const personResponsibleForSupervisionData = response.data.personResponsibleForSupervision;
                setCrane(singleCrane);
                setExamination(singleExamination);
                setTo1(to1data);
                setTo2(to2data);
                setInspection(inspectionData);
                setPersonResponsibleToFixedState(personResponsibleFixedStateData);
                setPersonResponsibleForSupervision(personResponsibleForSupervisionData);
                console.log(singleCrane);
            })
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
                    <p>{examination.id}</p>
                    <p>{examination.examinationPeriodDate}</p>
                    <p>{examination.technicalPassportdownloadUrl}</p>
                    <p>{to1.id}</p>
                    <p>{to2.id}</p>
                    <p>{inspection.id}</p>
                    <p>{personResponsibleToFixedState.id}</p>
                    <p>{personResponsibleForSupervision.id}</p>
                    <strong>-----</strong>
                </div>
                <p>{crane.workMode}</p>
                <p>{crane.installationPlace}</p>
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
