import React, { useState, useEffect } from 'react';

import Image from 'react-bootstrap/Image'
import { FormGroup, Form, Label, Input, FormText, Collapse, Button, CardBody, Card } from 'reactstrap';

import axios from "axios";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { createMessage, returnErrors } from "../../actions/messages";
import { tokenConfig } from '../../actions/auth';
import store from '../../store';
import { ADD_PERSON_FIXED_STATE } from '../../actions/types';

import AddExamination from '../examinationTechpassport/AddExamination';

const { forwardRef, useRef, useImperativeHandle } = React;

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

    const history = useHistory();

    const dispatch = useDispatch();

    const childRef = useRef();

    //for GET method
    const [crane, setCrane] = useState("");
    const [getExamination, setGetExamination] = useState("");

    const getSingleCrane = () => async (dispatch, getState) => {
        const { data } = await axios
            .get(`http://127.0.0.1:8000/api/cranes/`, tokenConfig(getState))
        setCrane(data);
        console.log(data);
    }

    const getSingleExamination = () => async (dispatch, getState) => {
        const { data } = await axios
            .get(`http://127.0.0.1:8000/api/examination/`, tokenConfig(getState))
        setGetExamination(data);
    }
    //get

    //collapse
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [examination, setExamination] = useState("")

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
                history.push('/')
            }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    }

    useEffect(() => {
        store.dispatch(getSingleCrane());
        store.dispatch(getSingleExamination());
    }, [])

    async function handleClick() {
        childRef.current.addExaminationClick()
        store.dispatch(AddCraneInfo());
    }

    return (
        <div>
            <h1>Добавление крана</h1>
            <Form>
                <FormGroup>
                    <Label for="craneType">Тип крана</Label>
                    <Input
                        type="text"
                        placeholder="Введите тип крана"
                        name="craneType"
                        value={craneType}
                        onChange={(e) => setCraneType(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Грузоподьемность</Label>
                    <Input
                        type="number"
                        rows={1}
                        placeholder="Грузоподьемность"
                        name="loadCapacity"
                        value={loadCapacity}
                        onChange={(e) => setLoadCapacity(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Регистрационный номер</Label>
                    <Input
                        type="number"
                        rows={1}
                        placeholder="Введите регистрационный номер"
                        name="registerNumber"
                        value={registerNumber}
                        onChange={(e) => setRegisterNumber(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Заводской номер</Label>
                    <Input
                        type="number"
                        rows={1}
                        placeholder="Введите заводской номер"
                        name="factoryNumber"
                        value={factoryNumber}
                        onChange={(e) => setFactoryNumber(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Инвентаризационный номер</Label>
                    <Input
                        type="number"
                        rows={1}
                        placeholder="Введите инвентаризационный номер"
                        name="inventorizationNumber"
                        value={inventorizationNumber}
                        onChange={(e) => setInventorizationNumber(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Завод изготовитель</Label>
                    <Input
                        type="text"
                        rows={2}
                        placeholder="Введите завод изготовитель"
                        name="factoryManufacturer"
                        value={factoryManufacturer}
                        onChange={(e) => setFactoryManufacturer(e.target.value)}
                    />
                </FormGroup>

                {/* <FormGroup defaultValue="Choose...">
                    <Label>Режим работы</Label>
                    <Input as="select" defaultValue="Choose...">
                        {this.props.examination.map(examination => (
                            <option key={examination.id} value={this.examinationPeriod} onChange={(e) => setExaminationPeriod(e.target.value)}>{examination.id}</option>
                        ))}
                    </Input>
                </FormGroup> */}
                <br />
                <Button color="primary" onClick={toggle}>Добавить сроки освидетельствования и тех паспорт</Button>
                <Collapse isOpen={isOpen}>
                    <AddExamination ref={childRef} />
                </Collapse>
                <FormGroup>
                    <Label>Сроки освидетельствования и паспорт</Label>
                    <Input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="срок освидетельствония в отдельной таблице, для каждого крана свой срок освидетельствования и паспорт"
                        name="examinationPeriod"
                        value={examinationPeriod}
                        onChange={(e) => setExaminationPeriod(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Режим работы</Label>
                    <Input
                        type="text"
                        rows={1}
                        placeholder="Введите режим работы"
                        name="workMode"
                        value={workMode}
                        onChange={(e) => setWorkMode(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Место установки</Label>
                    <Input
                        type="text"
                        rows={2}
                        placeholder="Введите место установки"
                        name="installationPlace"
                        value={installationPlace}
                        onChange={(e) => setInstallationPlace(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>ТО1</Label>
                    <Input
                        type="number"
                        rows={4}
                        placeholder="ТО1"
                        name="technicalMaintenanceFirst"
                        value={technicalMaintenanceFirst}
                        onChange={(e) => setTechnicalMaintenanceFirst(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>ТО2</Label>
                    <Input
                        min={0} max={100} type="number"
                        rows={4}
                        placeholder="ТО2"
                        name="technicalMaintenanceSecond"
                        value={technicalMaintenanceSecond}
                        onChange={(e) => setTechnicalMaintenanceSecond(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Обследование</Label>
                    <Input
                        type="text"
                        rows={1}
                        placeholder="обследования и сроки обследования у каждого крана один и свой в отдельной таблице"
                        name="inspection"
                        value={inspection}
                        onChange={(e) => setInspection(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Лицо ответственное за исправленное состояние</Label>
                    <Input
                        type="text"
                        rows={4}
                        placeholder="Выберите или добавьте ответственное лицо"
                        name="personResponsibleToFixedState"
                        value={personResponsibleToFixedState}
                        onChange={(e) => setPersonResponsibleToFixedState(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Лицо ответственное по надзору</Label>
                    <Input
                        type="text"
                        rows={4}
                        placeholder="Выберите или добавьте ответственное лицо"
                        name="personResponsibleForSupervision"
                        value={personResponsibleForSupervision}
                        onChange={(e) => setPersonResponsibleForSupervision(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Контроль по металу</Label>
                    <Input
                        type="text"
                        rows={1}
                        placeholder="Контроль по металлу"
                        name="metalInspection"
                        value={metalInspection}
                        onChange={(e) => setMetalInspection(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Механический контроль</Label>
                    <Input
                        type="text"
                        rows={1}
                        placeholder="Механический контроль"
                        name="mechanicalControl"
                        value={mechanicalControl}
                        onChange={(e) => setMechanicalControl(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Электронная часть</Label>
                    <Input
                        type="text"
                        rows={1}
                        placeholder="Электронная часть"
                        name="electricalParts"
                        value={electricalParts}
                        onChange={(e) => setElectricalParts(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>user?</Label>
                    <Input
                        type="text"
                        rows={1}
                        placeholder="user?"
                        name="owner"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </FormGroup>
            </Form>
            <Button variant="success" onClick={handleClick}>
                Добавить кран
            </Button>

        </div>
    )
}

export default AddCrane;