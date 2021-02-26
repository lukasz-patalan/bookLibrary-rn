import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { dashboardStyles } from "../styles";

import { Header } from "../components/Header";
import { InputWrapper } from "../components/InputWrapper";
import { ScreenTitle } from "../components/ScreenTitle";
import { connect } from "react-redux";
import { getBooksCollection } from "../actions/addBook";
import { BooksList } from "../components/BooksList";

const BooksCollectionScreen = ({
    fetchBooks,
    books,
    isFetchingBooks,
    navigation,
}) => {
    const toggleDrawer = () => navigation.toggleDrawer();

    useEffect(() => {
        fetchBooks();
    }, []);
    return (
        <View style={dashboardStyles.dashboardContainer}>
            <ScreenTitle title="Books collection" />
            <Header toggleDrawer={toggleDrawer} />
            <InputWrapper />
            <BooksList books={books} isFetchingBooks={isFetchingBooks} />
        </View>
    );
};

function mapStateToProps(state) {
    return {
        books: state.addBook.books,
        isFetchingBooks: state.addBook.isFetchingBooks,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBooks: () => dispatch(getBooksCollection()),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksCollectionScreen);
