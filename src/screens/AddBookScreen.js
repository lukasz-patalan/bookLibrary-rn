import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { addBookStyles, dashboardStyles } from "../styles";

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
} from "../actions/addBook";
import { buttonStyle, colors } from "../constans/theme";

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
}) => {
    const toggleDrawer = () => navigation.toggleDrawer();
    const isDisabled = !author || !title || !category || !rate || !status;

    return (
        <View style={dashboardStyles.dashboardContainer}>
            <ScreenTitle title="Add new book" />
            <Header toggleDrawer={toggleDrawer} />

            <View style={addBookStyles.contentWrapper}>
                <AddbookFirstSection
                    onChangeAuthor={onChangeAuthor}
                    onChangeTitle={onChangeTitle}
                    onChangeCategory={onChangeCategory}
                    onChangeCover={onChangeCover}
                    author={author}
                    title={title}
                    cover={cover}
                    category={category}
                />
                <RateBook onChangeRate={onChangeRate} rate={rate} />
                <AddBookStatus
                    onChangeStatus={onChangeStatus}
                    status={status}
                />
                <View
                    style={{
                        marginTop: 50,
                        alignSelf: "center",
                    }}
                >
                    <Button
                        title="Save book"
                        buttonStyle={buttonStyle}
                        disabled={isDisabled}
                        disabledStyle={{ backgroundColor: colors.textGray }}
                    />
                </View>
            </View>
        </View>
    );
};

function mapStateToProps(state) {
    return {
        author: state.addBook.author,
        title: state.addBook.title,
        cover: state.addBook.cover,
        category: state.addBook.cover,
        rate: state.addBook.rate,
        status: state.addBook.status,
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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookScreen);
