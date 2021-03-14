import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../constans/theme";
import { Entypo } from "@expo/vector-icons";

export function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View
            style={{
                flexDirection: "row",
                backgroundColor: colors.postViolet,
                height: 85,
                justifyContent: "space-around",
                alignItems: "center",
                paddingBottom: 15,
                shadowColor: "#000",
                shadowOffset: {
                    width: 1,
                    height: -5,
                },
                shadowOpacity: 0.3,
                shadowRadius: 6.27,
            }}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={label}
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ["selected"] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            alignItems: "center",
                            marginVertical: 5,
                            width: 60,
                            height: 50,
                            justifyContent: "center",
                            borderRadius: 100,
                            backgroundColor: isFocused
                                ? colors.violetView
                                : colors.postViolet,
                        }}
                    >
                        {route.name === "dashboard" ? (
                            <Entypo
                                name="home"
                                size={30}
                                color="black"
                                style={{
                                    color: isFocused
                                        ? colors.buttonActive
                                        : colors.whiteText,
                                }}
                            />
                        ) : null}
                        {route.name === "book collection" ? (
                            <Entypo
                                name="book"
                                size={30}
                                color="black"
                                style={{
                                    color: isFocused
                                        ? colors.buttonActive
                                        : colors.whiteText,
                                }}
                            />
                        ) : null}
                        {route.name === "add book" ? (
                            <Entypo
                                name="add-to-list"
                                size={30}
                                style={{
                                    color: isFocused
                                        ? colors.buttonActive
                                        : colors.whiteText,
                                }}
                            />
                        ) : null}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
