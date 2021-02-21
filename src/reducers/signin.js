import { ActionType } from "../actions/actionTypes";

export const signinState = {
    email: "",
    password: "",
};
export const signin = (state = signinState, action) => {
    switch (action.type) {
        case ActionType.CHANGE_LOGIN_EMAIL:
            return {
                ...state,
                email: action.nameValue,
            };
        case ActionType.CHANGE_LOGIN_PASSWORD:
            return {
                ...state,
                password: action.emailValue,
            };

        default:
            return state;
    }
};
