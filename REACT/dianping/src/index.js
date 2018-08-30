import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import store from './utils/store'

window.STORE = store


ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
