import { Alert } from "react-native";
import { auth, fireBase } from "../firebase/firebaseConfig";
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

const setRememberMe = async (email, password) => {
    try {
        await AsyncStorage.setItem("email", email);
        await AsyncStorage.setItem("password", password);
    } catch (ex) {
        Alert.alert(ex.message);
    }
};
export const tryLocalSignin = (goToDashboard, goToLogin) => {
    return async (dispatch) => {
        const email = await AsyncStorage.getItem("email");
        const password = await AsyncStorage.getItem("password");

        if (email && password) {
            await auth.signInWithEmailAndPassword(email, password);
            goToDashboard();
        } else {
            goToLogin();
        }
    };
};
export const signin = (email, password, rememberMe, goToDashboard) => {
    return async (dispatch) => {
        dispatch({
            type: ActionType.SIGN_IN,
        });
        try {
            const response = await auth.signInWithEmailAndPassword(
                email,
                password
            );
            dispatch({ type: ActionType.SIGN_IN_SUCCESS });
            if (response.user) {
                if (rememberMe) {
                    setRememberMe(email, password);
                }
                goToDashboard();
            }
        } catch (ex) {
            dispatch({ type: ActionType.SIGN_IN_FAIL });
            Alert.alert(ex.message);
        }
    };
};
