import axios from 'axios'
import actionTypes from "./objectsTypes";
import {testData} from "../../components/all-objet-components/object-table/testData";

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

const objectAddSuccess = msg => ({
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
        setTimeout(() => {
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
        }).then(res => dispatch({
            type: actionTypes.LOAD_OPTIONS,
            payload: {
                options: res.options,
                option
            }
        }))
    }
}


//@Route    GET :/api/products?page=<>&page_size=<>&order_by=<имя поля для сортировки, по дефолту id>
//@Access   Private
//@Desc     Get objects

const objectsFetchStart = () => ({
    type: actionTypes.START_FETCH_OBJECTS
})

const objectsFetchFailure = error => ({
    type: actionTypes.FAILURE_FETCH_OBJECTS,
    payload: error
})

const objectsFetchSuccess = objects => ({
    type: actionTypes.SUCCESS_FETCH_OBJECTS,
    payload: objects
})

export const fetchObjectsStartAsync = (page = 1, page_size = 25, sort_name = 'id') => {
    return async dispatch => {
        dispatch(objectsFetchStart())
        await fetch(`http://104.248.230.108/api/products?page=${page}&page_size=${page_size}&order_by=${sort_name}`, {
            method: "GET",
            credentials: 'same-origin'
        })
            .then(res => {
                console.log(res)
                dispatch(objectsFetchSuccess(res))
            })
            .catch(err => dispatch(objectsFetchFailure(err.message)))

        // setTimeout(()=> {
        //     console.log(object)
        //     dispatch(objectAddSuccess(object))
        // }, 5000)
    }
}