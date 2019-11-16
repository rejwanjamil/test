import { combineReducers } from 'redux'
import authReducer from './authReducer'
import dataReducer from './dataReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    dataReducer,
})

export default rootReducer