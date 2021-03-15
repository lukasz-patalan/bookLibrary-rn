import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../constans/theme";

export const Comment = ({ authorAvatar, author, comment }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
                marginTop: 20,
            }}
        >
            <View>
                {authorAvatar ? (
                    <Image
                        source={{ uri: authorAvatar }}
                        style={{ borderRadius: 100, width: 50, height: 50 }}
                    />
                ) : (
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: colors.textGray,
                            borderRadius: 100,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <MaterialCommunityIcons
                            name="account"
                            size={30}
                            color={colors.whiteText}
                        />
                    </View>
                )}
            </View>
            <View
                style={{
                    backgroundColor: colors.violetView,
                    marginLeft: 10,
                    minHeight: 60,
                    width: 300,
                    borderRadius: 12,
                    paddingLeft: 10,
                    paddingTop: 10,
                }}
            >
                <View>
                    <Text
                        style={{
                            fontWeight: "bold",
                            color: colors.textGray,
                        }}
                    >
                        {author}
                    </Text>
                    <Text style={{ marginTop: 5, color: colors.whiteText }}>
                        {comment}
                    </Text>
                </View>
            </View>
        </View>
    );
};
