import React from "react";
import { View } from "react-native";
import { addBookStyles, dashboardStyles } from "../styles";

import { Header } from "../components/Header";
import { ScreenTitle } from "../components/ScreenTitle";
import { RateBook } from "../components/RateBook";
import { Button } from "../components/Button";
import { AddbookFirstSection } from "../components/AddbookFirstSection";
import { AddBookStatus } from "../components/AddBookStatus";

export const AddBookScreen = ({ navigation }) => {
    const toggleDrawer = () => navigation.toggleDrawer();

    return (
        <View style={dashboardStyles.dashboardContainer}>
            <ScreenTitle title="Add new book" />
            <Header toggleDrawer={toggleDrawer} />

            <View style={addBookStyles.contentWrapper}>
                <AddbookFirstSection />
                <RateBook />
                <AddBookStatus />
                <View style={{ marginTop: 40, alignSelf: "center" }}>
                    <Button title="Save book" />
                </View>
            </View>
        </View>
    );
};
