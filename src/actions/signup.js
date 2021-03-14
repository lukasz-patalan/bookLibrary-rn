import { ActionType } from "./actionTypes";
import { auth } from "../firebase/firebaseConfig";
import { Alert } from "react-native";

export function changeSignupName(nameValue) {
    return {
        type: ActionType.CHANGE_SIGNUP_NAME,
        nameValue,
    };
}

export function changeSignupEmail(emailValue) {
    return {
        type: ActionType.CHANGE_SIGNUP_EMAIL,
        emailValue,
    };
}

export function changeSignupPassword(passwordValue) {
    return {
        type: ActionType.CHANGE_SIGNUP_PASSWORD,
        passwordValue,
    };
}

export const signupWithEmailAndPassword = (
    email,
    password,
    userName,
    navigateTo
) => {
    return async (dispatch) => {
        dispatch({
            type: ActionType.SIGNUP_WITH_EMAIL_AND_PASSWORD,
        });
        try {
            const response = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            response.user.updateProfile({
                displayName: userName,
            });
            dispatch({ type: ActionType.REGISTER_SUCCESS });
            if (response.user) {
                navigateTo();
            }
        } catch (e) {
            dispatch({ type: ActionType.REGISTER_FAIL });
            Alert.alert(e.message);
        }
    };
};
