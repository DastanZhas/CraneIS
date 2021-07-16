import React, { useState } from 'react';
import { Button, Dropdown, Form } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import axios from "axios";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { createMessage, returnErrors } from "../actions/messages";
import { tokenConfig } from '../actions/auth';
import store from '../store';
import { ADD_PERSON_FIXED_STATE } from '../actions/types';

const AddCrane = () => {
    const [craneType, setCraneType] = useState("")
    const [loadCapacity, setLoadCapacity] = useState("")
    const [registerNumber, setRegisterNumber] = useState("")
    const [factoryNumber, setFactoryNumber] = useState("")
    const [inventorizationNumber, setInventorizationNumber] = useState("")
    const [factoryManufacturer, setFactoryManufacturer] = useState("")
    const [examinationPeriod, setExaminationPeriod] = useState("")
    const [workMode, setWorkMode] = useState("")
    const [installationPlace, setInstallationPlace] = useState("")
    const [technicalMaintenanceFirst, setTechnicalMaintenanceFirst] = useState("")
    const [technicalMaintenanceSecond, setTechnicalMaintenanceSecond] = useState("")
    const [inspection, setInspection] = useState("")
    const [personResponsibleToFixedState, setPersonResponsibleToFixedState] = useState("")
    const [personResponsibleForSupervision, setPersonResponsibleForSupervision] = useState("")
    const [metalInspection, setMetalInspection] = useState("")
    const [mechanicalControl, setMechanicalControl] = useState("")
    const [electricalParts, setElectricalParts] = useState("")
    const [owner, setOwner] = useState("")

    //Лицо ответственное за исправленное состояние
    const [personImage, setPersonImage] = useState();
    const [employeePost, setEmployeePost] = useState("")
    const [orderNumber, setOrderNumber] = useState("")
    const [employeeFirstName, setEmployeeFirstName] = useState("")
    const [employeeSecondName, setEmployeeSecondName] = useState("")
    const [employeePatronymic, setEmployeePatronymic] = useState("")


    const history = useHistory();

    const dispatch = useDispatch();

    const AddCraneInfo = () => async (dispatch, getState) => {
        let formField = new FormData()

        formField.append('craneType', craneType)
        formField.append('loadCapacity', loadCapacity)
        formField.append('registerNumber', registerNumber)
        formField.append('factoryNumber', factoryNumber)
        formField.append('inventorizationNumber', inventorizationNumber)
        formField.append('factoryManufacturer', factoryManufacturer)
        formField.append('examinationPeriod', examinationPeriod)
        formField.append('workMode', workMode)
        formField.append('installationPlace', installationPlace)
        formField.append('technicalMaintenanceFirst', technicalMaintenanceFirst)
        formField.append('technicalMaintenanceSecond', technicalMaintenanceSecond)
        formField.append('inspection', inspection)
        formField.append('personResponsibleToFixedState', personResponsibleToFixedState)
        formField.append('personResponsibleForSupervision', personResponsibleForSupervision)
        formField.append('metalInspection', metalInspection)
        formField.append('mechanicalControl', mechanicalControl)
        formField.append('electricalParts', electricalParts)
        formField.append('owner', owner)

        await axios
            .post(`/api/cranes/`, formField, tokenConfig(getState))
            .then((response) => {
                dispatch(createMessage({ craneAdded: "Crane added!" }));
                dispatch({ type: ADD_CRANE })
                console.log(response.data)
                history.push('/')
            }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    }

    const AddPersonResponsibleToFixedState = () => async (dispatch, getState) => {
        let formFieldPersonFix = new FormData()

        if (personImage !== null) {
            formFieldPersonFix.append('personImage', personImage, personImage.name)
        }
        formFieldPersonFix.append('employeePost', employeePost)
        formFieldPersonFix.append('orderNumber', orderNumber)
        formFieldPersonFix.append('employeeFirstName', employeeFirstName)
        formFieldPersonFix.append('employeeSecondName', employeeSecondName)
        formFieldPersonFix.append('employeePatronymic', employeePatronymic)

        await axios
            .post(`/api/personResponsibleFix/`, formFieldPersonFix, tokenConfig(getState))
            .then((response) => {
                dispatch(createMessage({ AddPersonResponsibleToFixedState: "person added!" }));
                dispatch({ type: ADD_PERSON_FIXED_STATE })
                history.push('/')
            }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    }

    const handleClick = (e) => {
        e.preventDefault();
        store.dispatch(AddCraneInfo());
        store.dispatch(AddPersonResponsibleToFixedState());
    }

    return (
        <div>
            <br />
            <br />
            <br />
            <h1>Добавление крана</h1>
            <Form>
                <Form.Group controlId="contentId">
                    <Form.Label>Тип крана</Form.Label>
                    <Form.Control
                        type="text"
                        rows={3}
                        placeholder="Введите тип крана"
                        name="craneType"
                        value={craneType}
                        onChange={(e) => setCraneType(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="contentId">
                    <Form.Label>Грузоподьемность</Form.Label>
                    <Form.Control
                        type="number"
                        rows={1}
                        placeholder="Грузоподьемность"
                        name="loadCapacity"
                        value={loadCapacity}
                        onChange={(e) => setLoadCapacity(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="contentId">
                    <Form.Label>Регистрационный номер</Form.Label>
                    <Form.Control
                        type="number"
                        rows={1}
                        placeholder="Введите регистрационный номер"
                        name="registerNumber"
                        value={registerNumber}
                        onChange={(e) => setRegisterNumber(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="contentId">
                    <Form.Label>Заводской номер</Form.Label>
                    <Form.Control
                        type="number"
                        rows={1}
                        placeholder="Введите заводской номер"
                        name="factoryNumber"
                        value={factoryNumber}
                        onChange={(e) => setFactoryNumber(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="contentId">
                    <Form.Label>Инвентаризационный номер</Form.Label>
                    <Form.Control
                        type="number"
                        rows={1}
                        placeholder="Введите инвентаризационный номер"
                        name="inventorizationNumber"
                        value={inventorizationNumber}
                        onChange={(e) => setInventorizationNumber(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="contentId">
                    <Form.Label>Завод изготовитель</Form.Label>
                    <Form.Control
                        type="text"
                        rows={2}
                        placeholder="Введите завод изготовитель"
                        name="factoryManufacturer"
                        value={factoryManufacturer}
                        onChange={(e) => setFactoryManufacturer(e.target.value)}
                    />
                </Form.Group>

                {/* <Form.Group controlId="contentId" defaultValue="Choose...">
                    <Form.Label>Режим работы</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        {this.props.examination.map(examination => (
                            <option key={examination.id} value={this.examinationPeriod} onChange={(e) => setExaminationPeriod(e.target.value)}>{examination.id}</option>
                        ))}
                    </Form.Control>
                </Form.Group> */}
                <Form.Group controlId="contentId">
                    <Form.Label>Сроки освидетельствования и паспорт</Form.Label>
                    <Form.Control
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="срок освидетельствония в отдельной таблице, для каждого крана свой срок освидетельствования и паспорт"
                        name="examinationPeriod"
                        value={examinationPeriod}
                        onChange={(e) => setExaminationPeriod(e.target.value)}
                    />
                </Form.Group>

                {/* <Form.Group controlId="contentId" defaultValue="Choose...">
            <AddExamination />
          </Form.Group> */}

                <Form.Group controlId="contentId">
                    <Form.Label>Режим работы</Form.Label>
                    <Form.Control
                        type="text"
                        rows={1}
                        placeholder="Введите режим работы"
                        name="workMode"
                        value={workMode}
                        onChange={(e) => setWorkMode(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="contentId">
                    <Form.Label>Место установки</Form.Label>
                    <Form.Control
                        type="text"
                        rows={2}
                        placeholder="Введите место установки"
                        name="installationPlace"
                        value={installationPlace}
                        onChange={(e) => setInstallationPlace(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="contentId">
                    <Form.Label>ТО1</Form.Label>
                    <Form.Control
                        type="text"
                        rows={4}
                        placeholder="ТО1"
                        name="technicalMaintenanceFirst"
                        value={technicalMaintenanceFirst}
                        onChange={(e) => setTechnicalMaintenanceFirst(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="contentId">
                    <Form.Label>ТО2</Form.Label>
                    <Form.Control
                        type="text"
                        rows={4}
                        placeholder="ТО2"
                        name="technicalMaintenanceSecond"
                        value={technicalMaintenanceSecond}
                        onChange={(e) => setTechnicalMaintenanceSecond(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="contentId">
                    <Form.Label>Обследование</Form.Label>
                    <Form.Control
                        type="text"
                        rows={1}
                        placeholder="обследования и сроки обследования у каждого крана один и свой в отдельной таблице"
                        name="inspection"
                        value={inspection}
                        onChange={(e) => setInspection(e.target.value)}
                    />
                </Form.Group>



                <div>
                    <Form.Group controlId="contentId">
                        <Form.Label>Лицо ответственное за исправленное состояние</Form.Label>
                        <Form.Control
                            type="text"
                            rows={4}
                            placeholder="Выберите или добавьте ответственное лицо"
                            name="personResponsibleToFixedState"
                            value={personResponsibleToFixedState}
                            onChange={(e) => setPersonResponsibleToFixedState(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <strong>Лицо ответственное за исправленное состояние</strong>
                        <Form.Label>Фото сотрудника</Form.Label>
                        {/* <Image src={personImage} roundedCircle style={{width: 100, height: 100}} /> */}
                        <Form.File
                            type="file"
                            name="personImage"
                            labe="upload your image"
                            onChange={(e) => setPersonImage(e.target.files[0])}
                        />
                        {/* <input
                            type="file"
                            onChange={(e) => setPersonImage(e.target.files[0])}
                        /> */}
                    </Form.Group>

                    <Form.Group controlId="contentId" className="mb-3">
                        <Form.Label>Должность</Form.Label>
                        <Form.Control
                            type="text"
                            name="employeePost"
                            value={employeePost}
                            onChange={(e) => setEmployeePost(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="contentId" className="mb-3">
                        <Form.Label>Номер приказа</Form.Label>
                        <Form.Control
                            type="text"
                            name="orderNumber"
                            value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="contentId" className="mb-3">
                        <Form.Label>Имя сотрудника</Form.Label>
                        <Form.Control
                            type="text"
                            name="employeeFirstName"
                            value={employeeFirstName}
                            onChange={(e) => setEmployeeFirstName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="contentId" className="mb-3">
                        <Form.Label>Фамилия сотрудника</Form.Label>
                        <Form.Control
                            type="text"
                            name="employeeSecondName"
                            value={employeeSecondName}
                            onChange={(e) => setEmployeeSecondName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="contentId" className="mb-3">
                        <Form.Label>Отчество сотрудника</Form.Label>
                        <Form.Control
                            type="text"
                            name="employeePatronymic"
                            value={employeePatronymic}
                            onChange={(e) => setEmployeePatronymic(e.target.value)}
                        />
                    </Form.Group>
                    <strong>---------------------------------------</strong>
                </div>

                <Form.Group controlId="contentId">
                    <Form.Label>Лицо ответственное по надзору</Form.Label>
                    <Form.Control
                        type="text"
                        rows={4}
                        placeholder="Выберите или добавьте ответственное лицо"
                        name="personResponsibleForSupervision"
                        value={personResponsibleForSupervision}
                        onChange={(e) => setPersonResponsibleForSupervision(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="contentId">
                    <Form.Label>Контроль по металу</Form.Label>
                    <Form.Control
                        type="text"
                        rows={1}
                        placeholder="Контроль по металлу"
                        name="metalInspection"
                        value={metalInspection}
                        onChange={(e) => setMetalInspection(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="contentId">
                    <Form.Label>Механический контроль</Form.Label>
                    <Form.Control
                        type="text"
                        rows={1}
                        placeholder="Механический контроль"
                        name="mechanicalControl"
                        value={mechanicalControl}
                        onChange={(e) => setMechanicalControl(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="contentId">
                    <Form.Label>Электронная часть</Form.Label>
                    <Form.Control
                        type="text"
                        rows={1}
                        placeholder="Электронная часть"
                        name="electricalParts"
                        value={electricalParts}
                        onChange={(e) => setElectricalParts(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="contentId">
                    <Form.Label>user?</Form.Label>
                    <Form.Control
                        type="text"
                        rows={1}
                        placeholder="user?"
                        name="owner"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <Button variant="success" onClick={handleClick}>
                Add crane
        </Button>
        </div>
    )
}

export default AddCrane;