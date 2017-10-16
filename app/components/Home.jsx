import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

export default () => (
    <div> 
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="title"> The Margaret Hamilton Interplanetary Academy of JavaScript</h1>
                    <h4>The only place to become a UNIVERSAL STACK developer.  We will teach you to travel through Express wormholes, query your Sequelized consciousness, render your multidimensional world with React antimatter, and have it all at your bionically enhanced fingertips with Redux! </h4>
                    <br />
                    <br />
                    <NavLink to={'/students'}>
                        <div className="btn btn-primary btn-raise btn=lg">
                        </div>
                    </NavLink>
                    <NavLink to={'/campuses'}>
                        <div className="btn btn-primary btn-raise btn=lg">
                        </div>
                </NavLink>
                </div>
            </div>
        </div>  
    </div>
)