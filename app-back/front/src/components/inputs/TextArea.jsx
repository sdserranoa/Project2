import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
    height: 100px;
    width: 300px;
    border-radius: 5px;
    border: 1px solid;
    border-color: var(--gray-light-2);
    padding: 0 10px;
    @media only screen and (max-width: 350px) {
        width: 90%;
    }
`;
function TextArea({
    id,
    cols,
    rows,
    value,
    handleChange,
}) {
    return (
        <StyledTextArea
            id={id}
            name={id}
            cols={cols}
            rows={rows}
            value={value}
            onChange={handleChange} />
    );
}

export default TextArea;