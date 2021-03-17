import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";

import { SignupForm } from "../components/SignupForm";
import { colors } from "../constans/theme";
import {
    changeSignupName,
    changeSignupEmail,
    changeSignupPassword,
    signupWithEmailAndPassword,
} from "../actions/signup";
import { SignupStyles } from "../styles";

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
        <View style={SignupStyles.page}>
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
        onSignup: (email, password, name, navigateTo) =>
            dispatch(
                signupWithEmailAndPassword(email, password, name, navigateTo)
            ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
