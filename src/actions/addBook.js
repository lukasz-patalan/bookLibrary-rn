import { Alert } from "react-native";
import { auth, firestore } from "../firebase/firebaseConfig";
import { ActionType } from "./actionTypes";

export function changeAuthor(author) {
    return {
        type: ActionType.CHANGE_AUTHOR,
        author,
    };
}

export function changeTitle(title) {
    return {
        type: ActionType.CHANGE_TITLE,
        title,
    };
}

export function changeCover(cover) {
    return {
        type: ActionType.CHANGE_COVER,
        cover,
    };
}

export function changeCategory(category) {
    return {
        type: ActionType.CHANGE_CATEGORY,
        category,
    };
}

export function changeRate(rate) {
    return {
        type: ActionType.CHANGE_RATE,
        rate,
    };
}

export function changeStatus(status) {
    return {
        type: ActionType.CHANGE_STATUS,
        status,
    };
}

export const postNewBook = (
    author,
    title,
    cover,
    category,
    rate,
    status,
    goToBooksCollection
) => {
    return async (dispatch) => {
        dispatch({
            type: ActionType.POST_NEW_BOOK,
        });
        try {
            await firestore
                .collection("users")
                .doc(auth.currentUser.email)
                .collection("books")
                .add({
                    author: author,
                    title: title,
                    cover: cover,
                    category: category,
                    rate: rate,
                    status: status,
                });
            dispatch({ type: ActionType.POST_NEW_BOOK_SUCCESS });
            goToBooksCollection();
        } catch (ex) {
            dispatch({ type: ActionType.POST_NEW_BOOK_FAIL });
            Alert.alert(ex.message);
        }
    };
};

export const getBooksCollection = () => {
    return async (dispatch) => {
        dispatch({
            type: ActionType.FETCH_BOOKS,
        });
        try {
            const snapshot = await firestore
                .collection("users")
                .doc(auth.currentUser.email)
                .collection("books")
                .get();
            const data = snapshot.docs.map((doc) => doc.data());
            dispatch({ type: ActionType.FETCH_BOOKS_SUCCESS, books: data });
        } catch (ex) {
            dispatch({ type: ActionType.FETCH_BOOKS_FAIL });
            Alert.alert(ex.message);
        }
    };
};
