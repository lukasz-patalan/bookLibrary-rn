import React from "react";
import {
    View,
    Text,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    LogBox,
} from "react-native";
import { Post } from "../components/Post";
import { colors } from "../constans/theme";
import { Ionicons } from "@expo/vector-icons";

import { commentsStyles, dashboardStyles } from "../styles";
import {
    FlatList,
    TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import CommentInput from "../components/CommentInput";
import { connect } from "react-redux";
import { Comment } from "../components/Comment";
import { clearCommentValue } from "../actions/comments";

const CommentsScreen = ({
    route,
    navigation: { goBack },
    extraCommentToList,
    clearComment,
}) => {
    const {
        author,
        authorAvatar,
        content,
        photo,
        createdAt,
        likes,
        postId,
        addLike,
        likedBy,
        dislikePost,
        authorUid,
        comments,
        fetchPosts,
    } = route.params;

    LogBox.ignoreLogs([
        "Non-serializable values were found in the navigation state",
    ]);

    const DismissKeyboard = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
    const renderItem = ({ item }) => {
        return (
            <Comment
                authorAvatar={item.authorPhoto}
                author={item.author}
                comment={item.comment}
            />
        );
    };
    const handleGoBack = () => {
        goBack();
        clearComment();
    };
    return (
        <DismissKeyboard>
            <View
                style={[
                    dashboardStyles.dashboardContainer,
                    { backgroundColor: colors.darkViolet },
                ]}
            >
                <View style={commentsStyles.backButtonWrapper}>
                    <TouchableWithoutFeedback
                        style={commentsStyles.backRow}
                        onPress={handleGoBack}
                    >
                        <Ionicons
                            name="caret-back-outline"
                            size={15}
                            color={colors.buttonActive}
                        />
                        <Text style={commentsStyles.backText}>Back</Text>
                    </TouchableWithoutFeedback>
                </View>
                <FlatList
                    ListHeaderComponent={
                        <View style={{ marginTop: -20 }}>
                            <Post
                                author={author}
                                authorAvatar={authorAvatar}
                                content={content}
                                createdAt={createdAt}
                                likes={likes}
                                photo={photo}
                                postId={postId}
                                likedBy={likedBy}
                                authorUid={authorUid}
                                addLike={addLike}
                                dislikePost={dislikePost}
                                navigation={null}
                            />
                        </View>
                    }
                    data={comments}
                    renderItem={renderItem}
                    keyExtractor={() => Math.random().toString()}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={() => <View style={{ height: 20 }} />}
                />
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <CommentInput
                        postId={postId}
                        fetchPosts={fetchPosts}
                        extraCommentToList={extraCommentToList}
                        commentsList={comments}
                    />
                </KeyboardAvoidingView>
            </View>
        </DismissKeyboard>
    );
};

function mapStateToProps(state) {
    return {
        extraCommentToList: state.comments.extraCommentToList,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clearComment: () => dispatch(clearCommentValue()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsScreen);
