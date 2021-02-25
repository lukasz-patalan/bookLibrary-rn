import { ActionType } from "../actions/actionTypes";

export const signinState = {
    author: "",
    title: "",
    cover: "",
    category: "",
    rate: null,
    status: "read",
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
        default:
            return state;
    }
};
