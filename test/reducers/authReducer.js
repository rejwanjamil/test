import {SET_USER} from '../actions/actionTypes'

const init = {
    isAuthenticated: false,
    user: {}
}

const authReducer = (state = init, { type, payload}) => {
    switch(type) {
        case SET_USER: {
            return {
                isAuthenticated:  Object.keys(payload.user).length !== 0,
                user: payload.user
            }
        }
        default: return state
    }
}

export default authReducer