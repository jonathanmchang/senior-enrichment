import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

export default () => (
    <div> 
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className="title"> The Margaret Hamilton Interplanetary Academy of JavaScript</h1>
                    <br />
                    <h4>The only place to become a UNIVERSAL STACK developer.  We will teach you to travel through Express wormholes, query your Sequelized consciousness, render your multidimensional world with React antimatter sprinkled on top, and use Redux to manage it all with just one bionically enhanced finger! </h4>
                    <br />
                    <br />
                    <NavLink to={'/students'}>
                        <div className="btn btn-primary btn-raise btn=lg">Manage Students
                        </div>
                    </NavLink>
                    <NavLink to={'/campuses'}>
                        <div className="btn btn-primary btn-raise btn=lg pull-right">Manage Campuses
                        </div>
                </NavLink>
                </div>
            </div>
        </div>  
    </div>
)