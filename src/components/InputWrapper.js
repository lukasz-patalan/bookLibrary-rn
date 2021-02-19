import React from "react";
import { View, TextInput } from "react-native";
import { colors } from "../constans/theme";
import { Input } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

export const InputWrapper = () => {
    return (
        <View
            style={{
                backgroundColor: colors.menuBackground,
                height: 180,
                justifyContent: "center",
                paddingTop: 100,
                alignItems: "center",
            }}
        >
            <Feather
                name="search"
                size={24}
                color={colors.menuBackground}
                style={{
                    position: "absolute",
                    bottom: 27,
                    left: 40,
                    zIndex: 1,
                }}
            />
            <TextInput
                style={{
                    height: 40,
                    width: 360,
                    borderRadius: 8,

                    backgroundColor: colors.background,
                    color: colors.whiteText,
                    fontSize: 17,
                    paddingLeft: 45,
                }}
            />
        </View>
    );
};
