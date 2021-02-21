import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { colors } from "../constans/theme";
import {
    changeName,
    changeEmail,
    changePassword,
    signupWithEmailAndPassword,
} from "../actions/signup";
import { SigninForm } from "../components/SigninForm";

const SigninScreen = ({
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
            <SigninForm
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
        name: state.name,
        email: state.email,
        password: state.password,
        isLoading: state.isLoading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeName: (nameValue) => dispatch(changeName(nameValue)),
        onChangeEmail: (emailValue) => dispatch(changeEmail(emailValue)),
        onChangePassword: (passwordValue) =>
            dispatch(changePassword(passwordValue)),
        onSignup: (email, password, navigateTo) =>
            dispatch(signupWithEmailAndPassword(email, password, navigateTo)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen);
