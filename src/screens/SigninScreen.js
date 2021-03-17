import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";

import { colors } from "../constans/theme";
import {
    changeLoginEmail,
    changeLoginPassword,
    signin,
    toggleRemeberMeSwitch,
} from "../actions/signin";
import { SigninForm } from "../components/SigninForm";
import { SignupStyles } from "../styles";

const SigninScreen = ({
    onChangeEmail,
    onChangePassword,
    email,
    password,
    onSignin,
    navigation,
    isLoading,
    isSwitchRememberMeEnabled,
    onToggleRemeberMeSwitch,
}) => {
    return (
        <View style={SignupStyles.page}>
            <SigninForm
                onChangeEmail={onChangeEmail}
                onChangePassword={onChangePassword}
                email={email}
                password={password}
                onSignin={onSignin}
                navigation={navigation}
                isLoading={isLoading}
                isSwitchRememberMeEnabled={isSwitchRememberMeEnabled}
                onToggleRemeberMeSwitch={onToggleRemeberMeSwitch}
            />
        </View>
    );
};

function mapStateToProps(state) {
    return {
        email: state.signin.email,
        password: state.signin.password,
        isLoading: state.signin.isLoading,
        isSwitchRememberMeEnabled: state.signin.isSwitchRememberMeEnabled,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeEmail: (emailValue) => dispatch(changeLoginEmail(emailValue)),
        onChangePassword: (passwordValue) =>
            dispatch(changeLoginPassword(passwordValue)),
        onSignin: (email, password, goToDashboard) =>
            dispatch(signin(email, password, goToDashboard)),
        onToggleRemeberMeSwitch: () => dispatch(toggleRemeberMeSwitch()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen);
