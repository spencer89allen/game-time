import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Profile from './Components/Profile/Profile';
// import RegisterModal from './Components/AuthComponents/RegisterModal';
// import LoginModal from './Components/AuthComponents/LoginModal';
import Login from './Components/AuthComponents/Login';
import Register from './Components/AuthComponents/Register'
import GameComponent from './Components/Game/GameComponent/GameComponent';
import CreateProfile from './Components/AuthComponents/CreateProfile';


export default (

    <div>
        
        <Route component={ Nav } path='/'/>
        
        <br />
        <Switch>
            <Route component={ Profile } path='/profile/:username' />
            <Route component={ Register } path='/register' />
            <Route component={ Login } path='/login' />
            <Route component={ GameComponent } path='/play_game' />
            <Route component={ CreateProfile } path='/create_profile' />

            <Route component={ Main } path='/' />
        </Switch>
    </div>
)