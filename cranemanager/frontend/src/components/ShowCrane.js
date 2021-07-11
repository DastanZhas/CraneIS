import axios from "axios";
import React, { useState, useEffect } from "react";
import { getCranes } from "../actions/cranes";

const ShowCrane = () => {
    const [cranes, setCranes] = useState([])

    const getCranes = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/cranes')
        console.log(response.data)
    }

    useEffect(() => {
        getCranes
    }, [])

    return (
        <div>
            <h1>---</h1>
            <h1>Show all the Cranes</h1>
        </div>
    );
};

export default ShowCrane;