import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LoginView from './views/LoginView';
import Home from './views/Home';
import PetsView from './views/PetsView';
import FosterHouses from './views/FosterHouses';


function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={LoginView} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/pets' component={PetsView} />
            <Route exact path='/foster-houses' component={FosterHouses} />
        </Switch>
    );
};

export default Routes;