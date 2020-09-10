import actionTypes from "./objectsTypes";

const initialState = {
    addObjectLoading: false,
    addObjectError: null,
    addObjectSuccess: null,
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