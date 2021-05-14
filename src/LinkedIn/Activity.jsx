import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: white;
`;

const StyledActivityTitle = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-left: 1rem;
`;

const StyledActivityFollower = styled.div`
    font-size: 14px;
    color: blue;
    font-weight: 700;
    margin-top: 0.4rem;
    margin-left: 1rem
`;

const StyledPostButton = styled.button`
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

const StyledPostDesc = styled.div`
    color: black;
    font-size: 14px;
    margin-top: 1rem;
    font-weight: 600;
    margin-left: 1rem;
`;

const StyledActivityButton = styled.div`
    text-align: center;
    justify-content: center;
    padding-top: 6px;
    padding-bottom: 12px;
    color: blue;
    font-size: 16px;
    font-weight: 700;
    margin-left: -1rem
`;

function Activity() {
    return (
        <StyledWrapper>
            <StyledActivityTitle>Activity</StyledActivityTitle>
            <StyledActivityFollower>109 followers</StyledActivityFollower>
            <StyledPostButton>Start a post</StyledPostButton>
            <StyledPostDesc>
                Posts you created, shared, or commented on in the last
                90 days are displayed here.
            </StyledPostDesc>
            <hr />
            <StyledActivityButton>See all activity</StyledActivityButton>
        </StyledWrapper>
    )
}

export default Activity
