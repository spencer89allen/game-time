import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TopScores from './ComponentsMain/TopScores';
import AboutUs from './ComponentsMain/AboutUs';
import AboutGame from './ComponentsMain/AboutGame';
import SomethingElse from './ComponentsMain/SomethingElse';


export default (

    <div>
        <Switch>
            <Route component={TopScores} exact path='scores' />
            <Route component={AboutUs} path=':us' />
            <Route component={AboutGame} path=':game' />
            <Route component={SomethingElse} path=':something' />

        </Switch>
    </div>
)