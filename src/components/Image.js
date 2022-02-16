import React, { useState, useEffect } from 'react';
import axios from "axios";

const APOD = props => {
    const { date } = props;
    const [imgURL, setImgURL] = useState("");
    const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + `${date}`;
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setImgURL(res.data.url);
            })
            .catch(err => console.error(err))
    });

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