import React from 'react';
import styled from "styled-components";
import avatar from "../Image/avatar.jpg";
import CreateIcon from '@material-ui/icons/Create';

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    padding-top: 10px;
`;

const StyledAvatarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid Black;
    border-radius: 50%;
    padding: 3px;
    width: 80px;
    height: 80px;
`;

const StyledAvatar = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

const StyledPencil = styled.div`
    display: flex;
    margin-right: 1rem;
`;

function ProfileTop() {
    return (
        <StyledWrapper>
            <StyledAvatarWrapper>
                <StyledAvatar  src={avatar}/>
            </StyledAvatarWrapper>
            <StyledPencil>
                <CreateIcon />
            </StyledPencil>
        </StyledWrapper>
    )
}

export default ProfileTop;
