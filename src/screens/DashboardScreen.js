import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { dashboardStyles } from "../styles";

import { Header } from "../components/Header";
import { ScreenTitle } from "../components/ScreenTitle";
export const DashboardScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.closeDrawer();
    }, []);
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
