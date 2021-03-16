import { StyleSheet } from "react-native";
import { colors, fontSize } from "./constans/theme";

export const dashboardStyles = StyleSheet.create({
    dashboardContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.background,
    },
});

export const navStyles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        backgroundColor: colors.postViolet,
        height: 85,
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: -5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6.27,
    },
});

export const authScreenStyles = StyleSheet.create({
    logoView: {
        marginTop: 250,
        backgroundColor: colors.darkViolet,
        borderRadius: 230,
        width: 330,
        height: 330,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    logoImg: {
        width: 300,
        height: 300,
        alignSelf: "center",
    },
    title: {
        alignSelf: "center",
        fontSize: 40,
        color: colors.buttonActive,
    },
});

export const editStyles = StyleSheet.create({
    closeWrapper: {
        backgroundColor: colors.darkViolet,
        padding: 3,
        borderRadius: 5,
        width: 30,
    },
});

export const commentsStyles = StyleSheet.create({
    backButtonWrapper: {
        paddingTop: 60,
        paddingLeft: 10,
        paddingBottom: 15,
    },
    backRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    backText: {
        fontSize: fontSize.regular,
        color: colors.buttonActive,
    },
    inputWrapper: {
        position: "absolute",
        bottom: 0,
        paddingTop: 10,
        paddingBottom: 30,
        width: "100%",
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.postViolet,
    },
    input: {
        width: 320,
        height: "auto",
        textAlignVertical: "top",
        minHeight: 45,
        backgroundColor: colors.violetView,
        borderRadius: 20,
        maxHeight: 150,
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 15,
        color: colors.whiteText,
    },
    sendButton: {
        marginLeft: 15,
    },
    commentWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        marginTop: 20,
    },
    userImage: {
        borderRadius: 100,
        width: 50,
        height: 50,
    },
    userNoImage: {
        width: 50,
        height: 50,
        backgroundColor: colors.textGray,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    contentWrapper: {
        backgroundColor: colors.violetView,
        marginLeft: 10,
        minHeight: 60,
        width: 305,
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 15,
    },
    authorText: {
        fontWeight: "bold",
        color: colors.textGray,
    },
    commentText: {
        marginTop: 5,
        color: colors.whiteText,
    },
});

export const createBlogStyles = StyleSheet.create({
    container: {
        paddingTop: 40,
        borderRadius: 8,
        width: "100%",
        alignSelf: "center",
        height: 160,
        backgroundColor: colors.violetView,
        fontSize: fontSize.large,
        paddingLeft: 15,
    },
    nameWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    userIcon: {
        borderRadius: 100,
        width: 50,
        height: 50,
        marginTop: 15,
    },
    noUserIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.textGray,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },

    userNameText: {
        color: colors.whiteText,
        paddingTop: 15,
        marginLeft: 10,
    },
    helloWrapper: {
        paddingTop: 20,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
    },
    helloText: {
        color: colors.buttonActive,
        fontSize: fontSize.regular,
        marginLeft: 10,
    },
    blogCreateContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.violetView,
    },
    createBlogNav: {
        width: "100%",
        height: 120,
        backgroundColor: colors.darkViolet,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 50,
        paddingHorizontal: 10,
    },
    headerNav: {
        paddingLeft: 60,
        fontSize: fontSize.regular,
        color: colors.whiteText,
    },
    textAreaWrapper: {
        paddingHorizontal: 15,
    },
    createBlogInput: {
        height: "80%",
        fontSize: fontSize.regular,
        textAlignVertical: "top",
        color: colors.whiteText,
        marginTop: 20,
    },
    userMenu: {
        flexDirection: "row",
        alignItems: "center",
    },
    pickImageButton: {
        marginTop: 15,
        borderWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 5,
        borderColor: colors.textGray,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 15,
    },
    addPhotoText: {
        fontSize: fontSize.small,
        color: colors.textGray,
        marginLeft: 10,
    },
    deletePhotoButton: {
        backgroundColor: colors.darkViolet,
        padding: 3,
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 15,
        marginLeft: 5,
    },
    postPhoto: {
        width: "100%",
        height: "50%",
    },
});

export const postStyles = StyleSheet.create({
    postWrapper: {
        backgroundColor: colors.postViolet,
        marginTop: 20,
        paddingHorizontal: 15,
        paddingBottom: 10,
    },
    userWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    dataText: {
        color: colors.textGray,
        paddingLeft: 10,
        paddingTop: 5,
    },
    border: {
        borderBottomWidth: 1,
        marginVertical: 10,
        paddingRight: 10,
        borderColor: colors.textGray,
    },
    contentText: {
        fontSize: fontSize.regular,
        color: colors.whiteText,
        paddingHorizontal: 5,
        flexShrink: 1,
    },
    bottomUIWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    likesNumberText: {
        fontSize: fontSize.regular,
        marginLeft: 5,
        color: colors.whiteText,
    },
    hasPhoto: {
        width: "100%",
        height: 350,
        alignSelf: "center",
        marginTop: 10,
    },
    bottomSectionWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export const dashboardUIStyles = StyleSheet.create({
    interface: {
        backgroundColor: "blue",

        borderRadius: 20,
        marginHorizontal: 20,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
    },
    button: {
        width: 70,
        height: 70,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
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
        marginTop: 85,
        marginBottom: 120,
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
        justifyContent: "space-around",
    },
    itemSet: {
        flexDirection: "row",
    },
    title: {
        marginTop: 50,
        fontSize: fontSize.Xlarge,
        color: colors.whiteText,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.darkViolet,
        width: 130,
        height: 130,
        borderRadius: 100,
        marginLeft: 10,
    },
    item: {
        fontSize: fontSize.large,
        color: colors.whiteText,
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
    saveButtonWrapper: {
        marginTop: 60,
        alignItems: "flex-end",
        marginRight: 20,
        marginBottom: 20,
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
        paddingHorizontal: 30,
        marginTop: 20,
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

export const noResultsStyles = StyleSheet.create({
    text: {
        fontSize: fontSize.Xlarge,
        color: colors.menuBackground,
        fontWeight: "bold",
    },
    backWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        marginTop: 10,
    },
});

export const sideBookMenuStyles = StyleSheet.create({
    wrapper: {
        marginBottom: -300,
        width: "100%",
        height: 180,
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
    },
    menuItemsWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
    },
});

export const settingsStyles = StyleSheet.create({
    avatar: {
        width: "100%",
        height: "50%",
    },
    noAvatar: {
        backgroundColor: colors.textGray,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "50%",
    },
    editButton: {
        backgroundColor: colors.whiteText,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 50,
        bottom: 25,
    },
    title: {
        alignSelf: "center",
        fontSize: fontSize.Xlarge,
        color: colors.whiteText,
        marginBottom: 30,
    },
    dataWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 15,
        backgroundColor: colors.background,
        alignItems: "center",
        paddingVertical: 20,
    },
    dataRow: {
        height: 50,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    dataText: {
        fontSize: fontSize.regular,
        color: colors.whiteText,
        flexShrink: 1,
        marginLeft: 50,
    },
    icon: {
        position: "absolute",
        left: 10,
    },
    buttonWrapper: {
        alignSelf: "center",
        marginTop: 40,
        alignItems: "center",
    },
});
