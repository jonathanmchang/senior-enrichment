import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { putCampus, fetchCampuses } from '../reducers';
import axios from 'axios';

class EditCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            imageurl: ''
        }

        this.handleName = this.handleName.bind(this)
        this.handleUrl = this.handleUrl.bind(this)
    }

    componentDidMount() {
        this.props.fetchCampuses()
        
    }

    handleName(event) {
        this.setState({name:event.target.value})
    }

    handleUrl(event) {
        this.setState({imageurl:event.target.value})
    }
    
    render() {
        console.log('***this.props', this.props)
        const campusId = this.props.match.params.campusId
        const campusName = this.props.campuses.filter(campus=>campus.id==campusId)
        return (
            <div className="wrapper">
            
                <div className='header header-nofilter'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 test-padding'>
                                <h1 className='title text-center' style={{color:"white"}}>Edit Campus: {
                                    campusName.length ? campusName[0].name : null
                                }</h1>
                            </div>
                        </div>
                    </div>
                </div>
            

                <div className='main main-raised main-translucent-light'>
                    <div className='section'>
                        <div className='container'>
                            <div className='row tim-row'>
                                <div className='col-md-8 col-md-offset-2'>
                                    <form onSubmit={(event) => this.props.handleSubmit(event,this.state.name,this.state.imageurl,campusId)}>
                                        <div>
                                            <label className="control-label">CampusName</label>
                                            <input type='text' className='form-control' name='name' onChange={this.handleName} />
                                        </div>
                                        <div>
                                            <label className="control-label">Campus Image Url</label>
                                            <input type='text' className='form-control' name='name' onChange={this.handleUrl}/>
                                        </div>
                                        <button type='submit' className='btn btn-success pull-right'>Update
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        campuses: state.campuses
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCampuses() {
            dispatch(fetchCampuses())
        },
        handleSubmit (event, name, imageurl, campusId) {
            event.preventDefault()
            console.log('dispatching: ', name, imageurl, campusId)
            dispatch(putCampus({name, imageurl}, campusId, ownProps.history))
        }
    }
}


const editCampusContainer = connect(mapStateToProps, mapDispatchToProps)(EditCampus)
export default editCampusContainer;
