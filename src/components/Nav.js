import React from "react";
import styled from 'styled-components';

const StyleNav = styled.nav`
    display:flex;
    width: 50%;
    justify-content: space-evenly;
    `;
const Anchor = styled.a`
    font-size: 3rem;
    padding: 0.1rem 1rem;
    border-radius: 10px;
    text-decoration: none;
    color: darkslategray;
        &:hover{
            transform: scale(1.4);
            background-color: rgba(170,240,209,0.8);
            transition: transform 750ms, background-color 250ms;
        }
    `;

function Nav () {
    return (
        <StyleNav>
            <Anchor href="#">Home</Anchor>
            <Anchor href="#">About</Anchor>
            <Anchor href="#">Contact</Anchor>
        </StyleNav>
    )
}
export default Nav;