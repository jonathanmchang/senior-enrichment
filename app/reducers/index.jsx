import { combineReducers } from 'redux'
import campuses from './campuses'
import students from './students'

const initialState = {}

const rootReducer = combineReducers({
  campuses,
  students
})

export default rootReducer

export * from './campuses'
export * from './students'

