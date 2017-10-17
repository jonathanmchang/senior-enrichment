import axios from 'axios';

// ACTION TYPES
const ADD_NEW_CAMPUS = 'ADD_NEW_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';

// ACTION CREATORS
export function removeCampus (campusId) {
  const action = { type: REMOVE_CAMPUS, campusId };
  return action;
}

export function addCampus (campus) {
  const action = { type: ADD_NEW_CAMPUS, campus };
  return action;
}
export function editCampus (campus) {
  const action = { type: EDIT_CAMPUS, campus };
  return action;
}

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

// THUNK CREATORS

export function fetchCampuses () {
  console.log('*******hittingline32')
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        console.log('redux campuses', campuses)
        const action = getCampuses(campuses);
        dispatch(action);
      });
  };
}

export function postNewCampus (campus, history) {

  return function thunk (dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        dispatch(addCampus(newCampus));
        history.push(`/campuses/`);
      });
  };
}
export function putCampus (campus, campusId, history) {

  return function thunk (dispatch) {
    return axios.put('/api/campuses/' + campusId, campus)
      .then(res => res.data)
      .then(newCampus => {
        dispatch(editCampus(newCampus.campus));
        // history.push(`/campuses/`);
      });
  };
}


export function deleteCampus (campusId) {

  return function thunk (dispatch) {
    return axios.delete('/api/campuses/' + campusId )
      .then(res => res.data)
      .then(() => {
        dispatch(removeCampus(campusId));
      });
  };
}

// REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    case ADD_NEW_CAMPUS:
      return [...state, action.campus];

    case REMOVE_CAMPUS:
      return [...state].filter(campus => campus.id != action.campusId);

    case EDIT_CAMPUS:
      const filtered = [...state].filter(campus => campus.id != action.campus.id);
      return [...filtered, action.campus]

    default:
      return state;
  }

}
// import axios from('axios');

// // Action Types

// const GET_CAMPUSES = 'GET_CAMPUSES';
// const ADD_NEW_CAMPUS = 'ADD_NEW_CAMPUS';
// const DELETE_CAMPUS = 'DELETE_CAMPUS';
// const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

// // Action Creators

// export function getCampuses(campuses) {
//     const action = {
//         type: GET_CAMPUSES,
//         campuses
//     };
//     return action;
// };

// export function addCampus(campus) {
//     const action = {
//         type: ADD_NEW_CAMPUS,
//         campus
//     };
//     return action;
// };

// export function deleteCampus(campusId) {
//     const action = {
//         type: DELETE_CAMPUS,
//         campusId 
//     };
//     return action;
// };

// export function updateCampus(campusId) {
//     const action = {
//         type: UPDATE_CAMPUS,
//         campusId
//     };
//     return action;
// };

// // Thunks

// export function fetchCampuses() {
//     return function thunk(dispatch) {
//         return axios.get('/api/campuses')
//             .then(res => res.data)
//             .then(campuses => {
//                 const action = getCampuses(campuses);
//                 dispatch(action);
//             });
//     };
// };

// export function postNewCampus(campus, history) {
//     return function thunk(dispatch) {
//         return axios.post('/api/campuses', campus)
//             .then(res => res.data)
//             .then(newCampus => {
//                 const action = addCampus(newCampus);
//                 dispatch(action);
//                 // history.push(`/campuses/`);
//             });
//     };
// };

// export function deleteCampus(campusId) {
//     return function thunk(dispatch) {
//         return axios.delete('/api/campuses/' + campusId)
//             .then(res => res.data)
//             .then(() => {
//                 const action = deleteCampus(campusId);
//                 dispatch(action);
//             });
//     };
// };

// export function putCampus(campus, campusId, history) {
//     return function thunk(dispatch) {
//         return axios.put('/api/campuses' + campusId, campus)
//             .then(res => res.data)
//             .then(updatedCampus => {
//                 const action = updateCampus(updatedCampus);
//                 dispatch(action);
//                 // history.push(`/campuses/`);
//             });
//     };
// };


// // Reducer

// export default function reducer (state = [], action) {
//     switch(action.type) {

//         case(GET_CAMPUSES):
//             return action.campuses;

//         case(ADD_NEW_CAMPUS):
//             return [...state, action.campus];

//         case(DELETE_CAMPUS):
//             return [...state].filter((campus) => {
//                 return campus.id !== action.campus.id
//             });
            
//         case(UPDATE_CAMPUS):
//             const filteredCampuses = [...state].filter((campus) => {
//                 return campus.id !== action.campus.id
//             });
//             return [...filteredCampuses, action.campus];
        
//         default:
//             return state;
//     };
// };



