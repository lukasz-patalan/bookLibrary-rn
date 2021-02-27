import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { booksCollection, dashboardStyles } from "../styles";

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

        const listener = navigation.addListener("didFocus", () => {
            fetchBooks();
        });
        return () => {
            listener.remove();
        };
    }, []);
    const [isBookMenuOpen, setBookMenuOpen] = useState(false);

    const handleOpenBookMenu = () => {
        setBookMenuOpen(true);
    };
    return (
        <View style={booksCollection.pageContainer}>
            <ScreenTitle title="Books collection" />
            <Header toggleDrawer={toggleDrawer} />
            <InputWrapper />
            <BooksList
                books={books}
                isFetchingBooks={isFetchingBooks}
                handleOpenBookMenu={handleOpenBookMenu}
                isBookMenuOpen={isBookMenuOpen}
            />
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
