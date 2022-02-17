import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';

const StyleImg = styled.img`
    object-fit: cover;
    width: 100%;
    `;
const ImgWrap = styled.div`
    margin: 2% 25% 0 25%;
    width: 50%;
`;
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
        <ImgWrap>
            {
                imgURL &&
                <>
                    <StyleImg src={imgURL} alt="NASA's APOD"/>
                </>
            }
        </ImgWrap>
    )
}

export default APOD;