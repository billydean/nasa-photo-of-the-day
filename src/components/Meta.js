import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';

const MetaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2% 0 2% 0;
    padding: 1% 0 2% 0;
    background-color: lightseagreen; 
    `;
const Title = styled.h1`
    margin: 1% 0;
    color: darkslategray;
    `;
const Name = styled.p`
    margin: 0 0 1% 0;
    color: darkslategray;
    `;

const Meta = props => {
    const { date } = props;
    const [copyright, setCopyright] = useState("");
    const [title, setTitle] = useState("");
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=GLr8dnFFgRiwEuMMzJFBd53vxrSHcluIg02eP8qZ&date=${date}`)
            .then(res => {
                setTitle(res.data.title);
                setCopyright(res.data.copyright);
            })
            .catch(err => console.error(err))
    });

    return (
        <MetaContainer>
            <Title>{ title }</Title>
            <Name>by { copyright }</Name>
        </MetaContainer>
    )
}
export default Meta;