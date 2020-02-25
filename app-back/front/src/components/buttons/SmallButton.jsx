import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: white;
    border: solid 1px var(--${props => props.color}-dark-1);
    border-radius: 5px;
    color: var(--${props => props.color}-dark-1);
    font-size: 12px;
    height: 30px;
    margin: 0 5px 10px;
    padding: 0 30px;
    position: relative;

    &:hover {
        background-color: var(--${props => props.color}-dark-1);
        cursor: ${props => (props.disabled ? '': 'pointer')};
        color: white;
    }

    &:focus {
        background-color: var(--${props => props.color}-dark-1);
        box-shadow: 0 0 0 3px var(--${props => props.color}-light-4);
        color: white;
    }

    &:disabled {
        border-color: var(--gray-light-2);
        background-color: var(--gray-light-4);
        color: var(--gray-light-2);
    }
`

function SmallButton({ children, onClick, disabled=false, color='primary' }) {
    return (
        <Button onClick={onClick}
            color={color}
            disabled={disabled}>
            {children}
        </Button>
    );
}

export default SmallButton;