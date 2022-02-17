import React, { useState } from 'react';
import APOD from "./Image";
import Description from "./Description";
import Meta from "./Meta";
import Header from "./Header";
import styled from 'styled-components';

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    gap: 10%;
    margin-bottom: 2%;
    margin-top: 1%;
    `;
const Button = styled.button`
    height: auto;
    width: auto;
    padding: .75% 1.5%;
    border-radius: 18px;
    font-size: 1.5em;
    font-family: 'Gentium Book Basic', serif;
    color: darkslategray;
    background-color: rgba(170,240,209,0.8);
       &:hover {
            color: rgba(170,240,209,0.8);
            background-color: darkslategray;
       }
`;

const Content = () => {
    const [date, setDate] = useState("");

const randomButton = () => {
const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
const sinceAPOD = randomDate(new Date(1995,5,16),new Date());
setDate(sinceAPOD.toISOString().slice(0,10));
}
const resetButton = () => {
    setDate("");
}
return (
    <div>
        <Header />
            <Meta date={ date }/>

            <APOD date={ date }/>
            <Buttons>
            <Button onClick={resetButton}>Today</Button>
            <Button onClick={randomButton}>Random Day</Button>
        </Buttons>
        <Description date={ date }/>

    </div>
)
}
export default Content;