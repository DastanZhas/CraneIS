import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";
import store from "../../store";
import { returnErrors, createMessage } from "../../actions/messages";
import { tokenConfig } from "../../actions/auth";

const ExaminationDetail = () => {
    const [examination, setExamination] = useState("")

    const { id } = useParams();
    const dispatch = useDispatch();

    const getSingleExamination = () => async (dispatch, getState) => {
        const { data } = await axios
            .get(`http://127.0.0.1:8000/api/examination/${id}/`, tokenConfig(getState))
        setExamination(data);
    }

    const deleteSingleExamination = () => async (dispatch, getState) => {
        await axios
            .delete(`http://127.0.0.1:8000/api/personResponsibleFix/${id}/`, tokenConfig(getState))
            .then((response) => {
                dispatch(createMessage({ examinationDelete: "Examination record was deleted" }))
            })
    }

    useEffect(() => {
        store.dispatch(getSingleExamination());
    }, [])

    const handleDeleteClick = () => {

    }

    return (
        <div className="CraneDetail">
            <div className="modal-card-head">
                <h1>Examination Details</h1>
                {/* <p>ID: {crane.examinationPeriod}</p> */}
                <p>Срок освидетельствования: {examination.examinationPeriodDate}</p>
                <a href={examination.technicalPassportdownloadUrl}>Скачать технический пасспорт</a>
                {/* 
                <Link className="btn btn-warning" to={`/${examination.id}/update`}>Редактировать</Link>
                <br />
                <Link className="btn btn-danger" to="/cranes" onClick={handleDeleteClick}>Удалить</Link>
                <br />
                <Link className="btn btn-primary" to="/cranes">Назад</Link> */}
            </div>
        </div>
    )
}

export default ExaminationDetail;