import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

export default () => (
	<nav className="navbar navbar-fixed-top navbar-color-on-scroll">
	<div className="container">
		<div className="navbar-header">
		<NavLink className="navbar-brand" to={'/home'}>HOME</NavLink>
			<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example">
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</button>
		</div>

		<div className="collapse navbar-collapse" id="navigation-example">
			<ul className="nav navbar-nav navbar-right">
				<li>
					<NavLink to={'/students'}>Students</NavLink>
				</li>
				<li>
					<NavLink to={'/campuses'}>Campuses</NavLink>
				</li>
			</ul>
		</div>
	</div>
</nav>
)
	
	