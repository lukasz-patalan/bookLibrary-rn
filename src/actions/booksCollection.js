import { Alert } from "react-native";
import { auth, firestore } from "../firebase/firebaseConfig";
import { ActionType } from "./actionTypes";

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

export function toggleSideMenu(book, id) {
    return {
        type: ActionType.TOGGLE_SIDE_MENU,
        book,
        id,
    };
}

export const deleteBook = (bookId) => {
    return async (dispatch) => {
        dispatch({
            type: ActionType.DELETE_BOOK,
        });
        try {
            const querySnapshot = await firestore
                .collection("users")
                .doc(auth.currentUser.email)
                .collection("books")
                .where("id", "==", bookId)
                .get();
            querySnapshot.docs[0].ref.delete();
            dispatch({
                type: ActionType.DELETE_BOOK_SUCCESS,
                bookId,
            });
        } catch (ex) {
            Alert.alert(ex.message);
        }
    };
};
