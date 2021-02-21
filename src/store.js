import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

import { signup } from "./reducers/signup";
import { signin } from "./reducers/signin";

const rootReducer = combineReducers({
    signup: signup,
    signin: signin,
});

function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;
