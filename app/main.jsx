'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import store from './store'

import Home from './components/Home';
import Students from './components/Students';
import Campuses from './components/Campuses';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


render (
  <Provider store={store}>
    <Router>
      <div id='main' className='container-fluid'> 
        <div className="col-xs-2">
          <Sidebar />
        </div>
        <div className="col-xs-10">
          <Switch> 
            <Route path="/home" component={Home} /> 
            <Route path="/students" component={Students} />
            <Route path='/campuses' component={Campuses} />


            <Redirect to='/home' />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)