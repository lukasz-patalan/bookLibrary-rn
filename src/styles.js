import { StyleSheet } from "react-native";
import { colors, fontSize } from "./constans/theme";

export const dashboardStyles = StyleSheet.create({
    dashboardContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.background,
    },
});

export const signinStyles = StyleSheet.create({
    formWrapper: {
        marginTop: 40,
        paddingTop: 50,
        backgroundColor: colors.menuBackground,
        borderTopLeftRadius: 80,
        paddingBottom: 180,
    },
    buttonWrapper: {
        alignItems: "center",
        marginTop: 30,
        marginBottom: 120,
    },
});

export const SignupStyles = StyleSheet.create({
    formWrapper: {
        marginTop: 40,
        paddingTop: 100,
        backgroundColor: colors.menuBackground,
        borderTopLeftRadius: 80,
        paddingBottom: 180,
    },
    title: {
        alignSelf: "center",
        fontSize: fontSize.sectionTitle,
        color: colors.whiteText,
        marginTop: 120,
    },
    inputContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    inputLabel: {
        alignSelf: "flex-start",
        marginLeft: 40,
    },
    input: {
        backgroundColor: colors.background,
        height: 60,
        width: 340,
        borderRadius: 8,
        fontSize: fontSize.large,
        paddingLeft: 45,
        color: colors.whiteText,
    },
    buttonWrapper: {
        alignItems: "center",
        marginTop: 86,
        marginBottom: 120,
    },
    icon: {
        position: "absolute",
        top: 17,
        zIndex: 1,
        left: 52,
    },
    bottomInfo: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    alreadyText: {
        fontSize: fontSize.large,
        color: colors.whiteText,
    },
    signinText: {
        fontSize: fontSize.large,
        color: colors.buttonActive,
        position: "relative",
        top: 3,
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
        marginTop: 100,
        fontSize: fontSize.Xlarge,
        color: colors.whiteText,
        marginBottom: 50,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.background,
        width: 130,
        height: 130,
        borderRadius: 100,
        marginLeft: 30,
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

export const searchInputStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.menuBackground,
        height: 180,
        justifyContent: "center",
        paddingTop: 100,
        alignItems: "center",
    },
    icon: {
        position: "absolute",
        bottom: 27,
        left: 40,
        zIndex: 1,
    },
    input: {
        height: 40,
        width: 360,
        borderRadius: 8,
        backgroundColor: colors.background,
        color: colors.whiteText,
        fontSize: 17,
        paddingLeft: 45,
    },
});

export const addBookStyles = StyleSheet.create({
    contentWrapper: {
        marginTop: 130,
        borderTopLeftRadius: 80,
        paddingTop: 50,
        backgroundColor: colors.menuBackground,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    bookCover: {
        backgroundColor: colors.background,
        width: 100,
        borderRadius: 8,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    photoIcon: {
        color: colors.menuBackground,
    },
    label: {
        fontSize: fontSize.large,
        color: colors.whiteText,
        marginBottom: 10,
    },
    input: {
        height: 50,
        width: 260,
        borderRadius: 8,
        backgroundColor: colors.background,
        color: colors.whiteText,
        fontSize: fontSize.large,
        paddingLeft: 12,
    },
    selectIcon: {
        position: "relative",
        bottom: 38,
        left: 340,
    },
    inputSelect: {
        color: colors.whiteText,
        borderRadius: 8,
        paddingLeft: 15,
        height: 48,
        width: 360,
        backgroundColor: colors.background,
        fontSize: 16,
        zIndex: 1,
        alignSelf: "center",
    },
});
