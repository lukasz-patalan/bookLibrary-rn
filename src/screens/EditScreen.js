import React, { useState, useCallback } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { View, Alert, TextInput, Image } from "react-native";
import { CreatePostNav } from "../components/CreatePostNav";
import { firestore } from "../firebase/firebaseConfig";
import { createBlogStyles, editStyles, postStyles } from "../styles";
import { colors } from "../constans/theme";

export default function EditScreen({ route, navigation }) {
    const { postContent, postId, postPhoto } = route.params;

    const [content, setContent] = useState(postContent);
    const [photoUrl, setPhotoUrl] = useState(postPhoto);
    const [isEditing, setEditing] = useState(false);

    const hasPostContentChanged =
        postContent !== content || postPhoto !== photoUrl;

    const updatePost = async () => {
        try {
            setEditing(true);
            const querySnapshot = await firestore
                .collection("posts")
                .where("id", "==", postId)
                .get();
            await querySnapshot.docs[0].ref.update({
                content: content,
                photo: photoUrl,
            });
            setEditing(false);
            navigation.navigate("dashboard");
        } catch (ex) {
            Alert.alert(ex.message);
            setEditing(false);
        }
    };
    const handleDeletePhoto = () => {
        setPhotoUrl("");
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
                {photoUrl ? (
                    <View>
                        <TextInput
                            autoFocus={true}
                            multiline={true}
                            style={[
                                createBlogStyles.createBlogInput,
                                { height: "20%" },
                            ]}
                            value={content}
                            onChangeText={setContent}
                        />
                        <View style={editStyles.closeWrapper}>
                            <TouchableWithoutFeedback
                                onPress={handleDeletePhoto}
                            >
                                <AntDesign
                                    name="close"
                                    size={24}
                                    color={colors.buttonActive}
                                />
                            </TouchableWithoutFeedback>
                        </View>
                        <Image
                            source={{ uri: photoUrl }}
                            style={postStyles.hasPhoto}
                        />
                    </View>
                ) : (
                    <TextInput
                        autoFocus={true}
                        multiline={true}
                        style={createBlogStyles.createBlogInput}
                        value={content}
                        onChangeText={setContent}
                    />
                )}
            </View>
        </View>
    );
}
