import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainPage } from './MainPage';
import { Error404 } from './Error404';

export default class App extends React.Component
{
    render()
    {
        return (<Switch>
            <Route exact path="/" component={ MainPage } />
            {/*<Route exact path="/work/:projectId/" render={ obj => <Project projectId={ Number(obj.match.params.projectId) } /> } />*/}
            {/*<Route exact path="/kp/:uri/" render={ obj => <Kp uri={ obj.match.params.uri } /> } />*/}
            <Route component={ Error404 } />
        </Switch>);
    }
}