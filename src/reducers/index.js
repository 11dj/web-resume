import { combineReducers } from 'redux'

import action from './action'
import data from './data'


const rootReducer = combineReducers({
  action, data
})

export default rootReducer
