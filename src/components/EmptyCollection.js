import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constans/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { emptyCollectionStyles } from "../styles";

export const EmptyCollection = ({ navigation, isFetchingBooks }) => {
    const goToAddBook = () => {
        navigation.navigate("add book");
    };
    return (
        <View style={emptyCollectionStyles.wrapper}>
            {isFetchingBooks ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    <Entypo
                        name="open-book"
                        size={100}
                        color={colors.background}
                    />
                    <Text style={emptyCollectionStyles.noBookText}>
                        No book in your collection yet
                    </Text>
                    <TouchableOpacity
                        onPress={goToAddBook}
                        style={emptyCollectionStyles.goAddWrapper}
                    >
                        <Text style={emptyCollectionStyles.goAddText}>
                            Go to add one
                        </Text>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={20}
                            color={colors.buttonActive}
                        />
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};
