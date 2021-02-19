import React from "react";
import { View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { colors } from "../constans/theme";
import { menuStyles } from "../styles";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { Button } from "../components/Button";
export const Menu = ({ navigation }) => {
    const navigationIndex = navigation.state.index;
    const getColor = (index) => {
        if (navigationIndex === index) {
            return colors.buttonActive;
        } else {
            return colors.whiteText;
        }
    };
    return (
        <View style={menuStyles.container}>
            <Text style={menuStyles.title}>Menu</Text>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Dashboard")}
            >
                <View style={menuStyles.itemSet}>
                    <MaterialCommunityIcons
                        name="view-dashboard"
                        size={24}
                        color={getColor(0)}
                    />
                    <Text
                        style={[
                            menuStyles.item,
                            {
                                color: getColor(0),
                            },
                        ]}
                    >
                        Dashboard
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate("BooksCollection")}
            >
                <View style={menuStyles.itemSet}>
                    <MaterialCommunityIcons
                        name="bookshelf"
                        size={24}
                        color={getColor(1)}
                    />
                    <Text style={[menuStyles.item, { color: getColor(1) }]}>
                        Books collection
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate("AddBook")}
            >
                <View style={menuStyles.itemSet}>
                    <Entypo name="add-to-list" size={24} color={getColor(2)} />
                    <Text style={[menuStyles.item, { color: getColor(2) }]}>
                        Add new book
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={menuStyles.itemSet}>
                    <MaterialCommunityIcons
                        name="filter-outline"
                        size={24}
                        color={colors.whiteText}
                    />
                    <Text style={menuStyles.item}>Find book to read</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={menuStyles.itemSet}>
                    <MaterialCommunityIcons
                        name="account"
                        size={24}
                        color={colors.whiteText}
                    />
                    <Text style={menuStyles.item}>Account settings</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={{ paddingTop: 50 }}>
                <Button title="Sign out" />
            </View>
        </View>
    );
};