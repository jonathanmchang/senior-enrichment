import { combineReducers } from 'redux'
import campuses from './campuses'
import students from './students'

const initialState = {
  // campuses: [],
  // students: []
}

const rootReducer = combineReducers({
  campuses,
  students
})

export default rootReducer

export * from './campuses'
export * from './students'

