import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';

const TextWrap = styled.div`
    padding: 2% 12%;
    background-color: rgba(170,240,209,0.8);
`;
const Text = styled.p`
    text-align: center;
    font-size: 2.25rem;
    line-height: 1.5;
    margin: 0;
`;

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
        <TextWrap>
            <Text>{ descr }</Text>
        </TextWrap>
    )
}
export default Description;
