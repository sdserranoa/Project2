import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LoginView from './views/LoginView';


function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={LoginView} />
        </Switch>
    );
};

export default Routes;