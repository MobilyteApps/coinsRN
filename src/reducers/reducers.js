import { actionCreators } from '../actions/actions.js'
import { APPLY_ALERT, COUNT, LOGIN_SUCCESS, SET_EMAIL, SET_PASSWORD, SET_SIGNUP_DATA} from '../actions/types.js'


const initialState = {
    alertText: 'Hello',
    response: '',
    email: '',
    password: '',
    userData:'',
    count:''
}

function applyAlert(state) {
    return {
        ...state,
        alertText: 'apply',
    }
}
function LoginSuccess(state, response) {
    return {
        ...state,
        response: response,
    }
}
function setEmail(state, response) {
    return {
        ...state,
        email: response
    }
}

function setPassword(state, response) {
    return {
        ...state,
        password: response
    }
}

function setSignUpData(state, response) {
    return {
        ...state,
        userData: response
    }
}

function setCount(state, response) {
    return {
        ...state,
        count: response
    }
}
function timerReducer(state = initialState, action) {
    switch (action.type) {
        case APPLY_ALERT:
            return applyAlert(state)
        case LOGIN_SUCCESS:
            return LoginSuccess(state, action.payload)
        case SET_EMAIL:
            return setEmail(state,action.payload)
        case SET_PASSWORD:
            return setPassword(state,action.payload)
        case SET_SIGNUP_DATA:
            return setSignUpData(state,action.payload)
        case COUNT:
            return setCount(state,action.payload)
        default:
            return state;
    }
}

export default timerReducer;