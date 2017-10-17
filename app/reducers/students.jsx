import axios from ('axios');

// Action Types

const GET_STUDENTS = 'GET_STUDENTS';
const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';


// ACTION CREATORS

export function getStudents(students) {
    const action = {
        type: GET_STUDENTS,
        students 
    };
    return action;
};

export function addStudent(student) {
    const action = {
        type: ADD_NEW_STUDENT,
        student
    };
    return action;
};

export function deleteStudent(studentId) {
    const action = {
        type: DELETE_STUDENT,
        studentId 
    };
    return action;
};

export function updateStudetn(sudentId) {
    const action = {
        type: UPDATE_STUDENT,
        studentId 
    };
    return action;
};

// Thunks

export function fetchStudents() {
    return function thunk(dispatch) {
        return axios.get('/api/students')
            .then(res => res.data)
            .then(students => {
                const action = getStudents(students);
                dispatch(action);
            });
    };
};

export function postNewStudent(student, history) {
    return function thunk(dispatch) {
        return axios.post('/api/students')
            .then(res => res.data)
            .then(newStudent => {
                history.push(`/campuses/${newStudent.student.campusId}`);
            });
    };
};

export function deleteStudent(studentId) {
    return function thunk(dispatch) {
        return axios.delete('./api/students/' + studentId)
            .then(res => res.data)
            .then(() => {
                const action = deleteStudent(studentId)
                dispatch(action);
            });
    };
};

export function putStudent(student, history) {
    return function thunk(dispatch) {
        return axios.put('/api/students' + student.id, student)
            .then(res => res.data)
            .then(updatedStudent => {
                const action = updateStudent(updatedStudent);
                dispatch(action);
            })
    }
}

// Reducer

export default function reducer (state = {
    campus: {name: ''},
    students: []
},action) {
    switch(action.type) {

        case GET_STUDENTS:
            return action.students;
        
        case ADD_ONE_STUDENT:
            return Object.assign({}, state, {students: [...state.students, action.student]});

        case REMOVE_STUDENT:
            return Object.assign({}, state, {students: [...state.students].filter(student => student.id != action.studentId)});

        default:
            return state
    }
}

