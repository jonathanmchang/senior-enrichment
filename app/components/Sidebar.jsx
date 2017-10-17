import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default () => {
    return (
        <sidebar>
            <section>
                <h4 className='menu-item active'>
                    <NavLink to='/home' activeClassName='active'>HOME</NavLink>
                </h4>
            </section>
            <section>
                <h4 className='menu-item active'>
                    <NavLink to='/campuses' activeClassName='active'>CAMPUSES</NavLink>
                </h4>
            </section>
                <h4 className='menu-item active'>
                    <NavLink to='/students' activeClassName='active'>STUDENTS</NavLink>
                </h4>
            <section>
            </section>
        </sidebar>

    );
};