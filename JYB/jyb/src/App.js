import React, {Component} from 'react';
import {HashRouter, Route} from 'react-keeper';


import IndexNav from './components/IndexNav';
// import ScrollRestoration from './components/ScrollRestoration'; import events
// from "./utils/events"

import './static/flexible';
import './static/base.css';

//todo
/**
 * 1.全局监听hash变化(页面访问统计)
 */

const routes = [
  {
    path: '/>',
    name: 'Welcome',
    // cache: true
  }, {
    path: '/index',
    name: 'Index',
    // cache: true
  }, {
    path: '/course',
    name: 'Course',
    // cache: true
  }, {
    path: '/discovery',
    name: 'Discovery'
  }, {
    path: '/campus',
    name: 'Campus'
  }, {
    path: '/personal',
    name: 'Personal'
  }, {
    path: '/search',
    name: 'Search'
  }
]

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className="common-page">
          {routes.map(({
            path,
            name,
            ...route
          }) => {
            return (<Route
              {...route}
              key={name}
              loadComponent={callback => {
              import (`./containers/${name}`).then(component => {
                callback(component.default)
              })
            }}
              path={path}/>)
          })
          }
          <IndexNav></IndexNav>
        </div>
      </HashRouter>
    )
  }
}

export default App