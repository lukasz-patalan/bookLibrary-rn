import React from "react";
import { View, Text } from "react-native";
import { dashboardStyles } from "../styles";

import { Header } from "../components/Header";
import { InputWrapper } from "../components/InputWrapper";
import { colors, fontSize } from "../constans/theme";
import { ScreenTitle } from "../components/ScreenTitle";
export const BooksCollectionScreen = ({ navigation }) => {
    const toggleDrawer = () => navigation.toggleDrawer();

    return (
        <View style={dashboardStyles.dashboardContainer}>
            <ScreenTitle title="Books collection" />
            <Header toggleDrawer={toggleDrawer} />
            <InputWrapper />
            <Text>Books Collection</Text>
        </View>
    );
};
