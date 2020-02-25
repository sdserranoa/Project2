import React from 'react';
import View from '../components/layouts/View';
import LoginForm from '../components/forms/LoginForm';
import styled from 'styled-components';

const FullScreenCenterContent = styled.div`
    align-items: center;
    background-color: #b190e3;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%235d4289' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
`;

function LoginView() {
    return (
        <View>
            <FullScreenCenterContent>
                <LoginForm />
            </FullScreenCenterContent>
        </View>
    );
}

export default LoginView;