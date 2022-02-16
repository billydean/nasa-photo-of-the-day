import React, { useState, useEffect } from 'react';
import axios from "axios";

const APOD = props => {
    const { date } = props;
    
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
            .then()
            .catch(err => console.error(err))
    })

}

export default APOD;