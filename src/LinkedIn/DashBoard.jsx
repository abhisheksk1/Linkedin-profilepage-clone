import React from 'react';
import styled from 'styled-components';
import DashBoardTop from './DashBoardTop';
import DashBoardMiddle from "./DashBoardMiddle";
import DashBoardBottom from './DashBoardBottom';

const StyledWrapper = styled.div`
    padding: 8px 16px;
    background-color: #c7ecee;
`;

function DashBoard() {
    return (
        <StyledWrapper>
            <DashBoardTop/>
            <DashBoardMiddle />
            <DashBoardBottom />
        </StyledWrapper>
    )
}

export default DashBoard
