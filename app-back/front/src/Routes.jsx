import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LoginView from './views/LoginView';
import Home from './views/Home';
import PetsView from './views/PetsView';


function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={LoginView} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/pets' component={PetsView} />
        </Switch>
    );
};

export default Routes;