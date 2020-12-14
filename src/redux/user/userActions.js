import actionTypes from "./userTypes";
import axios from 'axios'

//@Route    POST
//@Access   Public
//@Desc     Login user

const signInStart = () => ({
    type: actionTypes.SIGN_IN_START
})

const signInFailure = error => ({
    type: actionTypes.SIGN_IN_FAILURE,
    payload: error
})

const signInSuccess = token => ({
    type: actionTypes.SIGN_IN_SUCCESS,
    payload: token
})

export const signInStartAsync = (userCredentials, cb) => {
    return async dispatch => {
        dispatch(signInStart())
        await fetch('/api/login', {
            body: JSON.stringify(userCredentials),
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('access_token', json.access_token)
                dispatch(signInSuccess(json.access_token))
            })
            .then(_ => cb())
            .catch(err => dispatch(signInFailure('Некорректные данные')))
    }
}


//@Route    POST
//@Access   Public
//@Desc     Login user

const resetPasswordStart = () => ({
    type: actionTypes.PASSWORD_RESET_START
})

const resetPasswordFailure = error => ({
    type: actionTypes.PASSWORD_RESET_FAILURE,
    payload: error
})

const resetPasswordSuccess = msg => ({
    type: actionTypes.PASSWORD_RESET_SUCCESS,
    payload: msg
})

export const resetPasswordStartAsync = (userCredentials, cb) => {
    return async dispatch => {
        dispatch(resetPasswordStart())
        await axios('/api/login/reset', {
            data: userCredentials,
            method: "post"
        })
            .then(res => dispatch(resetPasswordSuccess(res.message)))
            .then(_ => cb())
            .catch(err => dispatch(resetPasswordFailure(err.message)))
    }
}
