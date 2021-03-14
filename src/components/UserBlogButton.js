import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { auth } from "../firebase/firebaseConfig";

import { UserName } from "./UserName";

import { colors } from "../constans/theme";
import { createBlogStyles } from "../styles";

export const UserBlogButton = ({ navigation, signout }) => {
    const userAvatar = auth?.currentUser?.photoURL;
    const userName = auth?.currentUser?.displayName;

    const goToCreateBlog = () => {
        navigation.navigate("CreateBlog");
    };
    return (
        <TouchableWithoutFeedback
            style={createBlogStyles.container}
            onPress={goToCreateBlog}
        >
            <UserName avatar={userAvatar} name={userName} signout={signout} />
            <View style={createBlogStyles.helloWrapper}>
                <Feather name="edit" size={20} color={colors.whiteText} />
                <Text style={createBlogStyles.helloText}>
                    Did you read something last time?
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
};
