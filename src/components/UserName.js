import React from "react";
import { Text, View, Image } from "react-native";
import { createBlogStyles } from "../styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { colors } from "../constans/theme";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const UserName = ({ avatar, name, signout }) => {
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
            {signout && (
                <TouchableWithoutFeedback onPress={signout}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 15,
                            marginTop: 10,
                            zIndex: 1,
                        }}
                    >
                        <Feather
                            name="power"
                            size={24}
                            color={colors.buttonActive}
                        />
                    </View>
                </TouchableWithoutFeedback>
            )}
        </View>
    );
};
