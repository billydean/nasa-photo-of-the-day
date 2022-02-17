import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';

const MetaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2% 0 1% 0;
    padding: 1% 0 1% 0;
    background-color: lightseagreen; 
    `;
const Title = styled.h1`
    margin: 1% 0;
    align-self: center;
    max-width: 75%;
    color: darkslategray;
    letter-spacing: .15em;
    text-transform: uppercase;
    font-size: 5rem;
    `;
const Name = styled.p`
    margin: 0 0 0 0;
    color: darkslategray;
    font-size: 2rem;
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