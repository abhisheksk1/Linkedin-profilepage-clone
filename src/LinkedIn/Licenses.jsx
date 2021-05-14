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
    margin-top: 1rem;
    margin-bottom: 0.6rem;
    margin-left: 1rem;
`;

const StyledEducation = styled.div`

`;
const StyledIcon = styled.div`
    padding-left: 220px;
    padding-top: 10px;
`;

const StyledCourse = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-bottom: 0.6rem;
`;

const StyledCourseName = styled.div`
    font-size: 16px;
    font-weight: 700;
`;

const StyledPlatform = styled.div`
    font-size: 16px;
`;

const StyledIssue = styled.div`
    font-size: 16px;
`;

const StyledDivide = styled.div`
    border-bottom: 1px solid grey;
`;

const StyledSeeButton = styled.button`
    text-align: center;
    color: blue;
    font-size: 16px;
    font-weight: 600;
    padding: 14px 28px;
    background: white;
    border-top: none;
    border-left: none;
    border-right: none;
`;

function Licenses() {
    return (
        <StyledWrapper>
            <StyledTitle>
                <StyledEducation>Licenses & certifications</StyledEducation>
            </StyledTitle>
            <StyledCourse>
                <StyledCourseName>Learn JavaScript Course</StyledCourseName>
                <StyledPlatform>Codeacademy</StyledPlatform>
                <StyledIssue>Issued May 2021 . No Expiration Date</StyledIssue>
            </StyledCourse>
            <StyledDivide></StyledDivide>
            <StyledSeeButton>See all</StyledSeeButton>
        </StyledWrapper>
    )
}

export default Licenses;
