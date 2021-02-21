import React from "react";
import { View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { addBookStyles, signinStyles, SignupStyles } from "../styles";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome,
} from "@expo/vector-icons";
import { buttonStyle, colors } from "../constans/theme";
import { Button } from "react-native-elements";

export const SigninForm = ({
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
    const handleSignup = () => {
        onSignup(email, password, () => navigation.navigate("AddBook"));
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
                    size={100}
                    color={colors.background}
                    style={{ alignSelf: "center", marginBottom: 10 }}
                />
                <View style={SignupStyles.inputContainer}></View>
                <View style={SignupStyles.inputContainer}>
                    <MaterialIcons
                        name="email"
                        size={24}
                        color={colors.whiteText}
                        style={SignupStyles.icon}
                    />

                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={onChangeEmail}
                        style={SignupStyles.input}
                        placeholderTextColor={colors.buttonActive}
                        autoCapitalize="none"
                    />
                </View>
                <View style={{ alignItems: "center", marginBottom: 20 }}>
                    <FontAwesome
                        name="lock"
                        size={25}
                        color={colors.whiteText}
                        style={[SignupStyles.icon, { left: 57 }]}
                    />

                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={onChangePassword}
                        style={SignupStyles.input}
                        placeholderTextColor={colors.buttonActive}
                        autoCapitalize="none"
                        secureTextEntry={true}
                    />
                </View>
                <View style={signinStyles.buttonWrapper}>
                    <Button
                        buttonStyle={buttonStyle}
                        onPress={handleSignup}
                        title="Sign in"
                        loading={isLoading}
                    />
                </View>
                <View style={SignupStyles.bottomInfo}>
                    <Text style={SignupStyles.alreadyText}>
                        Don't have an account?{" "}
                        <TouchableOpacity onPress={navigateToSignup}>
                            <Text style={SignupStyles.signinText}>Sign up</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </View>
    );
};
