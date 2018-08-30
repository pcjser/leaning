import React, { Component } from 'react';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

import App from '../containers';
import Home from '../containers/Home';

class Route extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                </Route>
            </Router>
        )
    }
}