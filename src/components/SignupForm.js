import React from "react";
import { View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SignupStyles } from "../styles";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome,
} from "@expo/vector-icons";
import { buttonStyle, colors } from "../constans/theme";
import { Button } from "react-native-elements";
import { FormHeader } from "./FormHeader";

export const SignupForm = ({
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
        onSignup(email, password, name, () => navigation.navigate("Signin"));
    };
    const navigateToSignin = () => {
        navigation.navigate("Signin");
    };
    return (
        <View>
            <FormHeader title="Create an account" />

            <View style={SignupStyles.formWrapper}>
                <View style={SignupStyles.inputContainer}>
                    <MaterialCommunityIcons
                        name="account"
                        size={20}
                        color={colors.whiteText}
                        style={SignupStyles.icon}
                    />

                    <TextInput
                        placeholder="Name"
                        value={name}
                        onChangeText={onChangeName}
                        style={SignupStyles.input}
                        placeholderTextColor={colors.textGray}
                    />
                </View>
                <View style={SignupStyles.inputContainer}>
                    <MaterialIcons
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
                <View style={SignupStyles.buttonWrapper}>
                    <Button
                        buttonStyle={buttonStyle}
                        onPress={handleSignup}
                        title="Sign up"
                        loading={isLoading}
                    />
                </View>
                <View style={SignupStyles.bottomInfo}>
                    <Text style={SignupStyles.alreadyText}>
                        Already have an account?
                        <TouchableOpacity onPress={navigateToSignin}>
                            <Text style={SignupStyles.signinText}>
                                {" "}
                                Sign in
                            </Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </View>
    );
};
