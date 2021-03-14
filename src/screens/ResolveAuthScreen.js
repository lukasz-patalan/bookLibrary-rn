import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated } from "react-native";
import { connect } from "react-redux";

import { checkLoggedIn } from "../actions/signin";
import { colors } from "../constans/theme";
import { authScreenStyles, dashboardStyles } from "../styles";

const ResolveAuthScreen = ({ navigation, localSignin }) => {
    const logoAnimationValue = useRef(new Animated.Value(1)).current;

    const LogoAnimationStyle = {
        transform: [
            { scale: logoAnimationValue },
            {
                translateY: logoAnimationValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1000, 1],
                }),
            },
        ],
    };
    const logoAnimation = () => {
        Animated.timing(logoAnimationValue, {
            toValue: 0,
            duration: 700,
            delay: 350,
            useNativeDriver: true,
        }).start();
    };
    useEffect(() => {
        logoAnimation();
        setTimeout(() => {
            localSignin(
                () => navigation.navigate("mainFlow"),
                () => navigation.navigate("Signin")
            );
        }, 800);
    }, []);
    return (
        <View style={dashboardStyles.dashboardContainer}>
            <Animated.View style={LogoAnimationStyle}>
                <View style={authScreenStyles.logoView}>
                    <Image
                        source={require("../assets/logo.png")}
                        style={authScreenStyles.logoImg}
                    />
                </View>
                <Text style={authScreenStyles.title}>BookApp</Text>
            </Animated.View>
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
