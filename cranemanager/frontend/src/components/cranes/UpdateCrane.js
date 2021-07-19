import axios from "axios";
import React, { useState, useEffect } from "react";
import { FormGroup, Form, Label, Input, FormText, Collapse, Button, CardBody, Card } from 'reactstrap';
import { useHistory, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { tokenConfig } from "../../actions/auth";
import store from "../../store";



const UpdateCrane = () => {
    const [craneType, setCraneType] = useState("")
    const [loadCapacity, setLoadCapacity] = useState("")
    const [registerNumber, setRegisterNumber] = useState("")
    const [factoryNumber, setFactoryNumber] = useState("")
    const [inventorizationNumber, setInventorizationNumber] = useState("")
    const [factoryManufacturer, setFactoryManufacturer] = useState("")
    const [examinationPeriod, setExaminationPeriod] = useState()
    const [workMode, setWorkMode] = useState("")
    const [installationPlace, setInstallationPlace] = useState("")
    const [technicalMaintenanceFirst, setTechnicalMaintenanceFirst] = useState(null)
    const [technicalMaintenanceSecond, setTechnicalMaintenanceSecond] = useState(null)
    const [inspection, setInspection] = useState(null)
    const [personResponsibleToFixedState, setPersonResponsibleToFixedState] = useState(null)
    const [personResponsibleForSupervision, setPersonResponsibleForSupervision] = useState(null)
    const [metalInspection, setMetalInspection] = useState("")
    const [mechanicalControl, setMechanicalControl] = useState("")
    const [electricalParts, setElectricalParts] = useState("")
    const [owner, setOwner] = useState(null)

    const history = useHistory();

    const { id } = useParams();

    const dispatch = useDispatch();

    const loadCranes = () => async (dispatch, getState) => {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/cranes/${id}/`, tokenConfig(getState));
        console.log(data)

        setCraneType(data.craneType)
        setLoadCapacity(data.loadCapacity)
        setRegisterNumber(data.registerNumber)
        setFactoryNumber(data.factoryNumber)
        setInventorizationNumber(data.inventorizationNumber)
        setFactoryManufacturer(data.factoryManufacturer)
        setExaminationPeriod(data.examinationPeriod)
        setWorkMode(data.workMode)
        setInstallationPlace(data.installationPlace)
        setTechnicalMaintenanceFirst(data.technicalMaintenanceFirst)
        setTechnicalMaintenanceSecond(data.technicalMaintenanceSecond)
        setInspection(data.inspection)
        setPersonResponsibleToFixedState(data.personResponsibleToFixedState)
        setPersonResponsibleForSupervision(data.personResponsibleForSupervision)
        setMetalInspection(data.metalInspection)
        setMechanicalControl(data.mechanicalControl)
        setElectricalParts(data.electricalParts)
        setOwner(data.owner)
    }

    useEffect(() => {
        store.dispatch(loadCranes());
    }, [])

    const UpdateCraneInfo = () => async (dispatch, getState) => {
        let formField = new FormData();
        
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
            .put(`/api/cranes/${id}/`, formField, tokenConfig(getState))
            .then(response => {
                console.log(response.data)
                history.push('/')
            })
    }

    const handleClick = () => {
        store.dispatch(UpdateCraneInfo());
    }

    return (
        <div>
            <br />
            <br />
            <br />
            <h1>Редактирование крана</h1>
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
                        type="number"
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
                        type="number"
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
                        type="number"
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
                Сохранить
        </Button>
        </div>
    );
};

export default UpdateCrane;