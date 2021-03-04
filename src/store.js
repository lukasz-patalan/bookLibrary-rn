import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import reactotron from "../ReactotronConfig";

import { signup } from "./reducers/signup";
import { signin } from "./reducers/signin";
import { addBook } from "./reducers/addBook";
import { booksCollection } from "./reducers/booksCollection";

const rootReducer = combineReducers({
    signup: signup,
    signin: signin,
    addBook: addBook,
    books: booksCollection,
});

function configureStore() {
    return createStore(
        rootReducer,
        compose(applyMiddleware(thunk), reactotron.createEnhancer())
    );
}

export default configureStore;
