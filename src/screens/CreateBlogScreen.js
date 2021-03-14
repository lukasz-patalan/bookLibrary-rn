import React, { useEffect } from "react";
import { View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { connect } from "react-redux";

import { CreatePostNav } from "../components/CreatePostNav";
import { CreatePostTextArea } from "../components/CreatePostTextArea";

import {
    addNewPost,
    changePostContent,
    changePostPhoto,
} from "../actions/createBlog";
import { auth } from "../firebase/firebaseConfig";
import { createBlogStyles } from "../styles";

const CreateBlogScreen = ({
    navigation,
    postContent,
    onChangeContent,
    onChangePostPhoto,
    submitPost,
    isAddingPost,
    photoURI,
}) => {
    const userAvatar = auth?.currentUser?.photoURL;
    const userName = auth?.currentUser?.displayName;
    const isButtonDisabled = !postContent;
    const returnToDashboard = () => {
        navigation.navigate("dashboard");
        onChangeContent("");
        onChangePostPhoto("");
    };

    const handleSubmitPost = () => {
        submitPost(
            userName,
            userAvatar,
            postContent,
            photoURI,
            isAddingPost,
            () => navigation.navigate("dashboard")
        );
        onChangeContent("");
        onChangePostPhoto("");
    };

    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const {
                    status,
                } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert(
                        "BookApp needs camera roll permissions to make this work!"
                    );
                }
            }
        })();
    }, []);

    return (
        <View style={createBlogStyles.blogCreateContainer}>
            <CreatePostNav
                returnToDashboard={returnToDashboard}
                handleSubmitPost={handleSubmitPost}
                isButtonDisabled={isButtonDisabled}
                isAddingPost={isAddingPost}
                title="Create book post"
                buttonTitle="Public"
            />
            <CreatePostTextArea
                userAvatar={userAvatar}
                userName={userName}
                photoURI={photoURI}
                postContent={postContent}
                onChangeContent={onChangeContent}
                onChangePostPhoto={onChangePostPhoto}
            />
        </View>
    );
};

function mapStateToProps(state) {
    return {
        postContent: state.createBlog.postContent,
        isAddingPost: state.createBlog.isAddingPost,
        photoURI: state.createBlog.postPhotoUri,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        submitPost: (
            author,
            authorAvatar,
            content,
            photo,
            isAddingPost,
            goToDashboard
        ) =>
            dispatch(
                addNewPost(
                    author,
                    authorAvatar,
                    content,
                    photo,
                    isAddingPost,
                    goToDashboard
                )
            ),
        onChangeContent: (content) => dispatch(changePostContent(content)),
        onChangePostPhoto: (photo) => dispatch(changePostPhoto(photo)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateBlogScreen);
