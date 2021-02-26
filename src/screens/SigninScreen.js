import React from "react";
import { connect } from "react-redux";
import { View, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { colors } from "../constans/theme";
import {
    changeLoginEmail,
    changeLoginPassword,
    signin,
    toggleRemeberMeSwitch,
} from "../actions/signin";
import { SigninForm } from "../components/SigninForm";

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
        <View
            style={{
                backgroundColor: colors.darkViolet,
                flex: 1,
            }}
        >
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
        onSignin: (email, password, rememberMe, goToDashboard) =>
            dispatch(signin(email, password, rememberMe, goToDashboard)),
        onToggleRemeberMeSwitch: () => dispatch(toggleRemeberMeSwitch()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen);
