import React from 'react';
import ReactDOM from 'react-dom';

import CenteredGrid from './InputUsers'
import * as serviceWorker from './serviceWorker';
import App from './Rout'



ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<CenteredGrid/>, document.getElementById('root'));

// ReactDOM.render(<Blog/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
