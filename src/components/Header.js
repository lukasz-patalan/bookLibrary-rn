import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../constans/theme";
import { headerStyles } from "../styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const Header = ({ toggleDrawer }) => {
    return (
        <View style={headerStyles.container}>
            <TouchableWithoutFeedback
                style={{ padding: 10 }}
                onPress={toggleDrawer}
            >
                <Feather name="menu" size={24} color={colors.icons} />
            </TouchableWithoutFeedback>
        </View>
    );
};
