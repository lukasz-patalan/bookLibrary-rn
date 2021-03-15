import { ActionType } from "../actions/actionTypes";

export const commentsState = {
    comment: "",
    isSendingComment: false,
    hasSentComment: false,
    isFetchingComments: false,
    commentsList: [],
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
            };
        case ActionType.ADD_COMMENT_SUCCESS:
            return {
                ...state,
                isSendingComment: false,
                hasSentComment: true,
                comment: "",
            };
        case ActionType.ADD_COMMENT_FAIL:
            return {
                ...state,
                isSendingComment: false,
                hasSentComment: false,
            };

        default:
            return state;
    }
};
