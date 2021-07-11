import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CraneDetail = () => {

    const [crane, setCrane] = useState("")

    const { id } = useParams();

    const getSingleCrane = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/cranes/${id}/`)
        // const { data } = await axios.get('http://127.0.0.1:8000/api/cranes/1/')
        console.log(data)
        setCrane(data)
    }

    useEffect(() => {
        getSingleCrane();
    }, [])
    
    return (
        <div>
            <br />
            <h1>CraneDetail</h1>
            <div className="card card-body modal-card">
                <p>{crane.craneType}</p>
                <p>{crane.loadCapacity}</p>
                <p>{crane.registerNumber}</p>
                <p>{crane.factoryNumber}</p>
                <p>{crane.inventorizationNumber}</p>
                <p>{crane.factoryManufacturer}</p>
                <p>{crane.examinationPeriod}</p>
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
                <Link className="btn btn-danger" to="/cranes">Удалить</Link>
                <br />
                <Link className="btn btn-primary" to="/cranes">Назад</Link>
            </div>
        </div>
    );
};

export default CraneDetail;