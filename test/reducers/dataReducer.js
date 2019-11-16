import {LOAD_DATA} from '../actions/actionTypes'

const dataReducer = (state=null, { type, payload }) => {
    switch(type) {
        case LOAD_DATA: {
            return payload
        }
        default: return state
    }
}

export default dataReducer