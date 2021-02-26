import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { addBookStyles, dashboardStyles } from "../styles";
import { AntDesign } from "@expo/vector-icons";

import { Header } from "../components/Header";
import { ScreenTitle } from "../components/ScreenTitle";
import { RateBook } from "../components/RateBook";
import { AddbookFirstSection } from "../components/AddbookFirstSection";
import { AddBookStatus } from "../components/AddBookStatus";
import { connect } from "react-redux";
import {
    changeAuthor,
    changeCategory,
    changeCover,
    changeRate,
    changeStatus,
    changeTitle,
    postNewBook,
} from "../actions/addBook";
import { buttonStyle, colors } from "../constans/theme";
import { ScrollView } from "react-native-gesture-handler";

const AddBookScreen = ({
    navigation,
    onChangeAuthor,
    onChangeTitle,
    onChangeCategory,
    onChangeCover,
    onChangeRate,
    onChangeStatus,
    author,
    title,
    cover,
    category,
    rate,
    status,
    onSendNewBook,
    isSendingBook,
}) => {
    const toggleDrawer = () => navigation.toggleDrawer();
    const isDisabled = !author || !title || !category || !rate || !status;

    const handleSendNewBook = () => {
        onSendNewBook(
            author,
            title,
            cover,
            category,
            rate,
            status,
            navigation.navigate("BooksCollection")
        );
    };

    return (
        <View style={dashboardStyles.dashboardContainer}>
            <ScreenTitle title="Add new book" />
            <Header toggleDrawer={toggleDrawer} />

            <ScrollView style={addBookStyles.contentWrapper}>
                <AddbookFirstSection
                    onChangeAuthor={onChangeAuthor}
                    onChangeTitle={onChangeTitle}
                    onChangeCategory={onChangeCategory}
                    onChangeCover={onChangeCover}
                    author={author}
                    title={title}
                    cover={cover}
                />
                <View style={addBookStyles.secondSectionWrapper}>
                    <View style={addBookStyles.heartIconWrapper}>
                        <AntDesign
                            name="heart"
                            size={22}
                            color={colors.whiteText}
                        />
                    </View>
                    <RateBook onChangeRate={onChangeRate} rate={rate} />
                    <AddBookStatus
                        onChangeStatus={onChangeStatus}
                        status={status}
                    />
                </View>
                <View
                    style={{
                        marginTop: 40,
                        alignSelf: "center",
                    }}
                >
                    <Button
                        onPress={handleSendNewBook}
                        title="Save book"
                        loading={isSendingBook}
                        buttonStyle={buttonStyle}
                        disabled={isDisabled}
                        disabledStyle={{
                            backgroundColor: colors.violetView,
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

function mapStateToProps(state) {
    return {
        author: state.addBook.author,
        title: state.addBook.title,
        cover: state.addBook.cover,
        category: state.addBook.category,
        rate: state.addBook.rate,
        status: state.addBook.status,
        isSendingBook: state.addBook.isSendingBook,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeAuthor: (author) => dispatch(changeAuthor(author)),
        onChangeTitle: (title) => dispatch(changeTitle(title)),
        onChangeCover: (cover) => dispatch(changeCover(cover)),
        onChangeCategory: (category) => dispatch(changeCategory(category)),
        onChangeRate: (rate) => dispatch(changeRate(rate)),
        onChangeStatus: (status) => dispatch(changeStatus(status)),
        onSendNewBook: (
            author,
            title,
            cover,
            category,
            rate,
            status,
            goToBooksCollection
        ) =>
            dispatch(
                postNewBook(
                    author,
                    title,
                    cover,
                    category,
                    rate,
                    status,
                    goToBooksCollection
                )
            ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookScreen);
