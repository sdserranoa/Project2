import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import FormInput from '../inputs/FormInput';
import SmallLoadingButton from '../buttons/SmallLoadingButton';
import logo from '../../assets/logo.png';
// import url from '../../api/url'

const LoginContainer = styled.form`
    align-items: center;
    background: white;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    padding: 24px 44px;
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
            <div height='24px' width='100%' >
                <img src={logo} alt='disliked'/>
            </div>
            <FormInput
                id='username'
                label='Usuario:'
                type='text'
                value={username}
                setValue={setUsername} />
            <FormInput
                id='password'
                label='Clave:'
                type='password'
                value={password}
                setValue={setPassword}
                errorMessage={errorMessage} />
            <SmallLoadingButton onClick={login} loading={loading}>Entrar</SmallLoadingButton>
        </LoginContainer>
    )
}

export default LoginForm;