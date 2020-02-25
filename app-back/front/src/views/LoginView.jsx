import React from 'react';
import View from '../components/layouts/View';
import LoginForm from '../components/forms/LoginForm';
import FullScreenCenterContent from '../components/layouts/FullScreenCenterContent';


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