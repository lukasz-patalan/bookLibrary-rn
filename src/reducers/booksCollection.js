import { ActionType } from "../actions/actionTypes";

export const signinState = {
    isFetchingBooks: false,
    bookSelected: null,
    bookId: null,
    filteredBooks: [],
    books: [],
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
        default:
            return state;
    }
};
