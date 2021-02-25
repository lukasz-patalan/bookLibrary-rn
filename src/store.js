import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

import { signup } from "./reducers/signup";
import { signin } from "./reducers/signin";
import { addBook } from "./reducers/addBook";

const rootReducer = combineReducers({
    signup: signup,
    signin: signin,
    addBook: addBook,
});

function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;
