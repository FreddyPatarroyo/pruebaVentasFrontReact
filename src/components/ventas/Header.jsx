import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader=styled.nav`
    background-color:#4DFF98 ;
    padding: 1rem;
    text-align: center;
`;

const Title=styled.h1`
    margin: 0;
    color: #fff;
    text-shadow: 3px 2px #000;
    font-size: 40px;
`;

const Header = ({title}) => {
    return ( 
        <ContenedorHeader>
            <Title>{title}</Title>
        </ContenedorHeader>
     );
}
 
export default Header;