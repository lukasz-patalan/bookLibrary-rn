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
