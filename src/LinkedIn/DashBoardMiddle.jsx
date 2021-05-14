import React from 'react';
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    flexx-direction: row;
    margin-top: 0.5rem;
    border: 1px solid grey;
    background: white;
    border-radius: 5px;
`;

const StyledDashboardList = styled.div`
    display: flex;
    flex-direction: column;
    width: 33.33%;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
    margin-top: 0.6rem;
`;

const StyledDashNo = styled.div`
    color: blue;
    font-weight: 700;
`;

const StyledDashDesc = styled.div`
    color: grey;
    font-size: 14px;
`;


function DashBoardMiddle() {
    return (
        <StyledWrapper>
            <StyledDashboardList>
                <StyledDashNo>7</StyledDashNo>
                <StyledDashDesc>Who viewd your profile</StyledDashDesc>
            </StyledDashboardList>
            <StyledDashboardList>
                <StyledDashNo>45</StyledDashNo>
                <StyledDashDesc>Post views</StyledDashDesc>
            </StyledDashboardList>
            <StyledDashboardList>
                <StyledDashNo>1</StyledDashNo>
                <StyledDashDesc>Search apperance</StyledDashDesc>
            </StyledDashboardList>
        </StyledWrapper>
    )
}

export default DashBoardMiddle
