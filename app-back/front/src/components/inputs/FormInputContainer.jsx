import React from 'react';
import styled from 'styled-components';
import InputLabel from './InputLabel';

const InputContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

const ErrorMessage = styled.p`
    color: var(--red-light-1);
    font-weight: lighter;
    font-size: 12px;
    margin: 4px auto 0;

    &:empty {
        display: none;
    }
`;

function FormInput({
    label ='',
    children,
    errorMessage='',
}) {
    return (
        <InputContainer>
            <InputLabel>{label}</InputLabel>
                {children}
            <ErrorMessage>{errorMessage}</ErrorMessage>
        </InputContainer>
    );
}

export default FormInput;