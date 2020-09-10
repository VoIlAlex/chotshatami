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

const signInSuccess = msg => ({
    type: actionTypes.SIGN_IN_SUCCESS,
    payload: msg
})

export const signInStartAsync = (userCredentials, cb) => {
    return async dispatch => {
        dispatch(signInStart())
        // await axios('http://178.159.45.188/api/login/', {
        //     data: userCredentials,
        //     method: "post",
        //     withCredentials: true
        // })
        //     .then(res => dispatch(signInSuccess(res.message)))
        //     .then(_ => cb())
        //     .catch(err => dispatch(signInFailure(err.message)))
        setTimeout(()=> {
            dispatch(signInSuccess('Неверный логин или пароль'))
        }, 5000)
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
        // await axios('http://178.159.45.188/api/login/', {
        //     data: userCredentials,
        //     method: "post",
        //     withCredentials: true
        // })
        //     .then(res => dispatch(resetPasswordSuccess(res.message)))
        //     .then(_ => cb())
        //     .catch(err => dispatch(resetPasswordFailure(err.message)))
        setTimeout(()=> {
            dispatch(resetPasswordSuccess('Некорректные данные'))
        }, 5000)
    }
}
