import React, { useState, useCallback } from "react";
import { View, Alert, TextInput } from "react-native";
import { CreatePostNav } from "../components/CreatePostNav";
import { firestore } from "../firebase/firebaseConfig";
import { createBlogStyles } from "../styles";

export default function EditScreen({ route, navigation }) {
    const { postContent, postId } = route.params;
    const [content, setContent] = useState(postContent);
    const [isEditing, setEditing] = useState(false);
    const hasPostContentChanged = postContent !== content;
    const updatePost = async () => {
        try {
            setEditing(true);
            const querySnapshot = await firestore
                .collection("posts")
                .where("id", "==", postId)
                .get();
            await querySnapshot.docs[0].ref.update({
                content: content,
            });
            setEditing(false);
            navigation.navigate("dashboard");
        } catch (ex) {
            Alert.alert(ex.message);
            setEditing(false);
        }
    };

    return (
        <View style={createBlogStyles.blogCreateContainer}>
            <CreatePostNav
                title="Edit post"
                buttonTitle="Save"
                handleSubmitPost={updatePost}
                isButtonDisabled={!hasPostContentChanged}
                isAddingPost={isEditing}
                returnToDashboard={useCallback(
                    () => navigation.navigate("dashboard"),
                    []
                )}
            />
            <View style={{ marginHorizontal: 20 }}>
                <TextInput
                    autoFocus={true}
                    multiline={true}
                    style={createBlogStyles.createBlogInput}
                    value={content}
                    onChangeText={setContent}
                />
            </View>
        </View>
    );
}
