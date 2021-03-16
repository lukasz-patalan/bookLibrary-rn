import React from "react";
import { View, TextInput, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { commentsStyles } from "../styles";
import { colors } from "../constans/theme";
import { addComment, changeCommentValue } from "../actions/comments";
import { connect } from "react-redux";
import { auth } from "../firebase/firebaseConfig";

const CommentInput = ({
    comment,
    onChangeComment,
    postId,
    postComment,
    commentsList,
}) => {
    const handleAddComment = () => {
        if (!comment) {
            Keyboard.dismiss();
        } else {
            const commentCopy = comment.slice();
            commentsList.push({
                author: auth.currentUser.displayName,
                authorPhoto: auth.currentUser.photoURL,
                comment: commentCopy,
                id: Math.random(),
            });
            postComment(postId, comment);
            Keyboard.dismiss();
        }
    };
    return (
        <View style={commentsStyles.inputWrapper}>
            <View>
                <TextInput
                    style={commentsStyles.input}
                    value={comment}
                    onChangeText={onChangeComment}
                    multiline={true}
                />
            </View>

            <TouchableWithoutFeedback
                style={commentsStyles.sendButton}
                onPress={handleAddComment}
            >
                <FontAwesome
                    name="send-o"
                    size={24}
                    color={comment ? colors.buttonActive : colors.textGray}
                />
            </TouchableWithoutFeedback>
        </View>
    );
};

function mapStateToProps(state) {
    return {
        comment: state.comments.comment,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeComment: (comment) => dispatch(changeCommentValue(comment)),
        postComment: (id, comment) => dispatch(addComment(id, comment)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);
