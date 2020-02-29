import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import FormInputContainer from '../inputs/FormInputContainer';
import SmallLoadingButton from '../buttons/SmallLoadingButton';
import logo from '../../assets/logo.png';
import Input from '../inputs/Input';

// import url from '../../api/url'

const LoginContainer = styled.form`
    align-items: center;
    background: white;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    padding: 20px;
    img {
        height: 50%;
        width: 100%;
    }
    @media only screen and (max-width: 370px) {
        width: 100%;
        margin: 0 25px;
    }

`;



function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    // const [errorMessage, setErrorMessage] = useState('');
    const [errorMessage] = useState('');
    const [redirect, setRedirect] = useState(false);

    const login = async(e) => {
        setLoading(true);
        // const response = await fetch(`${url}`, {
        //     method: 'GET',
        //     body: JSON.stringify({ username, password }),
        // });

        // const status = response.status;
        setLoading(false);
        // if (status === 200) {
            setRedirect(true);
        // } else if (status === 401) {
        //     setErrorMessage('Usuario o contraseña incorrectos');
        // }
    }
    if (redirect) {
        return <Redirect to='/home' />;
    }

    return (
        <LoginContainer onSubmit={login}>
            <img src={logo} alt='disliked'/>

            <FormInputContainer label='Usuario:'>
                <Input
                    id='username'
                    type='text'
                    value={username}
                    handleChange={(e) => setUsername(e.target.value)} />
            </FormInputContainer>
            <FormInputContainer label='Clave:' errorMessage={errorMessage} >
                <Input
                    id='password'
                    type='password'
                    value={password}
                    handleChange={(e) => setPassword(e.target.value)} />
            </FormInputContainer>
            <SmallLoadingButton onClick={login} loading={loading}>Entrar</SmallLoadingButton>
        </LoginContainer>
    )
}

export default LoginForm;