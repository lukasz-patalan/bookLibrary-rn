import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { addBookStyles, SignupStyles } from "../styles";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome,
} from "@expo/vector-icons";
import { Button } from "./Button";
import { colors } from "../constans/theme";

export const SignupForm = () => {
    return (
        <View style={{ paddingTop: 140 }}>
            <Text style={SignupStyles.title}>Create account</Text>
            <View style={SignupStyles.inputContainer}>
                <MaterialCommunityIcons
                    name="account"
                    size={24}
                    color={colors.whiteText}
                    style={SignupStyles.icon}
                />
                <Text style={[addBookStyles.label, SignupStyles.inputLabel]}>
                    Name
                </Text>
                <TextInput style={SignupStyles.input} />
            </View>
            <View style={SignupStyles.inputContainer}>
                <MaterialIcons
                    name="email"
                    size={24}
                    color={colors.whiteText}
                    style={SignupStyles.icon}
                />
                <Text style={[addBookStyles.label, SignupStyles.inputLabel]}>
                    Email
                </Text>
                <TextInput style={SignupStyles.input} />
            </View>
            <View style={{ alignItems: "center", marginBottom: 20 }}>
                <FontAwesome
                    name="lock"
                    size={24}
                    color={colors.whiteText}
                    style={SignupStyles.icon}
                />
                <Text style={[addBookStyles.label, SignupStyles.inputLabel]}>
                    Password
                </Text>
                <TextInput style={SignupStyles.input} />
            </View>
            <View style={SignupStyles.buttonWrapper}>
                <Button title="Sign up" />
            </View>
            <Text>Already have an account? Sign in</Text>
        </View>
    );
};
