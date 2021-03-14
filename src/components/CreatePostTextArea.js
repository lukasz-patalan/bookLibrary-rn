import React from "react";
import { View, Text, Image } from "react-native";
import {
    TextInput,
    TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import { createBlogStyles } from "../styles";
import { UserName } from "./UserName";
import { colors } from "../constans/theme";

export const CreatePostTextArea = ({
    userAvatar,
    userName,
    photoURI,
    postContent,
    onChangeContent,
    onChangePostPhoto,
}) => {
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });

        if (!result.cancelled) {
            onChangePostPhoto(result.uri);
        }
    };
    const removePhoto = () => {
        onChangePostPhoto("");
    };

    return (
        <View style={createBlogStyles.textAreaWrapper}>
            <View style={createBlogStyles.userMenu}>
                <UserName avatar={userAvatar} name={userName} />
                <TouchableWithoutFeedback
                    onPress={pickImage}
                    style={createBlogStyles.pickImageButton}
                >
                    <FontAwesome
                        name="photo"
                        size={20}
                        color={colors.textGray}
                    />
                    <Text style={createBlogStyles.addPhotoText}>add photo</Text>
                </TouchableWithoutFeedback>
                {photoURI ? (
                    <TouchableWithoutFeedback
                        onPress={removePhoto}
                        style={createBlogStyles.deletePhotoButton}
                    >
                        <AntDesign
                            name="close"
                            size={24}
                            color={colors.buttonActive}
                        />
                    </TouchableWithoutFeedback>
                ) : null}
            </View>

            <TextInput
                autoFocus={true}
                multiline={true}
                style={[
                    createBlogStyles.createBlogInput,
                    photoURI ? { height: "20%" } : null,
                ]}
                value={postContent}
                onChangeText={onChangeContent}
            />

            {photoURI ? (
                <Image
                    style={createBlogStyles.postPhoto}
                    source={{ uri: photoURI }}
                />
            ) : null}
        </View>
    );
};
