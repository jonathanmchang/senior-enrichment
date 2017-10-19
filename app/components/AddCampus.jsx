import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { postNewCampus } from '../reducers';

class AddCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            imageUrl: ''
        }
        this.handleName = this.handleName.bind(this)
        this.handleUrl = this.handleUrl.bind(this)
    }

    handleName(event) {
        this.setState({name:event.target.value})
    };

    handleUrl(event) {
        this.setState({imageUrl:event.target.value})
    }

    render() {

        return (
            <div className="wrapper">
                <div className='header header-nofilter'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 test-padding'>
                                <h1 className='title text-center' style={{color:"white"}}>Add Campus</h1>
                            </div>
                        </div>
                    </div>
                </div>
            

                <div className='main main-raised main-translucent-light'>
                    <div className='section'>
                        <div className='container'>
                            <div className='row tim-row'>
                                <div className='col-md-8 col-md-offset-2'>
                                    <form onSubmit={(event) => this.props.handleSubmit(event,this.state.name,this.state.imageUrl)}>
                                        <div>
                                            <label className="control-label">CampusName</label>
                                            <input type='text' className='form-control' name='name' onChange={this.handleName}/>
                                        </div>
                                        <div>
                                            <label className="control-label">Campus Image Url</label>
                                            <input type='text' className='form-control' name='name' onChange={this.handleUrl}/>
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
    }
   
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmit (event, name, imageurl) {
            event.preventDefault()
            dispatch(postNewCampus({name, imageurl}, ownProps.history));
        }
    };
};

const addCampusContainer = connect(null, mapDispatchToProps)(AddCampus);
export default addCampusContainer;




