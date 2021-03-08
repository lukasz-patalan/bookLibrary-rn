import React, { useRef, useEffect } from "react";
import { View, Animated } from "react-native";
import { Button } from "react-native-elements";
import { addBookStyles, dashboardStyles } from "../styles";
import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";

import { Header } from "../components/Header";
import { ScreenTitle } from "../components/ScreenTitle";
import { RateBook } from "../components/RateBook";
import { AddbookFirstSection } from "../components/AddbookFirstSection";
import { AddBookStatus } from "../components/AddBookStatus";
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
    const coverImgValue = useRef(new Animated.Value(0.5)).current;
    const bookCoverAnimation = () => {
        Animated.spring(coverImgValue, {
            toValue: 1,
            duration: 250,
            delay: 200,
            useNativeDriver: false,
        }).start();
    };
    const bookCoverAnimationReset = () => {
        Animated.spring(coverImgValue, {
            toValue: 0.5,
            duration: 100,
            useNativeDriver: false,
        }).start();
    };
    const bookCoverStyle = {
        transform: [{ scale: coverImgValue }],
    };

    const firstStarAnimationValue = useRef(new Animated.Value(0.3)).current;
    const secondStarAnimationValue = useRef(new Animated.Value(0.3)).current;
    const thirdStarAnimationValue = useRef(new Animated.Value(0.3)).current;
    const fourthStarAnimationValue = useRef(new Animated.Value(0.3)).current;
    const fifthStarAnimationValue = useRef(new Animated.Value(0.3)).current;

    const starAnimation = (starAnimation, delay) => {
        Animated.spring(starAnimation, {
            toValue: 1,
            duration: 200,
            delay: delay,
            useNativeDriver: false,
        }).start();
    };
    const starAnimations = () => {
        starAnimation(firstStarAnimationValue, 100);
        starAnimation(secondStarAnimationValue, 160);
        starAnimation(thirdStarAnimationValue, 230);
        starAnimation(fourthStarAnimationValue, 290);
        starAnimation(fifthStarAnimationValue, 330);
    };
    const restartStarAnimation = (starAnimation) => {
        Animated.spring(starAnimation, {
            toValue: 0.3,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };
    const starAnimationsReset = () => {
        restartStarAnimation(firstStarAnimationValue);
        restartStarAnimation(secondStarAnimationValue);
        restartStarAnimation(thirdStarAnimationValue);
        restartStarAnimation(fourthStarAnimationValue);
        restartStarAnimation(fifthStarAnimationValue);
    };
    const firstStarCoverStyle = {
        transform: [{ scale: firstStarAnimationValue }],
    };
    const secondStarCoverStyle = {
        transform: [{ scale: secondStarAnimationValue }],
    };
    const thirdStarCoverStyle = {
        transform: [{ scale: thirdStarAnimationValue }],
    };
    const fourthStarCoverStyle = {
        transform: [{ scale: fourthStarAnimationValue }],
    };
    const fifthStarCoverStyle = {
        transform: [{ scale: fifthStarAnimationValue }],
    };

    const toggleDrawer = () => navigation.toggleDrawer();
    const isDisabled = !author || !title || !category || !rate || !status;

    const handleSendNewBook = () => {
        onSendNewBook(author, title, cover, category, rate, status, () =>
            navigation.navigate("BooksCollection")
        );
    };
    useEffect(() => {
        bookCoverAnimation();
        starAnimations();
        const blurListener = navigation.addListener("didBlur", () => {
            bookCoverAnimationReset();
            starAnimationsReset();
        });
        const focusListener = navigation.addListener("didFocus", () => {
            bookCoverAnimation();
            starAnimations();
        });
        return () => {
            blurListener.remove();
            focusListener.remove();
        };
    }, []);

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
                    category={category}
                    bookCoverStyle={bookCoverStyle}
                />
                <View style={addBookStyles.secondSectionWrapper}>
                    <View style={addBookStyles.heartIconWrapper}>
                        <AntDesign
                            name="heart"
                            size={22}
                            color={colors.whiteText}
                        />
                    </View>
                    <RateBook
                        onChangeRate={onChangeRate}
                        rate={rate}
                        firstStarCoverStyle={firstStarCoverStyle}
                        secondStarCoverStyle={secondStarCoverStyle}
                        thirdStarCoverStyle={thirdStarCoverStyle}
                        fourthStarCoverStyle={fourthStarCoverStyle}
                        fifthStarCoverStyle={fifthStarCoverStyle}
                    />
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
