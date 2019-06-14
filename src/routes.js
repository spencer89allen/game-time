import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Profile from './Components/Profile/Profile';


export default (

    <div>
        
        <Route component={ Nav } path='/'/>
        
        <br />
        <Switch>
            <Route component={Profile} path='/profile' />
            <Route component={Main} path='/' />
        </Switch>
    </div>
)