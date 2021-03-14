import React from "react";
import { View, Text } from "react-native";
import {
    TextInput,
    TouchableOpacity,
    Switch,
} from "react-native-gesture-handler";

import { signinStyles, SignupStyles } from "../styles";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome,
} from "@expo/vector-icons";
import { buttonStyle, colors, fontSize } from "../constans/theme";
import { Button } from "react-native-elements";

export const SigninForm = ({
    onChangeEmail,
    onChangePassword,
    email,
    password,
    onSignin,
    navigation,
    isLoading,
}) => {
    const handleSignin = () => {
        onSignin(email, password, () => navigation.navigate("mainFlow"));
    };
    const navigateToSignup = () => {
        navigation.navigate("Signup");
    };

    return (
        <View>
            <Text style={SignupStyles.title}>Welcome</Text>

            <View style={signinStyles.formWrapper}>
                <MaterialIcons
                    name="account-circle"
                    size={70}
                    color={colors.darkViolet}
                    style={{ alignSelf: "center", marginBottom: 10 }}
                />
                <View style={SignupStyles.inputContainer}></View>
                <View style={SignupStyles.inputContainer}>
                    <MaterialCommunityIcons
                        name="email"
                        size={20}
                        color={colors.whiteText}
                        style={SignupStyles.icon}
                    />

                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={onChangeEmail}
                        style={SignupStyles.input}
                        placeholderTextColor={colors.textGray}
                        autoCapitalize="none"
                    />
                </View>
                <View style={{ alignItems: "center", marginBottom: 20 }}>
                    <FontAwesome
                        name="lock"
                        size={20}
                        color={colors.whiteText}
                        style={[SignupStyles.icon, { left: 57 }]}
                    />

                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={onChangePassword}
                        style={SignupStyles.input}
                        placeholderTextColor={colors.textGray}
                        autoCapitalize="none"
                        secureTextEntry={true}
                    />
                </View>

                <View style={signinStyles.buttonWrapper}>
                    <Button
                        buttonStyle={buttonStyle}
                        onPress={handleSignin}
                        title="Sign in"
                        loading={isLoading}
                    />
                </View>
                <View style={SignupStyles.bottomInfo}>
                    <Text style={SignupStyles.alreadyText}>
                        Don't have an account?
                        <TouchableOpacity onPress={navigateToSignup}>
                            <Text style={SignupStyles.signinText}>Sign up</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </View>
    );
};
