import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { deleteStudent,fetchStudents,fetchCampuses } from '../reducers';

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
                    <button type='button' rel='tooltip' title='Delete Profile' className='btn btn-info btn-simple btn-xs' onClick={()=>deleteStudent(student.id)}>
                        <i className='fa fa-ban'></i>
                </button>
            </td>
        </tr>
    )
}


class SingleCampus extends Component {
    
    componentDidMount() {
        console.log('mounting........')
        this.props.fetchStudents()
        this.props.fetchCampuses()
    }
    
    render() {
        const campusTitle = this.props.campuses.filter(campus=>campus.id==this.props.match.params.campusId)
        
        return (
            <div className="wrapper">
                <div className="header header-nofilter">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <br />
                                <br />
                                <br />
                                <br />
                                <h1 className="title text-center" style={{color: "white"}}>
                                    {
                                        campusTitle.length ? campusTitle[0].name : false
                                    }
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main main-raised main-translucent-light">
                    <div className="col-md-4 center-block">
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
                                    {this.props.students.filter(student=>student.campusId==this.props.match.params.campusId).map((student,index) => studentRow(student, this.props.deleteStudent, index))}
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
        students: state.students,
        campuses: state.campuses 
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        fetchStudents() {
            console.log('dispatching.........')
            dispatch(fetchStudents())
        },
        fetchCampuses() {
            console.log('dispatching.......')
            dispatch(fetchCampuses())
        },
        deleteStudent(studentId) {
            dispatch(deleteStudent(studentId))
        }
    };
};

const singleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
export default singleCampusContainer;