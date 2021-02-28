import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { booksCollection, dashboardStyles } from "../styles";

import { Header } from "../components/Header";
import { InputWrapper } from "../components/InputWrapper";
import { ScreenTitle } from "../components/ScreenTitle";
import { connect } from "react-redux";
import {
    deleteBook,
    getBooksCollection,
    toggleSideMenu,
} from "../actions/booksCollection";
import { BooksList } from "../components/BooksList";
import { EmptyCollection } from "../components/EmptyCollection";

const BooksCollectionScreen = ({
    navigation,
    fetchBooks,
    books,
    isFetchingBooks,
    toggleMenu,
    bookSelected,
    removeBook,
    bookId,
}) => {
    const toggleDrawer = () => navigation.toggleDrawer();

    useEffect(() => {
        fetchBooks();

        const listener = navigation.addListener("didFocus", () => {
            fetchBooks();
            setBookMenuOpen(false);
        });
        return () => {
            listener.remove();
        };
    }, []);
    const [isBookMenuOpen, setBookMenuOpen] = useState(false);

    const handleOpenBookMenu = () => {
        setBookMenuOpen(true);
    };
    const handleCloseBookMenu = () => {
        setBookMenuOpen(false);
    };
    return (
        <View style={booksCollection.pageContainer}>
            <ScreenTitle title="Books collection" />
            <Header toggleDrawer={toggleDrawer} />
            <InputWrapper />
            {books.length !== 0 ? (
                <BooksList
                    books={books}
                    isFetchingBooks={isFetchingBooks}
                    handleOpenBookMenu={handleOpenBookMenu}
                    isBookMenuOpen={isBookMenuOpen}
                    toggleMenu={toggleMenu}
                    bookSelected={bookSelected}
                    handleCloseBookMenu={handleCloseBookMenu}
                    removeBook={removeBook}
                    bookId={bookId}
                />
            ) : (
                <EmptyCollection
                    navigation={navigation}
                    isFetchingBooks={isFetchingBooks}
                />
            )}
        </View>
    );
};

function mapStateToProps(state) {
    return {
        books: state.books.books,
        isFetchingBooks: state.books.isFetchingBooks,
        bookSelected: state.books.bookSelected,
        bookId: state.books.bookId,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBooks: () => dispatch(getBooksCollection()),
        toggleMenu: (book, id) => dispatch(toggleSideMenu(book, id)),
        removeBook: (id) => dispatch(deleteBook(id)),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksCollectionScreen);
