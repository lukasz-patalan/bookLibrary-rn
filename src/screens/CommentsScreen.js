import React from "react";
import { View, Text, Keyboard, Image } from "react-native";
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

const CommentsScreen = ({ route, navigation: { goBack }, hasSentComment }) => {
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
                authorAvatar={item.authorAvatar}
                author={item.author}
                comment={item.comment}
            />
        );
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
                        onPress={goBack}
                    >
                        <Ionicons
                            name="caret-back-outline"
                            size={15}
                            color={colors.buttonActive}
                        />
                        <Text style={commentsStyles.backText}>Back</Text>
                    </TouchableWithoutFeedback>
                </View>
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
                    updateCellsBatchingPeriod={4000}
                />
                <CommentInput postId={postId} fetchPosts={fetchPosts} />
            </View>
        </DismissKeyboard>
    );
};

function mapStateToProps(state) {
    return {
        comment: state.comments.comment,
    };
}

export default connect(mapStateToProps, null)(CommentsScreen);
