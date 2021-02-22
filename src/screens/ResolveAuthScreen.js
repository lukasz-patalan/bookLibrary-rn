import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { tryLocalSignin } from "../actions/signin";

const ResolveAuthScreen = ({ navigation, localSignin }) => {
    useEffect(() => {
        localSignin(
            () => navigation.navigate("mainFlow"),
            () => navigation.navigate("loginFlow")
        );
    }, []);
    return (
        <View>
            <Text>Loading...</Text>
        </View>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        localSignin: (goToDashboard, goToLogin) =>
            dispatch(tryLocalSignin(goToDashboard, goToLogin)),
    };
}

export default connect(null, mapDispatchToProps)(ResolveAuthScreen);
