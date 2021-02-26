import React from "react";
import { View, Text, Image } from "react-native";
import { colors, fontSize } from "../constans/theme";

export const Book = ({ author, title, cover, category, rate, status }) => {
    return (
        <View
            style={{
                backgroundColor: colors.darkViolet,
                marginBottom: 15,
                marginHorizontal: 10,
                borderRadius: 20,
            }}
        >
            <Image
                source={{ uri: cover }}
                style={{
                    width: "45%",
                    height: 250,
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    zIndex: 1,
                }}
            />
        </View>
    );
};
