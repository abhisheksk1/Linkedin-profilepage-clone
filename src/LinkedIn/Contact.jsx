import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebIcon from '@material-ui/icons/Web';
import CallIcon from '@material-ui/icons/Call';
import CreateIcon from '@material-ui/icons/Create';


const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const StyledTitle = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 18px;
    font-weight: 600;
    margin-left: 1rem;
    margin-top: 0.7rem;
`;

const StyledContactTitle = styled.div``;
const StyledIcon = styled.div`
    margin-left: 14rem;
`;


const StyledContactList = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
    margin-top: 1rem;
`;

const StyledContactIcon = styled.div``;

const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

const StyledContactName = styled.div`
    font-size: 16px;
    font-weight: 700;
`;

const StyledContactLink = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: blue;
`;

const StyledDivide = styled.div`
    border-bottom: 1px solid grey;
    margin-top: 1rem;
`;

const StyledSeeButton = styled.button`
    text-align: center;
    color: blue;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 28px;
    margin-top: 0.4rem;
    background: white;
    border: none;
    border-bottom: 1px solid grey
`;

function Contact() {
    return (
        <StyledWrapper>
            <StyledTitle>
                <StyledContactTitle>Contact</StyledContactTitle>
                <StyledIcon>
                    <CreateIcon fontSize='small'/>
                </StyledIcon>
            </StyledTitle>
            <StyledContactList>
                <StyledContactIcon>
                    <LinkedInIcon fontSize='small'/>
                </StyledContactIcon>
                <StyledContact>
                    <StyledContactName>Your Profile</StyledContactName>
                    <StyledContactLink>
                        https://www.linkedin.com/in/abhishek-kumar-pandey-baa2041b8
                    </StyledContactLink>
                </StyledContact>
            </StyledContactList>
            <StyledContactList>
                <StyledContactIcon>
                        <WebIcon fontSize='small'/>
                </StyledContactIcon>
                <StyledContact>
                    <StyledContactName>Website</StyledContactName>
                    <StyledContactLink>
                        https://github.com/abhisheksk1/project
                    </StyledContactLink>
                </StyledContact>
            </StyledContactList>
            <StyledContactList>
                <StyledContactIcon>
                        <CallIcon fontSize='small'/>
                </StyledContactIcon>
                <StyledContact>
                    <StyledContactName>Phone</StyledContactName>
                    <StyledContactLink>
                        9304843750
                    </StyledContactLink>
                </StyledContact>
            </StyledContactList>
            <StyledDivide></StyledDivide>
            <StyledSeeButton>See all</StyledSeeButton>
        </StyledWrapper>
    )
}

export default Contact
