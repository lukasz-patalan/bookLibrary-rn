import React, { useEffect, useRef } from "react";
import { View, Animated, TextInput, Keyboard } from "react-native";
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
    const topValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Keyboard.addListener("keyboardWillShow", keyboardWillShow);
        Keyboard.addListener("keyboardWillHide", keyboardWillHide);

        return () => {
            Keyboard.removeListener("keyboardWillShow", keyboardWillShow);
            Keyboard.removeListener("keyboardWillHide", keyboardWillHide);
        };
    }, []);

    const keyboardWillShow = (e) => {
        const keyboardHeight = e.startCoordinates.height;
        Animated.timing(topValue, {
            toValue: -keyboardHeight,
            duration: 180,
            useNativeDriver: true,
        }).start();
    };

    const keyboardWillHide = () => {
        Animated.timing(topValue, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
        }).start();
    };
    const InputStyle = {
        transform: [
            {
                translateY: topValue.interpolate({
                    inputRange: [0, 300],
                    outputRange: [0, 350],
                }),
            },
        ],
    };
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
        <Animated.View style={[commentsStyles.inputWrapper, InputStyle]}>
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
        </Animated.View>
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
