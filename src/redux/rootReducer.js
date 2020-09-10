import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import objectsReducer from "./objects/objectsReducer";
import locationReducer from "./location/locationReducer";

const rootReducer = combineReducers({
    user: userReducer,
    object: objectsReducer,
    location: locationReducer
})

export default rootReducer