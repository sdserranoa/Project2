import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LoginView from './views/LoginView';
import Home from './views/Home';


function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={LoginView} />
            <Route exact path='/home' component={Home} />
        </Switch>
    );
};

export default Routes;