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
// import IssacGameComponent from './Components/Game/IssacGameComponent/IssacGameComponent';

export default (

    <div>
        
        <Route component={ Nav } path='/'/>
        
        <br />
        <Switch>
            <Route component={ Profile } path='/profile/:username' />
            <Route component={ Register } path='/register' />
            <Route component={ Login } path='/login' />
            <Route component={ GameComponent } path='/play_game/:username' />
            <Route component={ CreateProfile } path='/create_profile/:username' />
            {/* <Route component={ IssacGameComponent } path='/play_issac_game/:username' /> */}

            <Route component={ Main } path='/' />
        </Switch>
    </div>
)