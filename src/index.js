import React from 'react'
import ReactDom from 'react-dom'
// import {Provider} from 'react-redux'
import Router from 'react-router-dom/Router';
import createBrowserHistory from 'history/createBrowserHistory'
// import store from './store/store';
import routes from './router/router';

const history = createBrowserHistory();
ReactDom.render(
    <Router history={history}>
        {routes}
    </Router>
    , document.getElementById('root'));