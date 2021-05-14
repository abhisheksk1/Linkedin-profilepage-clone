import React from 'react';
import styled from "styled-components";
import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';

const StyledWrapper = styled.div`
    font-size: 16px;
    margin-bottom: 4px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    width: 300px;
    border: 2px solid grey;
    border-radius: 7px;
    margin-top: 20px;
`;

const StyledTitle = styled.div`
    font-weight: 700;
    margin-left: 1rem;
    margin-bottom: 6px
`;

const StyledBioLine = styled.div`
    margin-bottom: 6px;
    line-height: 1;
    font-weight: 600;
    margin-left: 1rem;
`;

const StyledDetails = styled.div`
    color: blue;
    margin-left: 1rem;
    margin-bottom: 6px;
    font-weight: 600;
`;

const StyledRec = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 1rem;
`;

function ProfileBottom() {
    return (
        <StyledWrapper>
            <StyledTitle>Open to work</StyledTitle>
            <StyledBioLine>Frontend Developer roles</StyledBioLine>
            <StyledDetails>See all details</StyledDetails>
            <hr />
            <StyledRec>
                <VisibilityIcon />
                <StyledBioLine>Only recruiters</StyledBioLine>
            </StyledRec>
        </StyledWrapper>
    )
}

export default ProfileBottom;
