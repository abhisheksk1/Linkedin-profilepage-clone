import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    font-size: 14px;
    margin-left: 3px;
`;

const StyledTitle = styled.div`
    font-weight: 600;
    margin-bottom: 4px;
`;

const StyledPrivate = styled.div`
    margin-bottom: 4px;
    color: grey;
`;

function DashBoardTop() {
    return (
        <StyledWrapper>
            <StyledTitle>Your Dashboard</StyledTitle>
            <StyledPrivate>Private to you</StyledPrivate>
        </StyledWrapper>
    )
}

export default DashBoardTop
