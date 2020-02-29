import React from 'react';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';

const StyledInput = styled.div`
    input {
        height: 38px;
        border-radius: 5px;
        border: 1px solid;
        border-color: var(--gray-light-2);
        padding: 0 10px;
        @media only screen and (max-width: 250px) {
            width: 90%;
        }
    }

`;
function Input({
    id,
    type,
    value,
    handleChange,
    placeholder = '',
    suffix = '',
    prefix = '',
}) {
    return (
        <StyledInput>
            <NumberFormat
                id={id}
                placeholder={placeholder}
                type={type}
                suffix={suffix}
                prefix={prefix}
                value={value}
                onValueChange={handleChange} />
        </StyledInput>
    );
}

export default Input;