import React from "react";
import { Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { fontSize } from "../constans/theme";

export const Button = ({ onPress, title }) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
            style={{
                width: 190,
                height: 50,
                backgroundColor: "#eb9322",
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text style={{ fontSize: fontSize.Xlarge, color: "white" }}>
                {title}
            </Text>
        </TouchableWithoutFeedback>
    );
};
