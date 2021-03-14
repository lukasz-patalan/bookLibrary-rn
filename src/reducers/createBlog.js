import { ActionType } from "../actions/actionTypes";

export const createBlogState = {
    postContent: "",
    postPhotoUri: "",
    isAddingPost: false,
    posts: [],
    isFetchingPosts: false,
};
export const createBlog = (state = createBlogState, action) => {
    switch (action.type) {
        case ActionType.CHANGE_POST_CONTENT:
            return {
                ...state,
                postContent: action.content,
            };
        case ActionType.CHANGE_POST_PHOTO:
            return {
                ...state,
                postPhotoUri: action.postPhotoUri,
            };
        case ActionType.ADD_NEW_POST:
            return {
                ...state,
                isAddingPost: true,
            };
        case ActionType.ADD_NEW_POST_SUCCESS:
            return {
                ...state,
                isAddingPost: false,
            };
        case ActionType.ADD_NEW_POST_FAIL:
            return {
                ...state,
                isAddingPost: false,
            };
        case ActionType.FETCH_POSTS:
            return {
                ...state,
                isFetchingPosts: true,
            };
        case ActionType.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isFetchingPosts: false,
                posts: action.posts,
                postContent: "",
            };
        case ActionType.AFETCH_POSTS_FAIL:
            return {
                ...state,
                isFetchingPosts: false,
            };
        default:
            return state;
    }
};
