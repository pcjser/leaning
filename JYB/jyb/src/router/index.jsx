import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../components/loading';

const routes = [
    {
        path: '/',
        name: 'welcome',
        exact: true
    }, {
        path: '/index',
        name: 'index'
    }, {
        path: '/course',
        name: 'course'
    }, {
        path: '/discovery',
        name: 'discovery'
    }, {
        path: '/campus',
        name: 'campus'
    }, {
        path: '/personal',
        name: 'personal'
    }, {
        path: '/search',
        name: 'search'
    }, {
        name: 'notfound'
    }
]

const RouteMap = () => (
    <div>
        <Switch>
            {routes.map(({
                component = null,
                name = '',
                ...route
            }) => {
                component = component || Loadable({
                    loader: () => import(`../containers/${name}`),
                    loading: () => <Loading />
                });
                const props = {
                    ...route,
                    key: name,
                    component
                };
                return <Route {...props} />
            })
            }
        </Switch>
    </div>
)

export default RouteMap