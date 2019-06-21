import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Profile from './Components/Profile/Profile';
import RegisterModal from './Components/AuthComponents/RegisterModal';
import LoginModal from './Components/AuthComponents/LoginModal';


export default (

    <div>
        
        <Route component={ Nav } path='/'/>
        
        <br />
        <Switch>
            <Route component={ Profile } path='/profile' />
            <Route component={ RegisterModal } path='/register' />
            <Route component={ LoginModal } path='/login' />
            <Route component={ Main } path='/' />
        </Switch>
    </div>
)