import React from "react";
import { Text } from "react-native";
import { colors, fontSize } from "../constans/theme";

export const ScreenTitle = ({ title }) => {
    return (
        <Text
            style={{
                position: "absolute",
                top: 63,
                paddingLeft: 30,
                color: colors.whiteText,
                zIndex: 1,
                fontSize: fontSize.sectionTitle,
            }}
        >
            {title}
        </Text>
    );
};
