import React, { useState } from 'react';
import APOD from "./Image";
import Description from "./Description";
import Meta from "./Meta";
import Header from "./Header";
import styled from 'styled-components';


const TopContent = styled.div``;
const Buttons = styled.div`
    display: flex;
    justify-content: center;
    gap: 10%;
    margin-bottom: 2vw;
    `;
const Button = styled.button`
    height: 3vw;
    width: 12vw;
    border-radius: 10px;
    font-size: 1.25em;
        &:first-child {
            width: 8vw;
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
        <div className="top-content">
            <Meta date={ date }/>
            <APOD date={ date }/>
        </div>
        <Description date={ date }/>
        <Buttons>
            <Button onClick={resetButton}>Today</Button>
            <Button onClick={randomButton}>Random Day</Button>
        </Buttons>
    </div>
)
}
export default Content;