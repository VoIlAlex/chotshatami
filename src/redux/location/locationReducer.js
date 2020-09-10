import actionTypes from "./locationTypes";

const initialState = {
    countries: [],
    regions: []
}

const locationReducer = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.COUNTRIES_FETCH:
            return {
                ...state,
                countries: action.payload
            }
        case actionTypes.REGIONS_FETCH:
            return {
                ...state,
                regions: action.payload
            }
        default: return state
    }
}

export default locationReducer