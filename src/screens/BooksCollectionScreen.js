import React, { useEffect } from "react";
import { View } from "react-native";
import { booksCollection } from "../styles";

import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { ScreenTitle } from "../components/ScreenTitle";
import { connect } from "react-redux";
import {
    deleteBook,
    getBooksCollection,
    returnToBooks,
    searchBook,
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
    filteredBooks,
    isSearching,
    searchInBooks,
    backToCollection,
    searchValue,
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

    return (
        <View style={booksCollection.pageContainer}>
            <ScreenTitle title="Books collection" />
            <Header toggleDrawer={toggleDrawer} />
            <Search
                searchInBooks={searchInBooks}
                backToCollection={backToCollection}
                searchValue={searchValue}
            />

            {books.length !== 0 ? (
                <BooksList
                    books={isSearching && searchValue ? filteredBooks : books}
                    isFetchingBooks={isFetchingBooks}
                    toggleMenu={toggleMenu}
                    bookSelected={bookSelected}
                    removeBook={removeBook}
                    bookId={bookId}
                    isSearching={isSearching}
                    filteredBooks={filteredBooks}
                    backToCollection={backToCollection}
                    searchValue={searchValue}
                    navigation={navigation}
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
        isSearching: state.books.isSearching,
        filteredBooks: state.books.filteredBooks,
        searchValue: state.books.searchValue,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBooks: () => dispatch(getBooksCollection()),
        toggleMenu: (book, id) => dispatch(toggleSideMenu(book, id)),
        removeBook: (id) => dispatch(deleteBook(id)),
        searchInBooks: (searchValue) => dispatch(searchBook(searchValue)),
        backToCollection: () => dispatch(returnToBooks()),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksCollectionScreen);
