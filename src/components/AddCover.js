import React, { useEffect } from "react";
import { Image, Text, Platform, View, Animated } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

import { addBookStyles } from "../styles";
import { colors } from "../constans/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AddCover({ onChangeCover, cover, bookCoverStyle }) {
    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const {
                    status,
                } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert(
                        "BookLab needs camera roll permissions to make this work!"
                    );
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });

        if (!result.cancelled) {
            onChangeCover(result.uri);
        }
    };

    return (
        <TouchableOpacity style={addBookStyles.bookCover} onPress={pickImage}>
            {!cover ? (
                <Animated.View style={bookCoverStyle}>
                    <MaterialIcons
                        name="photo-camera"
                        size={75}
                        color={colors.violetView}
                    />
                </Animated.View>
            ) : (
                <View>
                    <Image
                        source={{ uri: cover }}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 5,
                            marginLeft: 5,
                            marginTop: 15,
                        }}
                    />
                    <View style={addBookStyles.coverImageView}>
                        <MaterialIcons
                            name="zoom-out-map"
                            size={24}
                            color={colors.whiteText}
                        />
                    </View>
                </View>
            )}
            {!cover && (
                <Text style={{ color: colors.whiteText }}>Add cover</Text>
            )}
        </TouchableOpacity>
    );
}
