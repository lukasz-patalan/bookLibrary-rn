import { Alert } from "react-native";
import { auth } from "../firebase/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ActionType } from "./actionTypes";

export function changeLoginEmail(emailValue) {
    return {
        type: ActionType.CHANGE_LOGIN_EMAIL,
        emailValue,
    };
}

export function changeLoginPassword(passwordValue) {
    return {
        type: ActionType.CHANGE_LOGIN_PASSWORD,
        passwordValue,
    };
}

export function toggleRemeberMeSwitch() {
    return {
        type: ActionType.TOGGLE_REMEMBER_ME_SWITCH,
    };
}

export const checkLoggedIn = (goToDashboard, goToLogin) => {
    return async (dispatch) => {
        const isLoggedIn = await AsyncStorage.getItem("logged");

        if (isLoggedIn) {
            goToDashboard();
        } else {
            goToLogin();
        }
    };
};
export const signin = (email, password, goToDashboard) => {
    return async (dispatch) => {
        dispatch({
            type: ActionType.SIGN_IN,
        });
        try {
            const response = await auth.signInWithEmailAndPassword(
                email,
                password
            );
            await AsyncStorage.setItem("logged", "isLogged");
            dispatch({ type: ActionType.SIGN_IN_SUCCESS });
            if (response.user) {
                goToDashboard();
            }
        } catch (ex) {
            dispatch({ type: ActionType.SIGN_IN_FAIL });
            Alert.alert(ex.message);
        }
    };
};
