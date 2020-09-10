import axios from 'axios'
import actionTypes from "./objectsTypes";

//@Route    POST
//@Access   Private
//@Desc     Add object
const objectAddStart = () => ({
    type: actionTypes.OBJECT_ADD_START
})

const objectAddFailure = error => ({
    type: actionTypes.OBJECT_ADD_FAILURE,
    payload: error
})

const objectAddSuccess= msg => ({
    type: actionTypes.OBJECT_ADD_SUCCESS,
    payload: msg
})

export const objectAddStartAsync = (object, cb) => {
    return async dispatch => {
        dispatch(objectAddStart())
        // await axios('http://178.159.45.188/api/login/', {
        //     data: userCredentials,
        //     method: "post",
        //     withCredentials: true
        // })
        //     .then(res => dispatch(signInSuccess(res.message)))
        //     .then(_ => cb())
        //     .catch(err => dispatch(signInFailure(err.message)))
        setTimeout(()=> {
            console.log(object)
            dispatch(objectAddSuccess(object))
        }, 5000)
    }
}


//@Route    GET
//@Access   Private
//@Desc     Get option
export const startFetchOptions = option => {
    return async dispatch => {
        await axios(`/api/options/${option}`, {
            method: 'get',
            withCredentials: true
        }).then( res => dispatch({
            type: actionTypes.LOAD_OPTIONS,
            payload: {
                options:res.options,
                option
            }
        }))
    }
}