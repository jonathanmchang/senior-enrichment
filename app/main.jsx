'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import store from './store'

import Home from './components/Home';


render (
  <Provider store={store}>
    <Router>
      <div> 
      <Switch> 
      <Route exact path="/home" componen={Home} /> 
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)