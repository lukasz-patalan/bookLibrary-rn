import React from "react";
import { connect } from "react-redux";
import { View, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { SignupForm } from "../components/SignupForm";
import { colors } from "../constans/theme";
import {
    changeSignupName,
    changeSignupEmail,
    changeSignupPassword,
    signupWithEmailAndPassword,
} from "../actions/signup";

const SignupScreen = ({
    onChangeName,
    onChangeEmail,
    onChangePassword,
    name,
    email,
    password,
    onSignup,
    navigation,
    isLoading,
}) => {
    return (
        <View
            style={{
                backgroundColor: colors.background,
                flex: 1,
            }}
        >
            {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
            <SignupForm
                onChangeName={onChangeName}
                onChangeEmail={onChangeEmail}
                onChangePassword={onChangePassword}
                name={name}
                email={email}
                password={password}
                onSignup={onSignup}
                navigation={navigation}
                isLoading={isLoading}
            />
            {/* </TouchableWithoutFeedback> */}
        </View>
    );
};

function mapStateToProps(state) {
    return {
        name: state.signup.signupName,
        email: state.signup.signupEmail,
        password: state.signup.signupPassword,
        isLoading: state.signup.isLoading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeName: (nameValue) => dispatch(changeSignupName(nameValue)),
        onChangeEmail: (emailValue) => dispatch(changeSignupEmail(emailValue)),
        onChangePassword: (passwordValue) =>
            dispatch(changeSignupPassword(passwordValue)),
        onSignup: (email, password, navigateTo) =>
            dispatch(signupWithEmailAndPassword(email, password, navigateTo)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
