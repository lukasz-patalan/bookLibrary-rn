import React from "react";
import { View, Text, Keyboard, Image, ScrollView } from "react-native";
import { Post } from "../components/Post";
import { colors } from "../constans/theme";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { commentsStyles, createBlogStyles, dashboardStyles } from "../styles";
import {
    FlatList,
    TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import CommentInput from "../components/CommentInput";
import { connect } from "react-redux";
import { UserName } from "../components/UserName";
import { Comment } from "../components/Comment";
import { auth } from "../firebase/firebaseConfig";
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
        <View>
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
                    <ScrollView>
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

                        <FlatList
                            data={comments}
                            renderItem={renderItem}
                            keyExtractor={() => Math.random().toString()}
                            showsVerticalScrollIndicator={false}
                            style={{ marginBottom: 100 }}
                            scrollEnabled={false}
                        />
                    </ScrollView>
                </View>
            </DismissKeyboard>
            <CommentInput
                postId={postId}
                fetchPosts={fetchPosts}
                extraCommentToList={extraCommentToList}
                commentsList={comments}
            />
        </View>
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
