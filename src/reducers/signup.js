import { ActionType } from "../actions/actionTypes";

export const signupState = {
    signupName: "",
    signupEmail: "qwdasdad",
    signupPassword: "",
    isLoading: false,
};
export const signup = (state = signupState, action) => {
    switch (action.type) {
        case ActionType.CHANGE_SIGNUP_NAME:
            return {
                ...state,
                signupName: action.nameValue,
            };
        case ActionType.CHANGE_SIGNUP_EMAIL:
            return {
                ...state,
                signupEmail: action.emailValue,
            };
        case ActionType.CHANGE_SIGNUP_PASSWORD:
            return {
                ...state,
                signupPassword: action.passwordValue,
            };
        case ActionType.SIGNUP_WITH_EMAIL_AND_PASSWORD:
            return {
                ...state,
                isLoading: true,
            };
        case ActionType.REGISTER_SUCCESS:
            return {
                ...state,
                name: "",
                signupEmail: "",
                signupPassword: "",
                isLoading: false,
            };
        case ActionType.REGISTER_FAIL:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
};
