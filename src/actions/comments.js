import { Alert } from "react-native";
import { auth, fireBase, firestore } from "../firebase/firebaseConfig";
import { ActionType } from "./actionTypes";

export function changeCommentValue(comment) {
    return {
        type: ActionType.CHANGE_COMMENT,
        comment,
    };
}

export const addComment = (postId, comment) => {
    return async (dispatch) => {
        dispatch({
            type: ActionType.ADD_COMMENT,
        });
        try {
            const querySnapshot = await firestore
                .collection("posts")
                .where("id", "==", postId)
                .get();
            await querySnapshot.docs[0].ref.update({
                comments: fireBase.firestore.FieldValue.arrayUnion({
                    author: auth.currentUser.displayName,
                    authorPhoto: auth.currentUser.photoURL,
                    comment: comment,
                    id: Math.random(),
                }),
            });
            dispatch({
                type: ActionType.ADD_COMMENT_SUCCESS,
            });
        } catch (ex) {
            dispatch({ type: ActionType.ADD_COMMENT_FAIL });
            Alert.alert("Something went wrong :(");
        }
    };
};

export function clearCommentValue() {
    return {
        type: ActionType.CLEAR_COMMENT,
    };
}
