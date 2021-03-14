import React, { useState, useCallback } from "react";
import { Image } from "react-native";
import { Text, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { colors } from "../constans/theme";
import { createBlogStyles, postStyles } from "../styles";
import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { auth } from "../firebase/firebaseConfig";

export const Post = ({
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
    navigation,
}) => {
    const userUid = auth?.currentUser?.uid;
    const userPhoto = auth?.currentUser?.photoURL;
    const [hearts, setHearts] = useState(likes);
    const hasLikedPost = likedBy.filter((el) => el === userUid);
    const [isHeartSelected, setHeartSelected] = useState(!!hasLikedPost.length);

    const handleAddLike = () => {
        setHeartSelected(!isHeartSelected);
        if (!isHeartSelected) {
            setHearts(hearts + 1);
            addLike(postId, hearts + 1, userUid);
        } else if (isHeartSelected) {
            setHearts(hearts - 1);
            dislikePost(postId, hearts - 1, userUid);
        }
    };
    return (
        <View style={postStyles.postWrapper}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {authorAvatar ? (
                    <Image
                        source={{
                            uri:
                                userUid === authorUid
                                    ? userPhoto
                                    : authorAvatar,
                        }}
                        style={createBlogStyles.userIcon}
                    />
                ) : (
                    <View style={createBlogStyles.noUserIcon}>
                        <MaterialCommunityIcons
                            name="account"
                            size={30}
                            color={colors.whiteText}
                        />
                    </View>
                )}
                <View>
                    <Text style={createBlogStyles.userNameText}>{author}</Text>
                    <Text style={postStyles.dataText}>
                        {createdAt.toString()}
                    </Text>
                </View>
                {userUid === authorUid ? (
                    <View style={{ left: 170 }}>
                        <TouchableWithoutFeedback
                            onPress={useCallback(() => {
                                navigation.navigate("Edit", {
                                    postContent: content,
                                    postId: postId,
                                });
                            }, [])}
                        >
                            <MaterialIcons
                                name="edit"
                                size={24}
                                color={colors.buttonActive}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                ) : null}
            </View>
            <View style={postStyles.border} />
            {photo ? (
                <View>
                    <Text style={postStyles.contentText}>{content}</Text>
                    <Image
                        source={{ uri: photo }}
                        style={postStyles.hasPhoto}
                    />
                </View>
            ) : (
                <Text style={postStyles.contentText}>{content}</Text>
            )}
            <View style={postStyles.border} />
            <TouchableWithoutFeedback
                style={postStyles.bottomUIWrapper}
                onPress={handleAddLike}
            >
                <AntDesign
                    name={isHeartSelected ? "heart" : "hearto"}
                    size={24}
                    color={colors.darkRed}
                />
                <Text style={postStyles.likesNumberText}>{hearts}</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};
