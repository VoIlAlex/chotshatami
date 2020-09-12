import actionTypes from "./objectsTypes";

const initialState = {
    addObjectLoading: false,
    addObjectError: null,
    addObjectSuccess: null,
    fetchObjectsLoading: false,
    fetchObjectsError: null,
    fetchObjectsSuccess:[],
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
        sewerage:[
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
    }
}

const objectReduces = (state = initialState, action) => {
    switch (action.type) {
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
        case actionTypes.LOAD_OPTIONS:
            return {
                ...state,
                options: {...state.options, [action.payload.name]: action.payload.options}
            }
        default:
            return state
    }
}

export default objectReduces