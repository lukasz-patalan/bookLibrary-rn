import React from "react";
import { Text, View, Image } from "react-native";
import { buttonStyle, colors, smallButtonStyle } from "../constans/theme";
import { dashboardStyles, settingsStyles } from "../styles";
import { Button } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
    Feather,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
} from "@expo/vector-icons";

export const Settings = ({
    userPhoto,
    pickImage,
    userName,
    userEmail,
    isButtonActive,
    handleSignOut,
    saveUpdateProfile,
    userAvatar,
}) => {
    return (
        <View
            style={[
                dashboardStyles.dashboardContainer,
                { backgroundColor: colors.darkViolet },
            ]}
        >
            {userAvatar || userPhoto ? (
                <Image
                    source={{ uri: userPhoto }}
                    style={settingsStyles.avatar}
                />
            ) : (
                <View style={settingsStyles.noAvatar}>
                    <MaterialCommunityIcons
                        name="account"
                        size={200}
                        color={colors.violetView}
                    />
                </View>
            )}
            <View style={settingsStyles.editButton}>
                <TouchableWithoutFeedback onPress={pickImage}>
                    <Feather name="edit" size={24} color="black" />
                </TouchableWithoutFeedback>
            </View>
            <Text style={settingsStyles.title}>Your data</Text>
            <View style={settingsStyles.dataWrapper}>
                <View style={settingsStyles.dataRow}>
                    <MaterialCommunityIcons
                        name="account"
                        size={24}
                        color={colors.whiteText}
                        style={settingsStyles.icon}
                    />
                    <Text style={settingsStyles.dataText}>{userName}</Text>
                </View>
                <View style={settingsStyles.dataRow}>
                    <MaterialIcons
                        name="email"
                        size={24}
                        color={colors.whiteText}
                        style={settingsStyles.icon}
                    />
                    <Text style={settingsStyles.dataText}>{userEmail}</Text>
                </View>
            </View>
            <View style={settingsStyles.buttonWrapper}>
                <Button
                    buttonStyle={smallButtonStyle}
                    title="Save"
                    disabled={!isButtonActive}
                    onPress={saveUpdateProfile}
                />
                <Button
                    buttonStyle={[buttonStyle, { marginTop: 40 }]}
                    title="Sign out"
                    onPress={handleSignOut}
                    icon={() => (
                        <FontAwesome
                            name="sign-out"
                            size={24}
                            color={colors.whiteText}
                        />
                    )}
                />
            </View>
        </View>
    );
};
