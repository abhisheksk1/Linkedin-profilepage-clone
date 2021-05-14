import React from 'react';
import styled from "styled-components";

const StyledWrapper = styled.div`
    font-size: 16px;
    margin-left: 3px;
`;
const StyledTitle = styled.div`
    margin-bottom: 4px;
    font-weight: 700;
`;
const StyledBioLine = styled.div`
    margin-bottom: 6px;
    line-height: 1;
    font-weight: 600;
    display: flex;
    flex-direction: row;
`;

const Connection = styled.div`
    color: blue;
`;

function ProfileMiddle() {
    return (
        <StyledWrapper>
            <StyledTitle>ABHISHEK KUMAR PANDEY</StyledTitle>
            <StyledBioLine>
                Student at Makaut
            </StyledBioLine>
            <StyledBioLine>
                makaut
            </StyledBioLine>
            <StyledBioLine>
                Bihar, India .<Connection>108 connections</Connection>
            </StyledBioLine>
        </StyledWrapper>
    )
}

export default ProfileMiddle;
