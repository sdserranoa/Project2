import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    color: var(--gray);
    font-size: 12px;
    margin-bottom: 2px;
`;

function InputLabel({
    id,
    children,
}) {
    return (
        <StyledLabel htmlFor={id}>
            {children}
        </StyledLabel>
    );
}

export default InputLabel;