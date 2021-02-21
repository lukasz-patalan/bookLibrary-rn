import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { colors } from "../constans/theme";
import { addBookStyles } from "../styles";

export const RateBook = () => {
    return (
        <View
            style={{
                backgroundColor: colors.menuBackground,
                height: 130,
                width: 360,
                alignSelf: "center",
                borderRadius: 8,
            }}
        >
            <Text
                style={[
                    addBookStyles.label,
                    { alignSelf: "center", marginTop: 10 },
                ]}
            >
                Rate the book
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    paddingHorizontal: 55,
                    marginTop: 10,
                }}
            >
                <AntDesign name="staro" size={30} color={colors.whiteText} />
                <AntDesign name="staro" size={30} color={colors.whiteText} />
                <AntDesign name="staro" size={30} color={colors.whiteText} />
                <AntDesign name="staro" size={30} color={colors.whiteText} />
                <AntDesign name="staro" size={30} color={colors.whiteText} />
            </View>
            <Text
                style={[
                    addBookStyles.label,
                    { alignSelf: "center", marginTop: 23 },
                ]}
            >
                very good!
            </Text>
        </View>
    );
};
