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
import SingleCampus from './components/SingleCampus';
import AddCampus from './components/AddCampus';
import AddStudent from './components/AddStudent';
import EditCampus from './components/EditCampus';
import EditStudent from './components/EditStudent';


render (
  <Provider store={store}>
    <Router>
      <div id='main' className='container-fluid'> 
        <Navbar />
        <Switch> 
          <Route path="/home" component={Home} /> 
          <Route exact path='/students/addStudent' component={AddStudent} />
          <Route path='/students/:studentId/edit' component={EditStudent} />
          <Route path="/students" component={Students} />
          <Route exact path='/campuses/addCampus' component={AddCampus} />
          <Route exact path='/campuses' component={Campuses} />
          <Route path='/campuses/:campusId/edit' component={EditCampus} />
          <Route path='/campuses/:campusId' component={SingleCampus} />


          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)