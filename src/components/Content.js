import React from 'react';
import APOD from "./Image";
import Description from "./Description";
import Meta from "./Meta";

const Content = () => {
return (
    <div>
        <div className="top-content">
            <APOD />
            <Meta />
        </div>
        <Description />
    </div>
)
}
export default Content;