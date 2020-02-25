import React from 'react';

function Input({
    id,
    type,
    value,
    handleChange,
}) {
    return (
        <input
            id={id}
            name={id}
            type={type}
            value={value}
            onChange={handleChange} />
    );
}

export default Input;