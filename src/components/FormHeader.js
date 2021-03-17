import React from "react";
import { View, Text, Image } from "react-native";
import { logoHeaderStyles } from "../styles";

export const FormHeader = ({ title }) => {
    return (
        <View style={logoHeaderStyles.wrapper}>
            <View style={logoHeaderStyles.logo}>
                <Image
                    source={require("../assets/logo.png")}
                    style={logoHeaderStyles.logoImg}
                />
            </View>
            <Text style={logoHeaderStyles.logoText}>{title}</Text>
        </View>
    );
};
