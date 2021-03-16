import { ActionType } from "../actions/actionTypes";

export const commentsState = {
    comment: "",
    isSendingComment: false,
    hasSentComment: false,
    isFetchingComments: false,
    extraCommentToList: {},
};
export const comments = (state = commentsState, action) => {
    switch (action.type) {
        case ActionType.CHANGE_COMMENT:
            return {
                ...state,
                comment: action.comment,
            };
        case ActionType.ADD_COMMENT:
            return {
                ...state,
                isSendingComment: true,
                hasSentComment: false,
                extraCommentToList: action.extraCommentToList,
                comment: "",
            };
        case ActionType.ADD_COMMENT_SUCCESS:
            return {
                ...state,
                isSendingComment: false,
                hasSentComment: true,
            };
        case ActionType.ADD_COMMENT_FAIL:
            return {
                ...state,
                isSendingComment: false,
                hasSentComment: false,
            };
        case ActionType.CLEAR_COMMENT:
            return {
                ...state,
                comment: "",
            };
        default:
            return state;
    }
};
