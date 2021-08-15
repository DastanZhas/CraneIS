import React, { useState, useEffect } from 'react';

import { FormGroup, Form, Label, Input, Button } from 'reactstrap';

import axios from "axios";
import { useDispatch } from "react-redux";
import { createMessage, returnErrors } from "../../actions/messages";
import { tokenConfig } from '../../actions/auth';
import store from '../../store';
import { ADD_CRANE } from '../../actions/types';
import { Cranes } from './Cranes';
import { Link, Redirect } from 'react-router-dom';


// const { forwardRef, useRef, useImperativeHandle } = React;

const AddCrane = () => {
    const [craneType, setCraneType] = useState("")
    const [loadCapacity, setLoadCapacity] = useState("")
    const [registerNumber, setRegisterNumber] = useState("")
    const [factoryNumber, setFactoryNumber] = useState("")
    const [inventorizationNumber, setInventorizationNumber] = useState("")
    const [factoryManufacturer, setFactoryManufacturer] = useState("")
    //nested object/table examination period and tech pasport fields
    const [technicalPassportdownloadUrl, setTechnicalPassportdownloadUrl] = useState();
    const [examinationPeriodDate, setExaminationPeriodDate] = useState("");
    // -------------------------------------------------------------
    const [workMode, setWorkMode] = useState("")
    const [installationPlace, setInstallationPlace] = useState("")
    // nested object/table TO1
    const [to1, setTo1] = useState("")
    const [periodOfFirstTMfrom, setPeriodOfFirstTMfrom] = useState("")
    const [periodOfFirstTMto, setPeriodOfFirstTMto] = useState("")
    //----------------------------------------------------
    // nested object/table TO2
    const [to2, setTo2] = useState("")
    const [periodOfSecondTMfrom, setPeriodOfSecondTMfrom] = useState("")
    const [periodOfSecondTMto, setPeriodOfSecondTMto] = useState("")
    const [defectsStatement, setDefectsStatement] = useState("")
    const [materialsStatement, setMaterialsStatement] = useState("")
    // ---------------------------------
    // nested object/table Inspection // Обследования и сроки
    const [periodInspectionfrom, setPeriodInspectionfrom] = useState("")
    const [periodInspectionto, setPeriodInspectionto] = useState("")
    const [inspectionText, setInspectionText] = useState("")
    //--------------------------------------------------------
    // nested object/table Person Responsible to fixed state/Лицо ответственное за исправленное состояние
    const [personImage, setPersonImage] = useState()
    const [employeePost, setEmployeePost] = useState("")
    const [orderNumber, setOrderNumber] = useState("")
    const [employeeFirstName, setEmployeeFirstName] = useState("")
    const [employeeSecondName, setEmployeeSecondName] = useState("")
    const [employeePatronymic, setEmployeePatronymic] = useState("")
    // ---------------------------------------------------------------------------
    // nested object/table Person Responsible for supervision/Лицо ответственное по надзору
    const [personImageVision, setPersonImageVision] = useState()
    const [employeePostVision, setEmployeePostVision] = useState("")
    const [orderNumberVision, setOrderNumberVision] = useState("")
    const [employeeFirstNameVision, setEmployeeFirstNameVision] = useState("")
    const [employeeSecondNameVision, setEmployeeSecondNameVision] = useState("")
    const [employeePatronymicVision, setEmployeePatronymicVision] = useState("")
    //-------------------------------------------------------------------------------
    const [metalInspection, setMetalInspection] = useState("")
    const [mechanicalControl, setMechanicalControl] = useState("")
    const [electricalParts, setElectricalParts] = useState("")
    const [owner, setOwner] = useState("")

    const AddCraneInfo = () => async (dispatch, getState) => {
        let formField = new FormData()

        formField.append('craneType', craneType)
        formField.append('loadCapacity', loadCapacity)
        formField.append('registerNumber', registerNumber)
        formField.append('factoryNumber', factoryNumber)
        formField.append('inventorizationNumber', inventorizationNumber)
        formField.append('factoryManufacturer', factoryManufacturer)
        // formField.append('examinationPeriod', examinationPeriod)
        //nested object/table examination period and tech pasport fields
        formField.append('examinationPeriod.technicalPassportdownloadUrl', technicalPassportdownloadUrl)
        formField.append('examinationPeriod.examinationPeriodDate', examinationPeriodDate)
        //-----------------------------------------------------------------
        formField.append('workMode', workMode)
        formField.append('installationPlace', installationPlace)
        //Техническое обслуживание 1
        // formField.append('technicalMaintenanceFirst', technicalMaintenanceFirst)
        formField.append('technicalMaintenanceFirst.to1', to1)
        formField.append('technicalMaintenanceFirst.periodOfFirstTMfrom', periodOfFirstTMfrom)
        formField.append('technicalMaintenanceFirst.periodOfFirstTMto', periodOfFirstTMto)
        //Техническое обслуживание 2
        // formField.append('technicalMaintenanceSecond', technicalMaintenanceSecond)
        formField.append('technicalMaintenanceSecond.to2', to2)
        formField.append('technicalMaintenanceSecond.periodOfSecondTMfrom', periodOfSecondTMfrom)
        formField.append('technicalMaintenanceSecond.periodOfSecondTMto', periodOfSecondTMto)
        formField.append('technicalMaintenanceSecond.defectsStatement', defectsStatement)
        formField.append('technicalMaintenanceSecond.materialsStatement', materialsStatement)
        // Сроки обследования
        // formField.append('inspection', inspection)
        formField.append('inspection.periodInspectionfrom', periodInspectionfrom)
        formField.append('inspection.periodInspectionto', periodInspectionto)
        formField.append('inspection.inspection', inspectionText)
        // Лицо ответственное за исправленное состояние
        // formField.append('personResponsibleToFixedState', personResponsibleToFixedState)
        formField.append('personResponsibleToFixedState.personImage', personImage)
        formField.append('personResponsibleToFixedState.employeePost', employeePost)
        formField.append('personResponsibleToFixedState.orderNumber', orderNumber)
        formField.append('personResponsibleToFixedState.employeeFirstName', employeeFirstName)
        formField.append('personResponsibleToFixedState.employeeSecondName', employeeSecondName)
        formField.append('personResponsibleToFixedState.employeePatronymic', employeePatronymic)
        // Лицо ответственное по надзору
        // formField.append('personResponsibleForSupervision', personResponsibleForSupervision)
        formField.append('personResponsibleForSupervision.personImage', personImageVision)
        formField.append('personResponsibleForSupervision.employeePost', employeePostVision)
        formField.append('personResponsibleForSupervision.orderNumber', orderNumberVision)
        formField.append('personResponsibleForSupervision.employeeFirstName', employeeFirstNameVision)
        formField.append('personResponsibleForSupervision.employeeSecondName', employeeSecondNameVision)
        formField.append('personResponsibleForSupervision.employeePatronymic', employeePatronymicVision)
        // -------------------------------------------------------------------
        formField.append('metalInspection', metalInspection)
        formField.append('mechanicalControl', mechanicalControl)
        formField.append('electricalParts', electricalParts)
        formField.append('owner', owner)

        await axios
            .post(`/api/cranes/`, formField, tokenConfig(getState))
            .then((response) => {
                dispatch(createMessage({ craneAdded: "Crane added!" }));
                dispatch({ type: ADD_CRANE });
                window.location.reload();
            }).catch(error => {
                console.log(error.response.data);
                return false;
            })
    }

    useEffect(() => {
        //
    }, [])


    function handleClick(e) {
        e.preventDefault();
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

                <div>
                    <h2>Срок освидетельствования и технический паспорт</h2>
                    
                    <FormGroup>
                        <Label>Паспорт крана</Label>
                        <Input
                            type="file"
                            name="technicalPassportdownloadUrl"
                            label="Загрузите технический паспорт: "
                            onChange={(e) => setTechnicalPassportdownloadUrl(e.target.files[0])}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleDate">Сроки освидетельствования</Label>
                        <Input
                            type="date"
                            name="examinationPeriodDate"
                            value={examinationPeriodDate}
                            placeholder="сроки освидетельствования"
                            onChange={(e) => setExaminationPeriodDate(e.target.value)}
                        />
                    </FormGroup>
                </div>

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

                <div>
                    <h2>Техническое обслуживание 1</h2>
                    <FormGroup>
                        <Label>ТО1 text</Label>
                        <Input
                            type="text"
                            rows={3}
                            placeholder="ТО1 text"
                            name="to1"
                            value={to1}
                            onChange={(e) => setTo1(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="TO1">TO1 от</Label>
                        <Input
                            type="date"
                            name="periodOfFirstTMfrom"
                            value={periodOfFirstTMfrom}
                            placeholder="to1 date from"
                            onChange={(e) => setPeriodOfFirstTMfrom(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="TO1">TO1 до</Label>
                        <Input
                            type="date"
                            name="periodOfFirstTMto"
                            value={periodOfFirstTMto}
                            placeholder="to1 date to"
                            onChange={(e) => setPeriodOfFirstTMto(e.target.value)}
                        />
                    </FormGroup>
                </div>

                <div>
                    <h2>Техническое обслуживание 2</h2>
                    <FormGroup>
                        <Label>ТО2</Label>
                        <Input
                            // min={0} max={100} 
                            type="text"
                            rows={3}
                            placeholder="ТО2 text"
                            name="to2"
                            value={to2}
                            onChange={(e) => setTo2(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="TO2">TO2 от</Label>
                        <Input
                            type="date"
                            name="periodOfSecondTMfrom"
                            value={periodOfSecondTMfrom}
                            placeholder="to2 date from"
                            onChange={(e) => setPeriodOfSecondTMfrom(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="TO2">TO2 до</Label>
                        <Input
                            type="date"
                            name="periodOfSecondTMto"
                            value={periodOfSecondTMto}
                            placeholder="to2 date to"
                            onChange={(e) => setPeriodOfSecondTMto(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="TO2">Ведомость дефектов</Label>
                        <Input
                            type="text"
                            rows={3}
                            name="defectsStatement"
                            value={defectsStatement}
                            placeholder="Ведомость дефектов"
                            onChange={(e) => setDefectsStatement(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="TO2">Ведомость материалов</Label>
                        <Input
                            type="text"
                            rows={3}
                            name="materialsStatement"
                            value={materialsStatement}
                            placeholder="Ведомость материалов"
                            onChange={(e) => setMaterialsStatement(e.target.value)}
                        />
                    </FormGroup>
                </div>

                <div>
                    <h2>Обследование и сроки обследования</h2>

                    <FormGroup>
                        <Label for="Inspection">Сроки обследования от</Label>
                        <Input
                            type="date"
                            name="periodInspectionfrom"
                            value={periodInspectionfrom}
                            placeholder="от"
                            onChange={(e) => setPeriodInspectionfrom(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="Inspection">Сроки обследования до</Label>
                        <Input
                            type="date"
                            name="periodInspectionto"
                            value={periodInspectionto}
                            placeholder="до"
                            onChange={(e) => setPeriodInspectionto(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Обследование</Label>
                        <Input
                            type="text"
                            rows={3}
                            placeholder="обследования и сроки обследования у каждого крана один и свой в отдельной таблице"
                            name="inspectionText"
                            value={inspectionText}
                            onChange={(e) => setInspectionText(e.target.value)}
                        />
                    </FormGroup>

                </div>

                <div>
                    <h2>Лицо ответственное за исправленное состояние</h2>

                    <FormGroup>
                        <Label>Изображение работника</Label>
                        <Input
                            type="file"
                            name="personImage"
                            label="Загрузите изображение: "
                            onChange={(e) => setPersonImage(e.target.files[0])}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Должность</Label>
                        <Input
                            type="text"
                            rows={2}
                            placeholder="Введите должность"
                            name="employeePost"
                            value={employeePost}
                            onChange={(e) => setEmployeePost(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Номер приказа</Label>
                        <Input
                            type="number"
                            placeholder="Введите номер приказа"
                            name="orderNumber"
                            value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Имя работника</Label>
                        <Input
                            type="text"
                            rows={2}
                            placeholder="Введите имя"
                            name="employeeFirstName"
                            value={employeeFirstName}
                            onChange={(e) => setEmployeeFirstName(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Фамилия работника</Label>
                        <Input
                            type="text"
                            rows={2}
                            placeholder="Введите фамилию"
                            name="employeeSecondName"
                            value={employeeSecondName}
                            onChange={(e) => setEmployeeSecondName(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Отчество работника</Label>
                        <Input
                            type="text"
                            rows={2}
                            placeholder="Введите отчество"
                            name="employeeSecondName"
                            value={employeePatronymic}
                            onChange={(e) => setEmployeePatronymic(e.target.value)}
                        />
                    </FormGroup>
                </div>
                <div>
                    <h2>Лицо ответственное по надзору</h2>
                    <FormGroup>
                        <Label>Изображение работникаVision</Label>
                        <Input
                            type="file"
                            name="personImageVision"
                            label="Загрузите изображение: "
                            onChange={(e) => setPersonImageVision(e.target.files[0])}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>ДолжностьVision</Label>
                        <Input
                            type="text"
                            rows={2}
                            placeholder="Введите должность"
                            name="employeePostVision"
                            value={employeePostVision}
                            onChange={(e) => setEmployeePostVision(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Номер приказаVision</Label>
                        <Input
                            type="number"
                            placeholder="Введите номер приказа"
                            name="orderNumberVision"
                            value={orderNumberVision}
                            onChange={(e) => setOrderNumberVision(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Имя работникаVision</Label>
                        <Input
                            type="text"
                            rows={2}
                            placeholder="Введите имя"
                            name="employeeFirstNameVision"
                            value={employeeFirstNameVision}
                            onChange={(e) => setEmployeeFirstNameVision(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Фамилия работникаVision</Label>
                        <Input
                            type="text"
                            rows={2}
                            placeholder="Введите фамилию"
                            name="employeeSecondNameVision"
                            value={employeeSecondNameVision}
                            onChange={(e) => setEmployeeSecondNameVision(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Отчество работникаVision</Label>
                        <Input
                            type="text"
                            rows={2}
                            placeholder="Введите отчество"
                            name="employeeSecondNameVision"
                            value={employeePatronymicVision}
                            onChange={(e) => setEmployeePatronymicVision(e.target.value)}
                        />
                    </FormGroup>
                </div>

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
            <Button variant="success" type="button" onClick={(e) => {handleClick(e)}}>
                Добавить кран
            </Button>

        </div>
    )
}

export default AddCrane;