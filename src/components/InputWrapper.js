import React from "react";
import { View, TextInput } from "react-native";
import { colors } from "../constans/theme";
import { Feather } from "@expo/vector-icons";
import { searchInputStyles } from "../styles";

export const InputWrapper = () => {
    return (
        <View style={searchInputStyles.container}>
            <Feather
                name="search"
                size={24}
                color={colors.textGray}
                style={searchInputStyles.icon}
            />
            <TextInput style={searchInputStyles.input} />
        </View>
    );
};
