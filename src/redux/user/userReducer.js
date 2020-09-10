import actionTypes from "./userTypes";

const initialState = {
    //login
    loginLoading: false,
    loginError: null,
    loginSuccess: null,
    //reset password
    resetPasswordLoading: false,
    resetPasswordError: null,
    resetPasswordSuccess: null
}

const userReducer = ( state = initialState, action) => {
    switch (action.type){
        case actionTypes.SIGN_IN_START:
            return {
                ...state,
                loginLoading: true
            }
        case actionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                loginLoading: false,
                loginSuccess: action.payload
            }
        case actionTypes.SIGN_IN_FAILURE:
            return {
                ...state,
                loginLoading: false,
                loginError: action.payload
            }
        case actionTypes.PASSWORD_RESET_START:
            return {
                ...state,
                resetPasswordLoading: true
            }
        case actionTypes.PASSWORD_RESET_SUCCESS:
            return {
                ...state,
                resetPasswordLoading: false,
                resetPasswordSuccess: action.payload
            }
        case actionTypes.PASSWORD_RESET_FAILURE:
            return {
                ...state,
                resetPasswordLoading: false,
                resetPasswordError: action.payload
            }
        default: return state
    }
}

export default userReducer