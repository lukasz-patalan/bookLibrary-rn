import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonStyle, colors, fontSize } from "../constans/theme";
import { menuStyles } from "../styles";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { auth } from "../firebase/firebaseConfig";
export const Menu = ({ navigation }) => {
    const navigationIndex = navigation.state.index;
    const getColor = (index) => {
        if (navigationIndex === index) {
            return colors.buttonActive;
        } else {
            return colors.whiteText;
        }
    };
    const handleSignOut = async () => {
        await auth.signOut();
        await AsyncStorage.removeItem("email");
        await AsyncStorage.removeItem("password");

        navigation.navigate("loginFlow");
    };
    return (
        <View style={menuStyles.container}>
            <View style={menuStyles.title}>
                <Image
                    style={{ width: 80, height: 80 }}
                    source={require("../assets/logo.png")}
                />
                <Text
                    style={{
                        color: colors.buttonActive,
                        fontSize: fontSize.Xlarge,
                    }}
                >
                    BookApp
                </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                <View style={menuStyles.itemSet}>
                    <MaterialCommunityIcons
                        name="view-dashboard"
                        size={24}
                        color={getColor(0)}
                    />
                    <Text
                        style={[
                            menuStyles.item,
                            {
                                color: getColor(0),
                            },
                        ]}
                    >
                        Dashboard
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("BooksCollection")}
            >
                <View style={menuStyles.itemSet}>
                    <MaterialCommunityIcons
                        name="bookshelf"
                        size={24}
                        color={getColor(1)}
                    />
                    <Text style={[menuStyles.item, { color: getColor(1) }]}>
                        Books collection
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("AddBook")}>
                <View style={menuStyles.itemSet}>
                    <Entypo name="add-to-list" size={24} color={getColor(2)} />
                    <Text style={[menuStyles.item, { color: getColor(2) }]}>
                        Add new book
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={menuStyles.itemSet}>
                    <MaterialCommunityIcons
                        name="filter-outline"
                        size={24}
                        color={colors.whiteText}
                    />
                    <Text style={menuStyles.item}>Find book to read</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={menuStyles.itemSet}>
                    <MaterialCommunityIcons
                        name="account"
                        size={24}
                        color={colors.whiteText}
                    />
                    <Text style={menuStyles.item}>Account settings</Text>
                </View>
            </TouchableOpacity>
            <View style={{ paddingTop: 10, paddingBottom: 20 }}>
                <Button
                    buttonStyle={buttonStyle}
                    onPress={handleSignOut}
                    title="Sign out"
                />
            </View>
        </View>
    );
};
