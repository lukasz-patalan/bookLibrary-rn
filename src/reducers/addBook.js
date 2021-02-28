import { ActionType } from "../actions/actionTypes";

export const signinState = {
    author: "",
    title: "",
    cover: "",
    category: null,
    rate: null,
    status: "",
    isSendingBook: false,
};
export const addBook = (state = signinState, action) => {
    switch (action.type) {
        case ActionType.CHANGE_AUTHOR:
            return {
                ...state,
                author: action.author,
            };
        case ActionType.CHANGE_TITLE:
            return {
                ...state,
                title: action.title,
            };
        case ActionType.CHANGE_COVER:
            return {
                ...state,
                cover: action.cover,
            };
        case ActionType.CHANGE_CATEGORY:
            return {
                ...state,
                category: action.category,
            };
        case ActionType.CHANGE_RATE:
            return {
                ...state,
                rate: action.rate,
            };
        case ActionType.CHANGE_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case ActionType.POST_NEW_BOOK:
            return {
                ...state,
                isSendingBook: true,
            };
        case ActionType.POST_NEW_BOOK_SUCCESS:
            return {
                ...state,
                isSendingBook: false,
                author: "",
                title: "",
                cover: "",
                category: null,
                rate: null,
                status: null,
            };
        case ActionType.POST_NEW_BOOK_FAIL:
            return {
                ...state,
                isSendingBook: false,
            };
        default:
            return state;
    }
};
