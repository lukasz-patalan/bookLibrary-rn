import React from "react";
import { View, Text } from "react-native";
import { dashboardStyles } from "../styles";

import { Header } from "../components/Header";
import { ScreenTitle } from "../components/ScreenTitle";
export const AddBookScreen = ({ navigation }) => {
    const toggleDrawer = () => navigation.toggleDrawer();

    return (
        <View style={dashboardStyles.dashboardContainer}>
            <ScreenTitle title="Add new book" />
            <Header toggleDrawer={toggleDrawer} />
            <Text>Add book</Text>
        </View>
    );
};
