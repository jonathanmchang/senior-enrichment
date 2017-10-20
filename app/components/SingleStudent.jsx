import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudent } from '../reducers';
import axios from 'axios';



class SingleStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: null,
            email: '',
            campus: null,
            campusId: ''
        }

    }
    componentDidMount() {
        axios.get(`/api/students/${this.props.match.params.studentId}`)
            .then(res => res.data)
            .then(student => {
                this.setState({
                    name: student.name,
                    age: student.age,
                    email: student.email,
                    campus: student.campus.name,
                    campusId: student.campus.id
                })
            })     
        }



    render() {
        console.log('****', this.state)
        return (
            <div className='test-padding'>
                <div className='test-padding'>
                <div className='text-center'>
                    <h1>{this.state.name}</h1>
                    <h3>Age: {this.state.age}</h3>
                    <h3>Email: {this.state.email}</h3>
                    <h3>Campus: {this.state.campus}</h3>
                    <NavLink to={`/students/${this.props.match.params.studentId}/edit`}>
                        <button className='btn btn-secondary'>Edit Student
                        </button>
                    </NavLink>
                    <NavLink to={`/campuses/${this.state.campusId}`}>
                        <button className='btn btn-secondary'>Back to Campus
                        </button>
                    </NavLink>
                </div>
            </div>
            </div>
        )
    }
}

export default SingleStudent
