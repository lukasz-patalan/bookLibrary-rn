import React from "react";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors, fontSize } from "../constans/theme";
import { emptyCollectionStyles, noResultsStyles } from "../styles";

export const NothingFound = () => {
    return (
        <View style={emptyCollectionStyles.wrapper}>
            <Entypo name="open-book" size={100} color={colors.background} />
            <Text style={noResultsStyles.text}>Nothing found :(</Text>
        </View>
    );
};
