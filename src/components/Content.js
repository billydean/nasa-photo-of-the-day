import React, { useState } from 'react';
import APOD from "./Image";
import Description from "./Description";
import Meta from "./Meta";

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
        <div className="top-content">
            <APOD date={ date }/>
            <Meta date={ date }/>
        </div>
        <Description date={ date }/>
        <div className="buttons">
            <button onClick={resetButton}>Today</button>
            <button onClick={randomButton}>Random Day</button>
        </div>
    </div>
)
}
export default Content;