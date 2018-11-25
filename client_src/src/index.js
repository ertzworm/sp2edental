import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import LandingPage from './Paths.js';
import Persistence from './Patient/Persistence';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<LandingPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
