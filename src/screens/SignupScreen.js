import React from "react";
import { View, Text, TextInput } from "react-native";
import { ScreenTitle } from "../components/ScreenTitle";
import { SignupForm } from "../components/SignupForm";
import { colors } from "../constans/theme";

export const SignupScreen = () => {
    return (
        <View
            style={{
                backgroundColor: colors.background,
                flex: 1,
            }}
        >
            <SignupForm />
        </View>
    );
};
