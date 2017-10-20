import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCampuses, deleteCampus } from '../reducers';

const campusCard = (campus, deleteCampus) => (
    <div className='col-md-4' key={campus.id}>
        <div className='card'>
            <div className='wrapper' style={{height: '100px', overflow:'hidden', width:'100%'}}>
                <img  />
            </div>
            <div className='cardcontainer'>
                <h2 className='card-title'>{campus.name}</h2>
                <NavLink to={'/campuses/' + campus.id} className='btn btn-black'>See More</NavLink>
                <div className='btn btn-danger pull-right' onClick={() =>deleteCampus(campus.id)}>Delete</div>
            </div>
        </div>
    </div>
)

class Campuses extends Component {

    componentDidMount() {
        // console.log("Mounting....")
        this.props.fetchCampuses()
    }

    render() {
        // console.log('******this.props', this.props)
        
        return (
            <div className="wrapper">
                <div className="header header-nofilter">
                    <div className="container">
                            <div className="row">
                                <div className="col-md-12 test-padding">
                                    <h1 className="title text-center" style={{color: "white"}}>Campuses</h1>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="main main-raised main-translucent">
                    <div className="text-center">
                        <NavLink to={'/campuses/addCampus'}>
                            <button className="btn btn-secondary">
                                Add New Campus
                            </button>
                        </NavLink>
                    </div>
                    <div className="section">
                        <div className="container">
                            <div className="row tim-row">
                                <NavLink to={'/campuses/new'}>
                                </NavLink>
                            </div>
                            <div className="row tim-row">
                                {this.props.campuses.map(campus => campusCard(campus, this.props.deleteCampus))}
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
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCampuses() {
            // console.log('Dispatching....')
            dispatch(fetchCampuses())
        },
        deleteCampus(campusId) {
            dispatch(deleteCampus(campusId))
        }
    };
};

const campusContainer = connect(mapStateToProps, mapDispatchToProps)(Campuses);
export default campusContainer

// export default () => (
//     <div className='container'> 
//         <div className='section text-center section-landing'>
//             <div className='row'>
//                 <div className='col-md-8 col-md-offset-2'>
//                     <h2 className='title'>CAMPUSES</h2>
//                     <h5 className='description'>** A blurb about the students ** </h5>
//                 </div>
//             </div>
//         </div>                      
//     </div>
// )


