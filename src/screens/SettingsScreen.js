import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { auth } from "../firebase/firebaseConfig";

import { StackActions } from "@react-navigation/native";

import { Settings } from "../components/Settings";

export const SettingsScreen = ({ navigation }) => {
    const userAvatar = auth?.currentUser?.photoURL;
    const userName = auth?.currentUser?.displayName;
    const userEmail = auth?.currentUser?.email;
    const [userPhoto, setUserPhoto] = useState(userAvatar);
    const [isButtonActive, setButtonActive] = useState(false);
    useEffect(() => {
        navigation.addListener("focus", async () => {
            setUserPhoto(auth?.currentUser?.photoURL);
        });
        (async () => {
            if (Platform.OS !== "web") {
                const {
                    status,
                } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert(
                        "BookApp needs camera roll permissions to make this work!"
                    );
                }
            }
        })();
    }, [navigation]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });

        if (!result.cancelled) {
            setUserPhoto(result.uri);
            setButtonActive(true);
        }
    };

    const saveUpdateProfile = async () => {
        await auth.currentUser.updateProfile({
            photoURL: userPhoto,
        });
        navigation.navigate("dashboard");
        setButtonActive(false);
    };

    const handleSignOut = async () => {
        await auth.signOut();
        await AsyncStorage.removeItem("logged");
        navigation.navigate("Signin");
        navigation.goBack();
        StackActions.replace("dashboard");
    };
    return (
        <Settings
            userPhoto={userPhoto}
            pickImage={pickImage}
            userName={userName}
            userEmail={userEmail}
            isButtonActive={isButtonActive}
            handleSignOut={handleSignOut}
            saveUpdateProfile={saveUpdateProfile}
            userAvatar={userAvatar}
        />
    );
};
