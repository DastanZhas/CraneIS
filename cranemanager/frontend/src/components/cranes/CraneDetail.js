import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Image } from 'react-bootstrap';

import { tokenConfig } from '../../actions/auth';

import store from '../../store';
import { useDispatch } from "react-redux";
import { useParams } from 'react-router';

import {
    DELETE_CRANE, GET_CRANES, GET_EXAMINATION, GET_INSPECTION,
    GET_PERSON_FIXED_STATE, GET_PERSON_SUPERVISION, GET_TO1, GET_TO2
} from '../../actions/types';
import { returnErrors, createMessage } from "../../actions/messages";
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
                dispatch({ type: GET_CRANES });
                dispatch({ type: GET_EXAMINATION });
                dispatch({ type: GET_TO1 });
                dispatch({ type: GET_TO2 });
                dispatch({ type: GET_INSPECTION });
                dispatch({ type: GET_PERSON_FIXED_STATE });
                dispatch({ type: GET_PERSON_SUPERVISION });
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
            })
    }

    const deleteSingleCrane = () => async (dispatch, getState) => {
        await axios
            .delete(`http://127.0.0.1:8000/api/cranes/${id}/`, tokenConfig(getState))
            .then((response) => {
                dispatch(createMessage({ craneDelete: "Crane was deleted" }));
                dispatch({ type: DELETE_CRANE })
                window.location.reload();
            }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    }

    useEffect(() => {
        store.dispatch(getSingleCrane());
    }, [])

    const handleDeleteClick = () => {
        store.dispatch(deleteSingleCrane());
    }

    return (
        <div>
            <h1>CraneDetail</h1>
            <ListGroup>
                <ListGroup>
                    <ListGroupItem>Тип крана: {crane.craneType}</ListGroupItem>
                    <ListGroupItem>Грузоподьемность: {crane.loadCapacity}</ListGroupItem>
                    <ListGroupItem>Регистрационный номер: {crane.registerNumber}</ListGroupItem>
                    <ListGroupItem>Заводской номер: {crane.factoryNumber}</ListGroupItem>
                    <ListGroupItem>Инвентаризационный: {crane.inventorizationNumber}</ListGroupItem>
                    <ListGroupItem>Завод изготовитель: {crane.factoryManufacturer}</ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Срок освидетельствования</ListGroupItemHeading>
                        <ListGroupItemText>
                            Срок освидетельствования: {examination.examinationPeriodDate}
                        </ListGroupItemText>
                        <ListGroupItemText>
                            <a href={examination.technicalPassportdownloadUrl}>Скачать технический паспорт</a>
                        </ListGroupItemText>
                    </ListGroupItem>

                    <ListGroupItem>Режим работы: {crane.workMode}</ListGroupItem>
                    <ListGroupItem>Место установки: {crane.installationPlace}</ListGroupItem>

                    <ListGroupItem>
                        <ListGroupItemHeading>Техническое обслуживание 1</ListGroupItemHeading>
                        <ListGroupItemText>
                            Контент: {to1.to1}
                        </ListGroupItemText>
                        <ListGroupItemText>
                            <strong>Сроки прохождения технического обследования 1:</strong>
                            <p>{to1.periodOfFirstTMfrom} - {to1.periodOfFirstTMto}</p>
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Техническое обслуживание 2</ListGroupItemHeading>
                        <ListGroupItemText>
                            Контент: {to2.to2}
                        </ListGroupItemText>
                        <ListGroupItemText>
                            <strong>Сроки прохождения технического обследования 2:</strong>
                            <p>{to2.periodOfSecondTMfrom} - {to2.periodOfSecondTMto}</p>
                        </ListGroupItemText>
                        <ListGroupItemText>
                            Ведомость дефектов: {to2.defectsStatement}
                        </ListGroupItemText>
                        <ListGroupItemText>
                            Ведомость материалов: {to2.materialsStatement}
                        </ListGroupItemText>
                    </ListGroupItem>

                    <ListGroupItem>
                        <ListGroupItemHeading>Обследование и сроки</ListGroupItemHeading>
                        <ListGroupItemText>
                            <strong>Сроки обследования</strong>
                            <p>{inspection.periodInspectionfrom} - {inspection.periodInspectionto}</p>
                        </ListGroupItemText>
                        <ListGroupItemText>
                            Контент: {inspection.inspection}
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
                <br />
                <ListGroup>
                    <ListGroupItem>
                        <ListGroupItemHeading>Лицо ответственное за исправленное состояние</ListGroupItemHeading>
                        <Image src={personResponsibleToFixedState.personImage} roundedCircle style={{ width: 100, height: 100 }} />
                        <ListGroupItemText>
                            <strong>{personResponsibleToFixedState.employeeFirstName} {personResponsibleToFixedState.employeeSecondName} {personResponsibleToFixedState.employeePatronymic}</strong>
                        </ListGroupItemText>
                        <ListGroupItemText>
                            <strong>Должность: {personResponsibleToFixedState.employeePost}</strong>
                        </ListGroupItemText>
                        <ListGroupItemText>
                            <strong>Номер приказа: {personResponsibleToFixedState.orderNumber}</strong>
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
                <br />
                <ListGroup>
                    <ListGroupItem>
                        <ListGroupItemHeading>Лицо ответственное по надзору</ListGroupItemHeading>
                        <Image src={personResponsibleForSupervision.personImage} roundedCircle style={{ width: 100, height: 100 }} />
                        <ListGroupItemText>
                            <strong>{personResponsibleForSupervision.employeeFirstName} {personResponsibleForSupervision.employeeSecondName} {personResponsibleForSupervision.employeePatronymic}</strong>
                        </ListGroupItemText>
                        <ListGroupItemText>
                            <strong>Должность: {personResponsibleForSupervision.employeePost}</strong>
                        </ListGroupItemText>
                        <ListGroupItemText>
                            <strong>Номер приказа: {personResponsibleForSupervision.orderNumber}</strong>
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
                <br />
                <ListGroupItem>Контроль по металлу : {crane.metalInspection}</ListGroupItem>
                <ListGroupItem>Механический контроль: {crane.mechanicalControl}</ListGroupItem>
                <ListGroupItem>Электронная часть: {crane.electricalParts}</ListGroupItem>
                <br />
                <Link className="btn btn-warning" to={`/${crane.id}/update`}>Редактировать</Link>
                <br />
                <Link className="btn btn-danger" to="/cranes" onClick={handleDeleteClick}>Удалить</Link>
                <br />
                <Link className="btn btn-primary" to="/cranes">Назад</Link>
            </ListGroup>
        </div>
    );
};

export default CraneDetail;
