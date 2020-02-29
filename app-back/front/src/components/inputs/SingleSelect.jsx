import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const StyledSelect = styled(Select)`
    width: 300px;
    @media only screen and (max-width: 350px) {
        width: 90%;
    }
`;

function SingleSelect({
    options,
    value,
    onChange,
}) {
    const [formattedOptions, setFormattedOptions] = useState([]);
    const [formattedValue, setFormattedValue] = useState([]);

    useEffect(() => {
        setFormattedOptions(options.map((option) => ({ value: option, label: option })));
    }, [options])

    useEffect(() => {
        setFormattedValue({ value: value, label: value });
    }, [value])

    const handleChange = (value) => {
        if (value) {
            onChange(value.value);
        } else {
            onChange('');
        }
    }

    return (
        <StyledSelect
            isClearable={true}
            isMulti={false}
            closeMenuOnSelect={true}
            options={formattedOptions}
            value={formattedValue}
            onChange={handleChange} />
    );
}

export default SingleSelect;