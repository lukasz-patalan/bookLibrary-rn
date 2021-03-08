import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { dashboardStyles } from "../styles";

import { Header } from "../components/Header";
import { ScreenTitle } from "../components/ScreenTitle";
import { DashboardUI } from "../components/DashboardUI";
import { colors } from "../constans/theme";
export const DashboardScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.closeDrawer();
    }, []);
    const toggleDrawer = () => navigation.toggleDrawer();
    return (
        <View
            style={[
                dashboardStyles.dashboardContainer,
                { backgroundColor: colors.darkViolet },
            ]}
        >
            <ScreenTitle title="Dashboard" />
            <Header toggleDrawer={toggleDrawer} />
            <DashboardUI />
        </View>
    );
};
DashboardScreen.navigationOptions = {
    headerShown: false,
};
