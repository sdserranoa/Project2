import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    align-items: center;
    background-color: var(--gray-light-4);
    border-top: solid 1px var(--gray-light-2);
    display: flex;
    flex-shrink: 0;
    min-height: 30px;
    justify-content: center;
`

const Header = styled.h6`
    color: var(--gray);
    font-size: 12px;
    font-weight: lighter;
    margin: 0;
`

function Footer() {
    return (
        <StyledFooter>
            <Header>© {(new Date()).getFullYear()} Pet Society</Header>
        </StyledFooter>
    );
}

export default Footer;