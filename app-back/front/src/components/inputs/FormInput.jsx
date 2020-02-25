import React from 'react';
import styled from 'styled-components';
import InputLabel from './InputLabel';
import Input from './Input';

const InputContainer = styled.div`
    align-items: left;
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
    id,
    label,
    type,
    value,
    setValue,
    errorMessage='',
}) {
    return (
        <InputContainer>
            <InputLabel id={id}>{label}</InputLabel>
            <Input
                id={id}
                type={type}
                value={value}
                handleChange={(e) => setValue(e.target.value)} />
            <ErrorMessage>{errorMessage}</ErrorMessage>
        </InputContainer>
    );
}

export default FormInput;