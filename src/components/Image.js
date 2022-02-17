import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';

const APOD = props => {
    const { date } = props;
    const [imgURL, setImgURL] = useState("");
    const url = `https://api.nasa.gov/planetary/apod?api_key=GLr8dnFFgRiwEuMMzJFBd53vxrSHcluIg02eP8qZ&date=${date}&thumbs=true`;
    useEffect(() => {
        axios.get(url)
            .then(res => {
                res.data.thumbnail_url ? setImgURL(res.data.thumbnail_url) : setImgURL(res.data.url);
            })
            .catch(err => console.error(err))
        });

    return (
        <div className="apod">
            {
                imgURL &&
                <>
                    <img src={imgURL} alt="NASA's APOD"/>
                </>
            }
        </div>
    )
}

export default APOD;