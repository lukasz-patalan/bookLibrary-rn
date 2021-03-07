import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../constans/theme";
import { noResultsStyles } from "../styles";

export const BackToBooksCollection = ({
    isSearching,
    searchValue,
    handleBackToCollection,
}) => {
    return (
        <View>
            {isSearching && searchValue ? (
                <TouchableOpacity
                    style={noResultsStyles.backWrapper}
                    onPress={handleBackToCollection}
                >
                    <Ionicons
                        name="caret-back-outline"
                        size={15}
                        color={colors.buttonActive}
                    />
                    <Text style={{ color: colors.buttonActive }}>
                        Back to collection
                    </Text>
                </TouchableOpacity>
            ) : null}
        </View>
    );
};
