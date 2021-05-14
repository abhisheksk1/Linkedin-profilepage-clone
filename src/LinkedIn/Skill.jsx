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
    font-size: 18px;
    font-weight: 600;
    margin-left: 1rem;
`;

const StyledSkillTitle = styled.div`
`;
const StyledIcon = styled.div`
    margin-left: 8rem;
`;

const StyledSkillButton = styled.div`
    border: 2px solid blue;
    background-color: white;
    color: blue;
    margin-left: 1rem;
    padding: 14px 28px;
    font-size: 16px;
    font-weight: 700;
    width: fit-content;
    margin-top: 1rem;
    border-radius: 30px;
`;

const StyledSkill = styled.div`
    font-size: 16px;
    font-weight: 700;
    margin-top: 1rem;
    margin-left: 1rem;
    border-bottom: 1px solid gray;
`;

const StyledDivide = styled.div`
    border-bottom: 1px solid grey;
`;

const StyledSeeButton = styled.button`
    text-align: center;
    color: blue;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 28px;
    margin-top: 1rem;
    background: white;
    border-top: none;
    border-left: none;
    border-right: none;
`;


function Skill() {
    return (
        <StyledWrapper>
            <StyledTitle>
                <StyledSkillTitle>Skill & Endorsement</StyledSkillTitle>
                <StyledIcon>
                    <CreateIcon fontSize='small'/>
                </StyledIcon>
            </StyledTitle>
            <StyledSkillButton>Take Skill quiz</StyledSkillButton>
            <StyledSkill>Front-End Development</StyledSkill>
            <StyledSkill>Python</StyledSkill>
            <StyledSkill>JavaScript</StyledSkill>
            <StyledSkill>React.js</StyledSkill>
            <StyledDivide></StyledDivide>
            <StyledSeeButton>See 4 more skills</StyledSeeButton>
        </StyledWrapper>
    )
}

export default Skill
