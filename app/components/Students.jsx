import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchStudents, deleteStudent } from '../reducers';



const studentRow = (student, deleteStudent, index) => {
    return (
        <tr key={student.id}>
            <td className='text-center'>{index+1}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.campus ? student.campus.name : 'None'}</td>
            <td>{student.email}</td>
            <td className='td-actions text-right'>
                <NavLink to={'/students/' + student.id}>
                    <button type='button' rel='tooltip' title='View Profile' className='btn btn-info btn-simple btn-xs'>
                        <i className='fa fa-user'></i>
                    </button>
                </NavLink>
                <NavLink to={'/students/' + student.id + '/edit'}>
                    <button type='button' rel='tooltip' title='Edit Profile' className='btn btn-info btn-simple btn-xs'>
                        <i className='fa fa-pencil'></i>
                    </button>
                </NavLink>
                <button type='button' rel='tooltip' title='Delete Profile'            className='btn btn-info btn-simple btn-xs' onClick={()           =>deleteStudent(student.id)}>
                    <i className='fa fa-ban'></i>
                </button>
            </td>
        </tr>
    )
}

class Students extends Component {

    componentDidMount() {
        console.log('mounting.....')
        this.props.fetchStudents()
    }

    render() {
        console.log('******', this.props.students)
        // console.log('######', this.props.students.campus.name)
        return (
            <div className="wrapper">
                <div className="header header-nofilter">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 test-padding">
                                <h1 className="title text-center" style={{color: "white"}}>All Students</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main main-raised main-translucent-light">
                    <div className="text-center">
                        <NavLink to={'/students/addStudent'}>
                            <button className="btn btn-secondary">
                                Add New Student
                            </button>
                        </NavLink>
                    </div>    
                    <div className="section">
                        <div className="container">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Campus</th>
                                        <th>Email</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.students.map((student,index) => studentRow(student, this.props.deleteStudent, index))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        students: state.students
    };
};
  
const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        fetchStudents() {
            console.log('dispatching......')
            dispatch(fetchStudents())
        },
        deleteStudent(studentId) {
            dispatch(deleteStudent(studentId))
        }
    };
};
  
 const studentsContainer = connect(mapStateToProps,mapDispatchToProps)(Students);
 export default studentsContainer;
