import React, { useState, useEffect } from 'react';
import axios from "axios";

const APOD = () => {
    const [imgURL, setImgURL] = useState("");
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(res => {
                setImgURL(res.data.url);
            })
            .catch(err => console.error(err))
    },[]);

    return (
        <div className="apod">
            {
                imgURL &&
                <>
                    <img src={imgURL} />
                </>
            }
        </div>
    )
}

export default APOD;