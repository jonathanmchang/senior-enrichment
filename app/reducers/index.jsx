import { combineReducers } from 'redux'
import campuses from './campuses'
import students from './students'


// Don't think the initial state is needed in combineReducers as long as the individual reducers have intial states
const initialState = {
  // campuses: [],
  // students: []
}

const rootReducer = combineReducers({
  campuses,
  students,
})

export default rootReducer

export * from './campuses'
export * from './students'
