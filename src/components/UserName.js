import React from "react";
import { Text, View, Image } from "react-native";
import { createBlogStyles } from "../styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../constans/theme";

export const UserName = ({ avatar, name }) => {
    return (
        <View style={createBlogStyles.nameWrapper}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {avatar ? (
                    <Image
                        source={{ uri: avatar }}
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
                    <Text style={createBlogStyles.userNameText}>{name}</Text>
                </View>
            </View>
        </View>
    );
};
