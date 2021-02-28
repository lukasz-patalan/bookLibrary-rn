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
        backgroundColor: colors.background,
        borderTopLeftRadius: 80,
        paddingBottom: 180,
    },
    buttonWrapper: {
        alignItems: "center",
        marginTop: 30,
        marginBottom: 120,
    },
    switchWrapper: {
        alignSelf: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 40,
        marginTop: 25,
    },
    rememberMeWrapper: {
        fontSize: fontSize.regular,
        marginLeft: 10,
        color: colors.whiteText,
    },
});

export const SignupStyles = StyleSheet.create({
    formWrapper: {
        marginTop: 40,
        paddingTop: 100,
        backgroundColor: colors.background,
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
        backgroundColor: colors.darkViolet,
        height: 60,
        width: 340,
        borderRadius: 8,
        fontSize: fontSize.regular,
        paddingLeft: 50,
        color: colors.whiteText,
    },
    buttonWrapper: {
        alignItems: "center",
        marginTop: 56,
        marginBottom: 120,
    },
    icon: {
        position: "absolute",
        top: 20,
        zIndex: 1,
        left: 52,
    },
    bottomInfo: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    alreadyText: {
        fontSize: fontSize.regular,
        color: colors.whiteText,
    },
    signinText: {
        fontSize: fontSize.regular,
        color: colors.buttonActive,
        position: "relative",
        top: 3.5,
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
        backgroundColor: colors.background,
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
        backgroundColor: colors.darkViolet,
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
        marginTop: 120,
    },
    rateText: {
        fontSize: fontSize.regular,
        marginBottom: 10,
        alignSelf: "center",
        marginTop: 15,
        backgroundColor: colors.textGray,
        width: 150,
        alignItems: "center",
        paddingVertical: 8,
        borderRadius: 8,
        height: 35,
    },
    rateFont: {
        fontSize: fontSize.regular,
        color: colors.whiteText,
        fontStyle: "italic",
    },
    firstSectionWrapper: {
        position: "absolute",
        backgroundColor: colors.buttonActive,
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 50,
        top: 15,
        left: 15,
        zIndex: 1,
    },
    insideFirstSection: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    coverWrapper: {
        justifyContent: "center",
        height: 100,
        marginTop: 50,
    },
    secondSectionWrapper: {
        backgroundColor: colors.darkViolet,
        marginHorizontal: 20,
        borderRadius: 20,
        marginTop: 10,
        paddingTop: 65,
    },
    heartIconWrapper: {
        position: "absolute",
        backgroundColor: colors.darkRed,
        paddingTop: 7,
        paddingBottom: 6,
        paddingHorizontal: 6,
        borderRadius: 50,
        top: 15,
        left: 15,
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flexDirection: "column",
        justifyContent: "space-around",
        marginBottom: 10,
        backgroundColor: colors.darkViolet,
        paddingVertical: 20,
        marginHorizontal: 20,
        borderRadius: 20,
    },
    bookCover: {
        width: 100,
        borderRadius: 8,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderStyle: "dashed",
        paddingBottom: 5,
        borderColor: colors.violetView,
        marginLeft: 2,
    },
    photoIcon: {
        color: colors.violetView,
    },
    label: {
        fontSize: fontSize.regular,
        color: colors.whiteText,
        marginBottom: 10,
    },
    input: {
        height: 46,
        width: 230,
        borderRadius: 8,
        backgroundColor: colors.violetView,
        color: colors.whiteText,
        fontSize: fontSize.regular,
        paddingLeft: 12,
    },
    selectIcon: {
        position: "relative",
        bottom: 50,
        left: 340,
    },
    inputSelect: {
        color: colors.whiteText,
        borderRadius: 10,
        height: 48,
        width: 220,
        backgroundColor: colors.redView,
        fontSize: fontSize.regular,
        zIndex: 1,
        alignSelf: "center",
        marginBottom: 10,
        paddingLeft: 20,
    },
    rateView: {
        backgroundColor: colors.violetView,
        height: 150,
        width: 340,
        alignSelf: "center",
        borderRadius: 8,
    },
    rateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 45,
        marginTop: 10,
    },
    statusView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 80,
    },
    statusContainer: {
        height: 80,
        width: 80,
        borderRadius: 20,
        backgroundColor: colors.violetView,
        justifyContent: "center",
        alignItems: "center",
    },

    coverImageView: {
        backgroundColor: colors.textGray,
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -30,
        marginLeft: 70,
    },
});

export const booksCollection = StyleSheet.create({
    pageContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.violetView,
    },
    bookView: {
        flexDirection: "row",
        marginBottom: 20,
        alignSelf: "center",
        paddingBottom: 15,
    },
    cover: {
        width: 140,
        height: 190,
        borderRadius: 8,
        marginRight: 10,
        backgroundColor: colors.menuBackground,
    },
    detailsView: {
        backgroundColor: colors.background,
        borderRadius: 8,
        height: 190,
        zIndex: -1,
    },
    kebabIcon: {
        alignSelf: "flex-end",
        marginRight: 15,
        marginTop: 10,
        zIndex: 1,
    },
    categoryWrapper: {
        backgroundColor: colors.violetView,
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginLeft: 15,
        width: 150,
    },
    titleWrapper: {
        width: 200,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        height: 60,
        zIndex: 0,
        marginTop: -25,
    },
    titleText: {
        fontSize: fontSize.small,
        color: colors.whiteText,
        fontStyle: "italic",
    },
    itemWrapper: {
        width: 200,
        flexDirection: "row",
        paddingBottom: 15,
        alignItems: "center",
        paddingLeft: 15,
    },
    icon: {
        marginRight: 10,
    },
    statusWrapper: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-end",
        marginRight: 15,
        marginTop: 15,
    },
    itemText: {
        fontSize: fontSize.small,
        color: colors.whiteText,
    },
    starIcon: {
        position: "absolute",
        right: -10,
        top: 150,
        zIndex: 1,
    },
    starText: {
        position: "absolute",
        top: 168,
        right: 11,
        fontSize: fontSize.Xlarge,
        color: colors.darkRed,
        zIndex: 2,
        fontWeight: "bold",
    },
});

export const emptyCollectionStyles = StyleSheet.create({
    wrapper: {
        alignSelf: "center",
        paddingTop: 100,
        alignItems: "center",
    },
    noBookText: {
        fontSize: 20,
        marginTop: 15,
        color: colors.darkViolet,
    },
    goAddWrapper: {
        flexDirection: "row",
        marginTop: 20,
    },
    goAddText: {
        color: colors.buttonActive,
        fontSize: fontSize.regular,
    },
});

export const sideBookMenuStyles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: 200,
        backgroundColor: colors.darkViolet,
        borderRadius: 10,
        paddingTop: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: -5,
        },
        shadowOpacity: 0.6,
        shadowRadius: 6.27,

        elevation: 10,
    },
    closeWrapper: {
        alignSelf: "flex-end",
        marginRight: 20,
    },
    titleWrapper: {
        color: colors.whiteText,
        fontSize: fontSize.large,
        alignSelf: "center",
        fontStyle: "italic",
    },
    menuItemsWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 40,
    },
    editWrapper: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
    },
    editText: {
        color: colors.buttonActive,
        fontSize: fontSize.regular,
        marginLeft: 5,
    },
    deleteWrapper: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        marginLeft: 80,
    },
    deleteText: {
        color: colors.buttonActive,
        fontSize: fontSize.regular,
        marginLeft: 5,
    },
});
