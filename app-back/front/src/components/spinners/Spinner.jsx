import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const StyledSpinner = styled.div`
    animation: ${rotate} 1s linear infinite;
    border: solid ${props => props.strokeWidth} var(--gray-light-3);
    border-bottom: solid ${props => props.strokeWidth} var(--${props => props.color}-dark-1);
    border-radius: 50%;
    height: ${props => props.height};
    margin: 100px auto ${props => props.marginBottom};
    width: ${props => props.width};
`

function Spinner({
    color='primary',
    strokeWidth='4px',
    marginBottom='0px',
    height='50px',
    width='50px',
}) {
    return (
        <StyledSpinner
            color={color}
            strokeWidth={strokeWidth}
            marginBottom={marginBottom}
            height={height}
            width={width} />
    );
}

export default Spinner;