import axios from 'axios';

// ACTION TYPES
const ADD_ONE_STUDENT = 'ADD_ONE_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

// ACTION CREATORS
export function removeStudent (studentId) {
  const action = { type: REMOVE_STUDENT, studentId };
  return action;
}

export function addStudent (student) {
  const action = { type: ADD_ONE_STUDENT, student };
  return action;
}

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

// THUNKS

export function fetchStudents () {
  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  };
}

export function postNewStudent (student, history) {
  return function thunk (dispatch) {
    return axios.post('/api/students', student)
    .then(res => res.data)
    .then(newStudent => {
      history.push(`/campuses/${newStudent.campusId}`);
    });
  };
}
export function putStudent (student, studentId ,history) {
  console.log('hitting putStudent', student, studentId)
  return function thunk (dispatch) {
    return axios.put('/api/students/' + studentId, student)
      .then(res => res.data)
      .then(newStudent => {
        console.log('newStudent', newStudent)
        history.push(`/campuses/${newStudent.campusId}`);
      });
  };
}


export function deleteStudent (studentId) {

  return function thunk (dispatch) {
    return axios.delete('/api/students/' + studentId )
      .then(res => res.data)
      .then(() => {
        dispatch(removeStudent(studentId));
      });
  };
}

// REDUCER
export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    // case ADD_ONE_STUDENT:
    //   return Object.assign({}, state, {students: [...state.students, action.student]});

    case REMOVE_STUDENT:
      return [...state].filter(student=>student.id != action.studentId);

    default:
      return state;
  }

}


