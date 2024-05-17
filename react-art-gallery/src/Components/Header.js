import { background, styled } from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom'
import Styled from 'styled-components';

function Header() {
    return(
        <HeaderContainer>
            <h1>
                <TitleLink to="/">React Art Gallery</TitleLink>
            </h1>
        </HeaderContainer>
    )
};

export default Header;
const HeaderContainer = styled.header`
    background-color: blue;
    padding: 10px 20px;
    text-align: center;
    box-shadow: 0 2px 5px rbga(0,0,0,0,1);
`;

const TitleLink = styled(Link)`
    text-decoration: none;
    color: #333;
    font-size: 24px;
`;
   