import React, { useState, useEffect } from 'react';
import axios from "axios";



const Meta = () => {
    const [copyright, setCopyright] = useState("");
    const [title, setTitle] = useState("");
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(res => {
                setTitle(res.data.title);
                setCopyright(res.data.copyright);
            })
            .catch(err => console.error(err))
    },[]);

    return (
        <div className="meta">
            <h1>{ title }</h1>
            <p className="rights">{ copyright }</p>
        </div>
    )
}
export default Meta;