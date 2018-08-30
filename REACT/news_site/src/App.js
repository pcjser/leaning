import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MediaQuery from 'react-responsive';

import PCIndex from './containers/pc_index';
import PCNewsDetails from './containers/pc_news_details';

import MobileIndex from './containers/mobile_index';

import './scss/pc.scss';
import './scss/mobile.scss';
import './scss/base.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MediaQuery minDeviceWidth={1224}>
            <Route exact path="/" component={PCIndex}></Route>
            <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1224}>
            <MobileIndex/>
          </MediaQuery>
        </div>
      </Router>
    );
  }
}

export default App;
