// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import Nav from "./components/Nav";

// export default Header;

import React from 'react';
import Nav from "./Nav";
import styled from 'styled-components';

const StyleHead = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 6%;
    padding-right: 4%;
    margin: 2% 0 0 0;
    `;
const HeadText = styled.h2`
    margin: 0;
    font-weight: bold;
    font-size: 3.5rem;
    `;

function Header(){
    return (
        <StyleHead>
            <HeadText>Billy Dean's NASA's A.P.O.D.</HeadText>
            <Nav />
        </StyleHead>
    )
}
export default Header;