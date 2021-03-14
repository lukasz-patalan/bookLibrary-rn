import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { checkLoggedIn } from "../actions/signin";
import { dashboardStyles } from "../styles";

const ResolveAuthScreen = ({ navigation, localSignin }) => {
    useEffect(() => {
        localSignin(
            () => navigation.navigate("mainFlow"),
            () => navigation.navigate("Signin")
        );
    }, []);
    return (
        <View style={dashboardStyles.dashboardContainer}>
            <Text>Loading...</Text>
        </View>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        localSignin: (goToDashboard, goToLogin) =>
            dispatch(checkLoggedIn(goToDashboard, goToLogin)),
    };
}

export default connect(null, mapDispatchToProps)(ResolveAuthScreen);
