import React from 'react';
import styled from "styled-components";
import Activity from './Activity';
import Contact from './Contact';
import DashBoard from './DashBoard';
import Education from './Education';
import Licenses from './Licenses';
import Profile from './Profile';
import Skill from './Skill';

const StyledWrapper = styled.div`
    width: 100%;
    background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
    @media only screen and (min-width: 600px) {
    margin: 0 auto;
    width: 500px;
    }
`;

function Wrapper() {
    return (
        <StyledWrapper>
            <Profile/>
            <DashBoard/>
            <Activity/>
            <Education/>
            <Licenses/>
            <Skill/>
            <Contact/>
        </StyledWrapper>
    )
}

export default Wrapper
