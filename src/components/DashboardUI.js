import React from "react";
import { View, Text } from "react-native";
import { colors } from "../constans/theme";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { dashboardUIStyles } from "../styles";

export const DashboardUI = () => {
    return (
        <View style={dashboardUIStyles.interface}>
            <View
                style={[
                    { backgroundColor: colors.markedGreen },
                    dashboardUIStyles.button,
                ]}
            >
                <Entypo name="quote" size={30} color={colors.whiteText} />
            </View>
            <View
                style={[
                    { backgroundColor: colors.lightBlue },
                    dashboardUIStyles.button,
                ]}
            >
                <FontAwesome name="book" size={30} color={colors.whiteText} />
            </View>
            <View
                style={[
                    { backgroundColor: colors.darkRed },
                    dashboardUIStyles.button,
                ]}
            >
                <FontAwesome
                    name="heart-o"
                    size={30}
                    color={colors.whiteText}
                />
            </View>
            <View
                style={[
                    { backgroundColor: colors.buttonActive },
                    dashboardUIStyles.button,
                ]}
            >
                <Entypo name="time-slot" size={30} color={colors.whiteText} />
            </View>
        </View>
    );
};
