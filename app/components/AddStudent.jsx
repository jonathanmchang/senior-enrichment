import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { postNewStudent,fetchCampuses } from '../reducers';

class AddStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: null,
            email: '',
            campus: null
        }

        this.handleName = this.handleName.bind(this)
        this.handleAge = this.handleAge.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleCampus = this.handleCampus.bind(this)
    }

    handleName(event) {
        this.setState({name: event.target.value})
    }

    handleAge(event) {
        this.setState({age: event.target.value})
    }

    handleEmail(event) {
        this.setState({email: event.target.value})
    }

    handleCampus(event) {
        this.setState({campus: event.target.value})
    }

    componentDidMount() {
        console.log('Mounting.....')
        this.props.fetchCampuses()

    }
    
    render() {

        return (
            <div className="wrapper">
                <div className='header header-nofilter'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 test-padding'>
                                <h1 className='title text-center' style={{color:"white"}}>Add Student</h1>
                            </div>
                        </div>
                    </div>
                </div>
        

                <div className='main main-raised main-translucent-light'>
                    <div className='section'>
                        <div className='container'>
                            <div className='row tim-row'>
                                <div className='col-md-8 col-md-offset-2'>
                                    <form onSubmit={(event) => this.props.handleSubmit(event,this.state.name,this.state.age,this.state.email,this.state.campus)}>
                                        <div>
                                            <label className="control-label">Student Name</label>
                                            <input type='text' className='form-control' name='name' onChange={this.handleName}/>
                                        </div>
                                        <div>
                                            <label className="control-label">Age</label>
                                            <input type='text' className='form-control' name='photo' onChange={this.handleAge}/>
                                        </div>
                                        <div>
                                            <label className="control-label">Email</label>
                                            <input type='text' className='form-control' name='photo' onChange={this.handleEmail}/>
                                        </div>
                                        <div>
                                            <label className="control-label">Campus</label>
                                            <select className='form-control' name='campus' onChange={this.handleCampus}><option></option>
                                                {
                                                    this.props.campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)
                                                }
                                            </select>
                                        </div>
                                        <button type='submit' className='btn btn-success pull-right'>Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        campuses: state.campuses
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        handleSubmit(event, name, age, email, campusId) {
            event.preventDefault()
            console.log('dispatching......', this.state)
            dispatch(postNewStudent({name,age,email,campusId}, ownProps.history))
        },
        fetchCampuses() {
            console.log('dispatching fetch')
            dispatch(fetchCampuses())
        }
    }
}

const addStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudent);
export default addStudentContainer;