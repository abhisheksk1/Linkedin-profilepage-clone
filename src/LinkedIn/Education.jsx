import React from 'react';
import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: white;
`;

const StyledTitle = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 0.6rem;
    margin-left: 1rem;
`;

const StyledEducation = styled.div`

`;
const StyledIcon = styled.div`
    padding-left: 220px;
    padding-top: 10px;
`;

const StyledEducationList = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-bottom: 0.6rem;
    border-bottom: 1px solid grey;
`;

const StyledUniversity = styled.div`
    font-size: 14px;
    font-weight: 700;
`;

const StyleDegree = styled.div`
    font-size: 16px;
`;

const StyledYear = styled.div`
    font-size: 16px;
`;

function Education() {
    return (
        <StyledWrapper>
            <StyledTitle>
                <StyledEducation>Education</StyledEducation>
                <StyledIcon>
                    <CreateIcon fontSize='small'/>
                </StyledIcon>
            </StyledTitle>
            <StyledEducationList>
                <StyledUniversity>Makaut</StyledUniversity>
                <StyleDegree>Btech, Computer Science</StyleDegree>
                <StyledYear>2019-2023</StyledYear>
            </StyledEducationList>
            <StyledEducationList>
                <StyledUniversity>S.B.P Vidya Vihar</StyledUniversity>
                <StyleDegree>12th</StyleDegree>
                <StyledYear>2018-2019</StyledYear>
            </StyledEducationList>
            <StyledEducationList>
                <StyledUniversity>Scottish Public School</StyledUniversity>
                <StyleDegree>matriculation</StyleDegree>
                <StyledYear>2016-2017</StyledYear>
            </StyledEducationList>
        </StyledWrapper>
    )
}

export default Education
