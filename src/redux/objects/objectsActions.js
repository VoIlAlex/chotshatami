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

const objectAddSuccess = msg => ({
    type: actionTypes.OBJECT_ADD_SUCCESS,
    payload: msg
})

export const objectAddStartAsync = (object, token, cb) => {
    return async dispatch => {
        dispatch(objectAddStart())
        await axios('https://104.248.230.108/api/product', {
            data: object,
            method: "post",
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => dispatch(objectAddSuccess(res)))
            .then(_ => cb())
            .catch(err => dispatch(objectAddFailure(err.message)))
    }
}


//@Route    GET
//@Access   Private
//@Desc     Get option

const successFetchOptions = (options, name) => ({
    type: actionTypes.LOAD_OPTIONS,
    payload: {
        options, name
    }
})

export const startFetchOptionsAsync = (token, option) => {
    return async dispatch => {
        // TODO
        // await axios(`https://104.248.230.108/api/options/${option}`, {
        //     method: 'get',
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // }).then(res => dispatch(successFetchOptions(res.data.options, option)))
        dispatch(successFetchOptions())
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

export const fetchObjectsStartAsync = (token, page = 1, page_size = 25, sort_name = 'id',order_direction='DESC') => {
    return async dispatch => {
        dispatch(objectsFetchStart())
        await fetch(`https://104.248.230.108/api/products?page=${page}&page_size=${page_size}&order_by=${sort_name}&order_direction=${order_direction}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json()).then(json => dispatch(objectsFetchSuccess(json)))
            .catch(err => dispatch(objectsFetchFailure(err.message)))
    }
}


//@Route    DELETE :/api/products
//@Access   Private
//@Desc     Delete object
const objectDeleteStart = () => ({
    type: actionTypes.START_DELETE_OBJECT
})

const objectDeleteFailure = error => ({
    type: actionTypes.FAILURE_DELETE_OBJECT,
    payload: error
})

const objectDeleteSuccess = objects => ({
    type: actionTypes.SUCCESS_DELETE_OBJECT,
    payload: objects
})

export const objectDeleteStartAsync = (token, id) => {
    return async dispatch => {
        dispatch(objectDeleteStart())
        await fetch(`https://104.248.230.108/api/product`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
            .then(res => res.json()).then(json => dispatch(objectDeleteSuccess(json)))
            .catch(err => dispatch(objectDeleteFailure(err.message)))
    }
}

//@Route    GET :/api/product?id=<id>
//@Access   Private
//@Desc     Get single object
const objectFetchStart = () => ({
    type: actionTypes.FETCH_ONE_OBJECT_START
})

const objectFetchFailure = error => ({
    type: actionTypes.FETCH_ONE_OBJECT_FAILURE,
    payload: error
})

const objectFetchSuccess = object => ({
    type: actionTypes.FETCH_ONE_OBJECT_SUCCESS,
    payload: object
})

export const fetchObjectStartAsync = (token, id, cb) => {
    return async dispatch => {
        dispatch(objectFetchStart())
        await fetch(`https://104.248.230.108/api/product?id=${id}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json()).then(json => dispatch(objectFetchSuccess({...json, id}))).then(_ =>cb())
            .catch(err => dispatch(objectFetchFailure(err.message)))
    }
}


//@Route    PATCH
//@Access   Private
//@Desc     Update object
const objectUpdateStart = () => ({
    type: actionTypes.OBJECT_UPDATE_START
})

const objectUpdateFailure = error => ({
    type: actionTypes.OBJECT_UPDATE_FAILURE,
    payload: error
})

const objectUpdateSuccess = msg => ({
    type: actionTypes.OBJECT_UPDATE_SUCCESS,
    payload: msg
})

export const objectUpdateStartAsync = (object, token, category) => {
    return async dispatch => {
        dispatch(objectUpdateStart())
        await axios(`https://104.248.230.108/api/patch/${category}`, {
            data: object,
            method: "patch",
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => dispatch(objectUpdateSuccess(res)))
            .catch(err => dispatch(objectUpdateFailure(err.message)))
    }
}