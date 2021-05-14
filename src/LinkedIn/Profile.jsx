import React from 'react';
import styled from "styled-components";
import ProfileBottom from './ProfileBottom';
import ProfileMiddle from './ProfileMiddle';
import ProfileTop from './ProfileTop';

const StyledWrapper = styled.div`
    padding: 8px 16px;
    background: white;
`

function Profile() {
    return (
        <StyledWrapper>
            <ProfileTop/>
            <ProfileMiddle/>
            <ProfileBottom/>
        </StyledWrapper>
    )
}

export default Profile
