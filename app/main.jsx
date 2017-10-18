'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import store from './store'

import Home from './components/Home';
import Students from './components/Students';
import Campuses from './components/Campuses';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


render (
  <Provider store={store}>
    <Router>
      <div id='main' className='container-fluid'> 
        <Navbar />
        <Switch> 
          <Route path="/home" component={Home} /> 
          <Route path="/students" component={Students} />
          <Route path='/campuses' component={Campuses} />


          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)