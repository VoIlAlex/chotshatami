import actionTypes from "./objectsTypes";

const initialState = {
    addObjectLoading: false,
    addObjectError: null,
    addObjectSuccess: null,
    fetchObjectsLoading: true,
    fetchObjectsError: null,
    fetchObjectsSuccess: [],
    optionsLoading: true,
    options: {
        balcony: [
            'лоджия застеклена',
            '2 лоджии',
            'нет',
            'да',
            '2 балкона'
        ],
        floor_type: [
            'ламинат',
            'дерево',
            'линолеум'
        ],
        lavatory: [
            'совмещенный'
        ],
        repair_state: [
            'капитальный',
            'евро'
        ],
        walls_material: [
            'каменль',
            'бумага',
            "ножницы"
        ],
        plate: [
            'каменль',
            'бумага',
            "ножницы"
        ],
        roof_material: [
            'шифер',
            'камень'
        ],
        water: [
            'есть',
            'нет'
        ],
        sewerage: [
            'есть',
            'нет'
        ],
        gas: [
            'есть',
            'нет'
        ],
        heating: [
            'есть',
            'нет'
        ],
        electro: [
            'есть',
            'нет'
        ],
        direction_name: [
            'есть',
            'нет'
        ],
        subcategory: [
            'есть',
            'нет'
        ],
        additional: [
            'есть',
            'нет'
        ],
        trim_style: [
            'есть',
            'нет'
        ]
    },
    deleteObjectLoading: false,
    deleteObjectError: null,
    deleteObjectSuccess: [],
    fetchObjectLoading: false,
    fetchObjectError: null,
    fetchObjectSuccess: null,
    updateObjectLoading: false,
    updateObjectError: null,
    updateObjectSuccess: null,
}

const objectReduces = (state = initialState, action) => {
    switch (action.type) {
        //fetch all objects
        case actionTypes.START_FETCH_OBJECTS:
            return {
                ...state,
                fetchObjectsLoading: true
            }
        case actionTypes.FAILURE_FETCH_OBJECTS:
            return {
                ...state,
                fetchObjectsLoading: false,
                fetchObjectsError: action.payload
            }
        case actionTypes.SUCCESS_FETCH_OBJECTS:
            return {
                ...state,
                fetchObjectsSuccess: action.payload,
                fetchObjectsLoading: false
            }
        //add object
        case actionTypes.OBJECT_ADD_START:
            return {
                ...state,
                addObjectLoading: true
            }
        case actionTypes.OBJECT_ADD_FAILURE:
            return {
                ...state,
                addObjectLoading: false,
                addObjectError: action.payload
            }
        case actionTypes.OBJECT_ADD_SUCCESS:
            return {
                ...state,
                addObjectLoading: false,
                addObjectSuccess: action.payload
            }
        //load options
        case actionTypes.LOAD_OPTIONS:
            return {
                ...state,
                optionsLoading: false,
                options: {...state.options, [action.payload.name]: action.payload.options}
            }
        //delete object
        case actionTypes.START_DELETE_OBJECT:
            return {
                ...state,
                deleteObjectLoading: true
            }
        case actionTypes.FAILURE_DELETE_OBJECT:
            return {
                ...state,
                deleteObjectLoading: false,
                deleteObjectError: action.payload
            }
        case actionTypes.SUCCESS_DELETE_OBJECT:
            return {
                ...state,
                deleteObjectLoading: false,
                fetchObjectsSuccess: {...state.fetchObjectsSuccess, items:[...state.fetchObjectsSuccess.items.filter(el => el.id !== action.payload)
        ]
    }
            }
        //fetch single object
        case actionTypes.FETCH_ONE_OBJECT_START:
            return {
                ...state,
                fetchObjectLoading: true
            }
        case actionTypes.FETCH_ONE_OBJECT_FAILURE:
            return {
                ...state,
                fetchObjectLoading: false,
                fetchObjectError: action.payload
            }
        case actionTypes.FETCH_ONE_OBJECT_SUCCESS:
            return {
                ...state,
                fetchObjectSuccess: action.payload,
                fetchObjectLoading: false
            }
        //update object
        case  actionTypes.OBJECT_UPDATE_START:
            return {
                ...state,
                updateObjectLoading: true
            }
        case actionTypes.OBJECT_UPDATE_FAILURE:
            return {
                ...state,
                updateObjectLoading: false,
                updateObjectError: action.payload
            }
        case actionTypes.OBJECT_UPDATE_SUCCESS:
            return {
                ...state,
                updateObjectSuccess: action.payload,
                updateObjectLoading: false
            }
        case actionTypes.CLEAR_UPDATE_OBJECT:
            return {
                ...state,
                fetchObjectSuccess: null
            }
        default:
            return state
    }
}

export default objectReduces