import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './App';
import ExplorePage from './Explore/explore';
import {Router, Route, Switch} from 'react-router';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from 'history';
let history = createBrowserHistory();



ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/explore' component={ExplorePage}/>
        </Switch>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
