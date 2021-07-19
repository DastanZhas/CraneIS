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

const AddPersonResponsibleToFixedState = () => {
    //Лицо ответственное за исправленное состояние
    const [personImage, setPersonImage] = useState();
    const [employeePost, setEmployeePost] = useState("")
    const [orderNumber, setOrderNumber] = useState("")
    const [employeeFirstName, setEmployeeFirstName] = useState("")
    const [employeeSecondName, setEmployeeSecondName] = useState("")
    const [employeePatronymic, setEmployeePatronymic] = useState("")


    const history = useHistory();

    const dispatch = useDispatch();

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

    const handleClick = () => {
        store.dispatch(AddPersonResponsibleToFixedState());
    }

    return (
        <div>
            <h1>Добавление лица ответственного за исправленное состояние</h1>
            <Form>
                <FormGroup>
                    <strong>Лицо ответственное за исправленное состояние</strong>
                    <Label>Фото сотрудника</Label>
                    {/* <Image src={personImage} roundedCircle style={{width: 100, height: 100}} /> */}
                    <Input
                        type="file"
                        name="personImage"
                        labe="upload your image"
                        onChange={(e) => setPersonImage(e.target.files[0])}
                    />
                </FormGroup>

                <FormGroup className="mb-3">
                    <Label>Должность</Label>
                    <Input
                        type="text"
                        name="employeePost"
                        value={employeePost}
                        onChange={(e) => setEmployeePost(e.target.value)}
                    />
                </FormGroup>

                <FormGroup className="mb-3">
                    <Label>Номер приказа</Label>
                    <Input
                        type="text"
                        name="orderNumber"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                    />
                </FormGroup>

                <FormGroup className="mb-3">
                    <Label>Имя сотрудника</Label>
                    <Input
                        type="text"
                        name="employeeFirstName"
                        value={employeeFirstName}
                        onChange={(e) => setEmployeeFirstName(e.target.value)}
                    />
                </FormGroup>

                <FormGroup className="mb-3">
                    <Label>Фамилия сотрудника</Label>
                    <Input
                        type="text"
                        name="employeeSecondName"
                        value={employeeSecondName}
                        onChange={(e) => setEmployeeSecondName(e.target.value)}
                    />
                </FormGroup>

                <FormGroup className="mb-3">
                    <Label>Отчество сотрудника</Label>
                    <Input
                        type="text"
                        name="employeePatronymic"
                        value={employeePatronymic}
                        onChange={(e) => setEmployeePatronymic(e.target.value)}
                    />
                </FormGroup>
            </Form>
            <Button variant="success" onClick={handleClick}>
                Добавить кран
            </Button>
        </div>
    )
}

export default AddPersonResponsibleToFixedState;