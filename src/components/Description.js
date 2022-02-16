import React, { useState, useEffect } from 'react';
import axios from "axios";


const Description = props => {
    const { date } = props;
    const [title, setTitle] = useState("");
    const [descr, setDescr] = useState("");
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
            .then(res => {
                setTitle(res.data.title);
                setDescr(res.data.explanation);
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
export default Description;
