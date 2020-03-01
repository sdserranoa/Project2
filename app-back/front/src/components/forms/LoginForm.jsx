import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import FormInputContainer from '../inputs/FormInputContainer';
import SmallLoadingButton from '../buttons/SmallLoadingButton';
import logo from '../../assets/logo.png';
import Input from '../inputs/Input';

import url from '../../api/url'

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
    const [errorMessage, setErrorMessage] = useState('');
    const [redirect, setRedirect] = useState(false);
    var state = {
        user: null
    }

    const login = async (e) => {
        setLoading(true);
        setRedirect(true);

        /*fetch(`${url}/users/username/${username}`) 
            .then(res => {
                return res.json();
            })
            .then(users => {
                console.log(users);
                const user = users[0];

                if(user !== undefined) {
                    if(user.password === password) {
                        setRedirect(true);
                    } else {
                        setErrorMessage("Contraseña incorrecta");
                    }
                } else {
                    setErrorMessage("Usuario no existe");
                }

                setLoading(false);
            });*/
    }

    if (redirect) {
        return <Redirect to='/home' />;
    }

    return (
        <LoginContainer>
            <img src={logo} alt='disliked' />

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