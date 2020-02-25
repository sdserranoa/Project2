import React from 'react';
import styled, { keyframes } from 'styled-components';

const Button = styled.button`
    background-color: white;
    border: solid 1px var(--${props => props.color}-dark-1);
    border-radius: 2px;
    color: var(--${props => props.color}-dark-1);
    font-size: 12px;
    height: 30px;
    /* margin: 0 5px 10px; */
    padding: 0 30px;
    position: relative;
    width: fit-content;

    &:hover {
        background-color: var(--${props => props.color}-dark-1);
        cursor: pointer;
        color: ${props => (props.disabled ? `var(--${props => props.color}-dark-1)` : 'white')};
    }

    &:focus {
        background-color: var(--${props => props.color}-dark-1);
        box-shadow: 0 0 0 3px var(--${props => props.color}-light-4);
        color: white;
    }

    &:disabled {
        border-color: ${props => (props.loading ? `var(--${props => props.color}-dark-1)` : 'var(--gray-light-2)')};
        background-color: ${props => (props.loading ? 'white' : 'var(--gray-light-4)')};
        color: ${props => (props.loading ? `var(--${props => props.color}-dark-1)` : 'var(--gray-light-2)')};
        cursor: unset;
    }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
    animation: ${rotate} 1s linear infinite;
    border: solid 2px var(--gray-light-3);
    border-bottom: solid 2px var(--${props => props.color}-dark-1);
    border-radius: 50%;
    height: 18px;
    left: 5px;
    position: absolute;
    top: 5px;
    width: 18px;
`

function SmallLoadingButton({ children, onClick, disabled, loading, color='primary' }) {
    return (
        <Button onClick={onClick}
            color={color}
            disabled={disabled ? 'disabled' : ''}
            loading={loading ? 1 : 0}>
            {children}
            {loading ? <Spinner color={color} /> : null}
        </Button>
    );
}

export default SmallLoadingButton;