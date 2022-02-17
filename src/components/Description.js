import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';

const Description = props => {
    const { date } = props;
    const [descr, setDescr] = useState("");
    const url = `https://api.nasa.gov/planetary/apod?api_key=GLr8dnFFgRiwEuMMzJFBd53vxrSHcluIg02eP8qZ&date=${date}`;
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setDescr(res.data.explanation);
            })
            .catch(err => console.error(err))
    });

    return (
        <div className="description">
            <p>{ descr }</p>
        </div>
    )
}
export default Description;
