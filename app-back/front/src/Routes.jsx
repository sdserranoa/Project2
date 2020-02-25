import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LoginView from './views/LoginView';
import Home from './views/Home';
import AllPetsView from './views/AllPetsView';
import FosterHouses from './views/FosterHouses';
import ShoppingCart from './views/ShoppingCart';
import Favorites from './views/Favorites';
import CreatePetView from './views/CreatePetView';


function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={LoginView} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/all-pets' component={AllPetsView} />
            <Route exact path='/foster-houses' component={FosterHouses} />
            <Route exact path='/favorites' component={Favorites} />
            <Route exact path='/shopping-cart' component={ShoppingCart} />
            <Route exact path='/create-pet' component={CreatePetView} />

        </Switch>
    );
};

export default Routes;