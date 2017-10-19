import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { putCampus } from '../reducers';

export default () => {
    return (
        <div>
            <h1>TESTING</h1>
        </div>
    )
}



// class EditCampus extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name:  '',
//             imageurl: ''
//         }
//     }

//     componentDidMount() {
//         this.props.fetchCampuses()
//     }

//     render() {
//         console.log('***this.props', this.props)
//         return (
//             <div className='test-padding'>
//                 <h1>TESTING</h1>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         campuses: state.campuses
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         fetchCampuses() {
//             dispatch(fetchCampuses())
//         },
//         handleSubmit (event, name, imageurl, campusId) {
//             dispatch(putCampus({name, imageurl}, campusId, ownProps.history))
//         }
//     }
// }

// const editCampusContainer = connect(mapStateToProps, mapDispatchToProps)(EditCampus)
// export default EditCampus;