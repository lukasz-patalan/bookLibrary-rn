import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../constans/theme";
import { commentsStyles } from "../styles";

export const Comment = ({ authorAvatar, author, comment }) => {
    return (
        <View style={commentsStyles.commentWrapper}>
            <View>
                {authorAvatar ? (
                    <Image
                        source={{ uri: authorAvatar }}
                        style={commentsStyles.userImage}
                    />
                ) : (
                    <View style={commentsStyles.userNoImage}>
                        <MaterialCommunityIcons
                            name="account"
                            size={30}
                            color={colors.whiteText}
                        />
                    </View>
                )}
            </View>
            <View style={commentsStyles.contentWrapper}>
                <View>
                    <Text style={commentsStyles.authorText}>{author}</Text>
                    <Text style={commentsStyles.commentText}>{comment}</Text>
                </View>
            </View>
        </View>
    );
};
