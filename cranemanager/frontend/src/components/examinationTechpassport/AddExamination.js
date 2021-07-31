import React, { useState } from 'react';

import { Button, Dropdown, Form } from "react-bootstrap";
import { FormGroup, Label, Input, FormText } from 'reactstrap';

import axios from "axios";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { createMessage, returnErrors } from "../../actions/messages";
import { tokenConfig } from '../../actions/auth';
import store from '../../store';
import { ADD_EXAMINATION } from '../../actions/types';

const { forwardRef, useRef, useImperativeHandle } = React;

const AddExamination = forwardRef((props, ref) => {

    //Лицо ответственное за исправленное состояние
    const [technicalPassportdownloadUrl, setTechnicalPassportdownloadUrl] = useState();
    const [examinationPeriodDate, setExaminationPeriodDate] = useState("");

    const history = useHistory();

    const dispatch = useDispatch();

    const AddPersonResponsibleToFixedState = () => async (dispatch, getState) => {
        let formField = new FormData()

        formField.append('technicalPassportdownloadUrl', technicalPassportdownloadUrl)
        formField.append('examinationPeriodDate', examinationPeriodDate)

        await axios
            .post(`/api/examination/`, formField, tokenConfig(getState))
            .then((response) => {
                dispatch(createMessage({ addExamination: "Examination passport and period Added" }));
                dispatch({ type: ADD_EXAMINATION })
                history.push('/')
            }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    }

    useImperativeHandle(ref, () => ({
        async addExaminationClick() {
            store.dispatch(AddPersonResponsibleToFixedState());
        }

    }));


    return (
        <div className="cranes">
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
                    id="exampleDate"
                    placeholder="сроки освидетельствования"
                    onChange={(e) => setExaminationPeriodDate(e.target.value)}
                />
            </FormGroup>
        </div>
    )
})

export default AddExamination;