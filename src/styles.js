import { StyleSheet, Dimensions } from "react-native";
import { colors, fontSize } from "./constans/theme";
const { width, height } = Dimensions.get("window");

export const dashboardStyles = StyleSheet.create({
    dashboardContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.background,
    },
});

export const headerStyles = StyleSheet.create({
    container: {
        height: 140,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 25,
        position: "absolute",
        top: 5,
        right: -10,
        zIndex: 1,
    },
});

export const menuStyles = StyleSheet.create({
    container: {
        paddingLeft: 40,
        backgroundColor: colors.menuBackground,
        flex: 1,
    },
    itemSet: {
        flexDirection: "row",
    },
    title: {
        paddingTop: 100,
        fontSize: fontSize.Xlarge,
        color: colors.whiteText,
        paddingBottom: 150,
    },
    item: {
        fontSize: fontSize.large,
        color: colors.whiteText,
        paddingBottom: 70,
        marginLeft: 20,
    },
});

export const elements = StyleSheet.create({
    button: {
        borderRadius: 18,
        backgroundColor: colors.buttonActive,
    },
});
