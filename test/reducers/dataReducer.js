import {LOAD_DATA} from '../actions/actionTypes'

const dataReducer = (state=[], { type, payload }) => {
    switch(type) {
        case LOAD_DATA:
            return payload
        default:
            return state
    }
}

export default dataReducer
