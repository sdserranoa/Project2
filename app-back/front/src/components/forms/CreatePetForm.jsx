import React, { useState, useEffect } from 'react';
//import NumberFormat from 'react-number-format';
// import NumberRequiredIndicator from '../../atoms/indicators/NumberRequiredIndicator';
// import StringRequiredIndicator from '../../atoms/indicators/StringRequiredIndicator';
import SmallLoadingButton from '../buttons/SmallLoadingButton';
import SingleSelect from '../inputs/SingleSelect';
import FormInputContainer from '../inputs/FormInputContainer';
import NumberFormatInput from '../inputs/NumberFormatInput';
import TextArea from '../inputs/TextArea';
import Input from '../inputs/Input';
import styled from 'styled-components';

const Form = styled.div`
   display: flex;
   flex-direction: column;
`;
function CreatePetForm({ setPet, createPet, loading }) {
    const [name, setName] = useState('');
    const [race, setRace] = useState('');
    const [age, setAge] = useState('');
    const [lovingRate, setLovingRate] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setPet({ name, race, age, lovingRate, description });
    }, [setPet, name, race, age, lovingRate, description]);

    const handleSubmit = (e) => {
        e.preventDefault();
        createPet();
    }

    return (
        <Form>
            <FormInputContainer label='Nombre:'>
                <Input
                    id='name'
                    type='text'
                    placeholder='Maria'
                    value={name}
                    handleChange={(e) => setName(e.target.value)} />
            </FormInputContainer>
            <FormInputContainer label='Raza:'>
                <Input
                    id='race'
                    type='text'
                    placeholder='Huski'
                    value={race}
                    handleChange={(e) => setRace(e.target.value)} />
            </FormInputContainer>
            <FormInputContainer label='Edad:'>
                <NumberFormatInput
                    id='age'
                    placeholder='2 años'
                    type='input'
                    suffix=' años'
                    value={age}
                    handleChange={value => setAge(value.floatValue)} />
            </FormInputContainer>
            <FormInputContainer label='Puntaje cariñoso:'>
                <SingleSelect
                    options={[1, 2, 3, 4, 5]}
                    value={lovingRate}
                    onChange={(value) => setLovingRate(value)} />
            </FormInputContainer>
            <FormInputContainer label='Descripción:'>
                <TextArea
                    id='description'
                    cols={70}
                    rows={12}
                    value={description}
                    handleChange={(e) => setDescription(e.target.value)} />
            </FormInputContainer>
            <FormInputContainer>
                <SmallLoadingButton onClick={handleSubmit} loading={loading}>Enviar</SmallLoadingButton>
            </FormInputContainer>
        </Form>
    );
}

export default CreatePetForm;