import React from "react";
import { View, Text } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import { colors } from "../constans/theme";
import { addBookStyles } from "../styles";

export const AddBookStatus = () => {
    return (
        <View style={{ marginTop: 20 }}>
            <Text
                style={[
                    addBookStyles.label,
                    { alignSelf: "center", marginBottom: 15 },
                ]}
            >
                Status
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 80,
                }}
            >
                <View
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: 8,
                        backgroundColor: colors.background,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Ionicons
                        name="checkmark-done"
                        size={30}
                        color={colors.whiteText}
                    />
                    <Text style={{ color: colors.whiteText }}>Read</Text>
                </View>
                <View
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: 8,
                        backgroundColor: colors.background,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <FontAwesome5
                        name="book-open"
                        size={20}
                        color={colors.whiteText}
                    />
                    <Text
                        style={{
                            color: colors.whiteText,
                            marginTop: 7,
                        }}
                    >
                        Reading
                    </Text>
                </View>
            </View>
        </View>
    );
};
