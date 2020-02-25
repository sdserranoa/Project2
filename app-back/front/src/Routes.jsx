import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LoginView from './views/LoginView';
import Home from './views/Home';
import PetsView from './views/PetsView';
import FosterHouses from './views/FosterHouses';
import ShoppingCart from './views/ShoppingCart';
import Favorites from './views/Favorites';


function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={LoginView} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/pets' component={PetsView} />
            <Route exact path='/foster-houses' component={FosterHouses} />
            <Route exact path='/favorites' component={Favorites} />
            <Route exact path='/shopping-cart' component={ShoppingCart} />

        </Switch>
    );
};

export default Routes;