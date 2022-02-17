import React, { useState, useEffect } from 'react';
import axios from "axios";


const Description = () => {
    const [descr, setDescr] = useState("");
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(res => {
                setDescr(res.data.explanation);
            })
            .catch(err => console.error(err))
    },[]);

    return (
        <div className="description">
            <p>{ descr }</p>
        </div>
    )
}
export default Description;
