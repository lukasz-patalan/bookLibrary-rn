import { Alert } from "react-native";
import { auth, fireBase, firestore } from "../firebase/firebaseConfig";
import { ActionType } from "./actionTypes";

export function changePostContent(content) {
    return {
        type: ActionType.CHANGE_POST_CONTENT,
        content,
    };
}

export function changePostPhoto(postPhotoUri) {
    return {
        type: ActionType.CHANGE_POST_PHOTO,
        postPhotoUri,
    };
}

function formatDate() {
    var d = new Date(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
    time = " " + d.toLocaleTimeString();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    const date = [year, month, day].join("-");
    return date.concat([time]);
}

const getCreatedAt = () => {
    let d = new Date(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
};
export const addNewPost = (
    author,
    authorAvatar,
    content,
    photo,
    isLoading,
    goToDashboard
) => {
    return async (dispatch) => {
        dispatch({
            type: ActionType.ADD_NEW_POST,
        });
        try {
            const post = await firestore.collection("posts").add({
                author: author,
                authorAvatar: authorAvatar,
                authorUid: auth.currentUser.uid,
                content: content,
                photo: photo,
                createdAt: formatDate(),
                id: Math.random().toString(),
                likes: 0,
                likedBy: [],
            });

            dispatch({
                type: ActionType.ADD_NEW_POST_SUCCESS,
                postId: post.id,
            });
            if (!isLoading) goToDashboard();
        } catch (ex) {
            dispatch({ type: ActionType.ADD_NEW_POST_FAIL });
            Alert.alert(ex.message);
        }
    };
};

export const getPosts = () => {
    return async (dispatch) => {
        dispatch({
            type: ActionType.FETCH_POSTS,
        });
        try {
            const snapshot = await firestore.collection("posts").get();
            const data = snapshot.docs.map((doc) => doc.data());
            dispatch({ type: ActionType.FETCH_POSTS_SUCCESS, posts: data });
        } catch (ex) {
            dispatch({ type: ActionType.FETCH_POSTS_FAIL });
            Alert.alert(ex.message);
        }
    };
};

export const likePost = (postId, likes, userUid) => {
    return async (dispatch) => {
        dispatch({
            type: ActionType.LIKE_POST,
        });
        try {
            const querySnapshot = await firestore
                .collection("posts")
                .where("id", "==", postId)
                .get();

            await querySnapshot.docs[0].ref.update({
                likes: likes,
                likedBy: fireBase.firestore.FieldValue.arrayUnion(userUid),
            });
            dispatch({
                type: ActionType.LIKE_POST_SUCCESS,
            });
        } catch (ex) {
            dispatch({ type: ActionType.LIKE_POST_FAIL });
            Alert.alert(ex.message);
        }
    };
};

export const dislikePost = (postId, likes, userUid) => {
    return async (dispatch) => {
        dispatch({
            type: ActionType.DISLIKE_POST,
        });
        try {
            const querySnapshot = await firestore
                .collection("posts")
                .where("id", "==", postId)
                .get();

            await querySnapshot.docs[0].ref.update({
                likes: likes,
                likedBy: fireBase.firestore.FieldValue.arrayRemove(userUid),
            });
            dispatch({
                type: ActionType.DISLIKE_POST_SUCCESS,
            });
        } catch (ex) {
            dispatch({ type: ActionType.DISLIKE_POST_FAIL });
            Alert.alert(ex.message);
        }
    };
};
