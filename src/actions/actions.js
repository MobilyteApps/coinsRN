import { APPLY_ALERT, LOGIN_SUCCESS,SET_EMAIL,SET_PASSWORD, SET_SIGNUP_DATA,COUNT } from './types.js'

function applyAlert() {
    return {
        type: APPLY_ALERT
    }
}

function LoginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

function setEmail(data) {
    return {
        type: SET_EMAIL,
        payload: data
    }
}

function setPassword(data) {
    return {
        type: SET_PASSWORD,
        payload: data
    }
}

function setSignUpData(data) {
    return {
        type: SET_SIGNUP_DATA,
        payload: data
    }
}

function setCount(data) {
    return {
        type: COUNT,
        payload: data
    }
}

const actionCreators = {
    applyAlert,
    LoginSuccess,
    setEmail,
    setPassword,
    setSignUpData,
    setCount
}

export { actionCreators };

