import { ActionType } from "../actions/actionTypes";

export const signinState = {
    isFetchingBooks: false,
    bookSelected: null,
    bookId: null,
    filteredBooks: [],
    books: [],
    isSearching: false,
    searchValue: "",
};
export const booksCollection = (state = signinState, action) => {
    switch (action.type) {
        case ActionType.FETCH_BOOKS:
            return {
                ...state,
                isFetchingBooks: true,
            };
        case ActionType.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                isFetchingBooks: false,
                books: action.books,
            };
        case ActionType.FETCH_BOOKS_FAILURE:
            return {
                ...state,
                isFetchingBooks: false,
            };
        case ActionType.TOGGLE_SIDE_MENU:
            return {
                ...state,
                bookSelected: action.book,
                bookId: action.id,
            };
        case ActionType.DELETE_BOOK:
            return {
                ...state,
                isFetchingBooks: true,
            };
        case ActionType.DELETE_BOOK_SUCCESS:
            return {
                ...state,
                isFetchingBooks: false,
                books: state.books.filter((el) => el.id !== action.bookId),
            };
        case ActionType.SEARCH_BOOK:
            return {
                ...state,
                isSearching: true,
                searchValue: action.searchValue,
                filteredBooks: state.books.filter(
                    (el) =>
                        el.title.toLowerCase() ===
                            action.searchValue.toLowerCase() ||
                        el.author.toLowerCase() ===
                            action.searchValue.toLowerCase()
                ),
            };
        case ActionType.RETURN_TO_BOOKS:
            return {
                ...state,
                isSearching: false,
                searchValue: "",
            };
        default:
            return state;
    }
};
