import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UnitCalculator from './UnitCalculator';
import BillCalculator from './BillCalculator';
import * as serviceWorker from './serviceWorker';
import {Router, Route} from 'react-router';
import { createBrowserHistory as browserHistory} from 'history'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router history={browserHistory()}>
      <Route exact path="/" component={App} />
      <Route exact path="/unitCalc" component={UnitCalculator} />
      <Route exact path="/billCalc" component={BillCalculator} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
