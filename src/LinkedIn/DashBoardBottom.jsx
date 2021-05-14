import React from 'react';
import styled from "styled-components";
import BookmarkIcon from '@material-ui/icons/Bookmark'
import SubtitlesIcon from '@material-ui/icons/Subtitles';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    background: white;
    border: 1px solid grey;
    border-radius: 5px;
`;

const StyledDashList = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.7rem;
    margin-bottom: 10px;
    margin-top: 10px;
`;

const StyledDashHead = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: black;
`;

const StyledDashDesc = styled.div`
    font-size: 14px;
    color: grey;
    padding-left: 22px;
    width: 90%;
`;

function DashBoardBottom() {
    return (
        <StyledWrapper>
            <StyledDashList>
                <StyledDashHead>
                    <SubtitlesIcon fontSize='small'/>Salary insights
                </StyledDashHead>
                <StyledDashDesc>
                    Explore how your salary compares to your peers,
                    and where your growth is headed.
                </StyledDashDesc>
            </StyledDashList>
            <hr style={{color: 'black'}}/>
            <StyledDashList>
                <StyledDashHead>
                    <BookmarkIcon fontSize="small"/>My items
                </StyledDashHead>
                <StyledDashDesc>
                    Keep track of your jobs, courses and articles.
                </StyledDashDesc>
            </StyledDashList>
        </StyledWrapper>
    )
}

export default DashBoardBottom;
