import React from "react";
import { View, Text } from "react-native";
import { auth } from "../firebase/firebaseConfig";
import { dashboardStyles } from "../styles";

import { Header } from "../components/Header";
import { ScreenTitle } from "../components/ScreenTitle";
export const DashboardScreen = ({ navigation }) => {
    const toggleDrawer = () => navigation.toggleDrawer();
    return (
        <View style={dashboardStyles.dashboardContainer}>
            <ScreenTitle title="Dashboard" />
            <Header toggleDrawer={toggleDrawer} />
            <Text>Hello</Text>
        </View>
    );
};
DashboardScreen.navigationOptions = {
    headerShown: false,
};
