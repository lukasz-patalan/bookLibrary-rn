import { ActionType } from "../actions/actionTypes";

export const signinState = {
    email: "",
    password: "",
    isLoading: false,
    isSwitchRememberMeEnabled: false,
};
export const signin = (state = signinState, action) => {
    switch (action.type) {
        case ActionType.CHANGE_LOGIN_EMAIL:
            return {
                ...state,
                email: action.emailValue,
            };
        case ActionType.CHANGE_LOGIN_PASSWORD:
            return {
                ...state,
                password: action.passwordValue,
            };
        case ActionType.SIGN_IN:
            return {
                ...state,
                isLoading: true,
            };
        case ActionType.SIGN_IN_SUCCESS:
            return {
                ...state,
                email: "",
                password: "",
                isLoading: false,
            };
        case ActionType.SIGN_IN_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        case ActionType.TOGGLE_REMEMBER_ME_SWITCH:
            return {
                ...state,
                isSwitchRememberMeEnabled: !state.isSwitchRememberMeEnabled,
            };
        default:
            return state;
    }
};
