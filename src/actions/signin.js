import { ActionType } from "./actionTypes";

export function changeEmail(emailValue) {
    return {
        type: ActionType.CHANGE_LOGIN_EMAIL,
        emailValue,
    };
}

export function changePassword(passwordValue) {
    return {
        type: ActionType.CHANGE_LOGIN_PASSWORD,
        passwordValue,
    };
}
