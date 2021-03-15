import React from "react";
import { View, Text, Keyboard } from "react-native";
import { Post } from "../components/Post";
import { colors } from "../constans/theme";
import { Ionicons } from "@expo/vector-icons";

import { commentsStyles, dashboardStyles } from "../styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { CommentInput } from "../components/CommentInput";

export const CommentsScreen = ({ route, navigation: { goBack } }) => {
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
    } = route.params;

    const DismissKeyboard = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
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
                <CommentInput />
            </View>
        </DismissKeyboard>
    );
};
