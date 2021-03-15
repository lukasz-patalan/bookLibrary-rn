import React, { useEffect, useRef, useState } from "react";
import { View, Animated, TextInput, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { commentsStyles } from "../styles";
import { colors } from "../constans/theme";

export const CommentInput = () => {
    const topValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        console.log("render!!!");
        Keyboard.addListener("keyboardWillShow", keyboardWillShow);
        Keyboard.addListener("keyboardWillHide", keyboardWillHide);

        return () => {
            Keyboard.removeListener("keyboardWillShow", keyboardWillShow);
            Keyboard.removeListener("keyboardWillHide", keyboardWillHide);
        };
    }, []);
    const keyboardWillShow = (e) => {
        const keyboardHeight = e.startCoordinates.height;
        Animated.timing(topValue, {
            toValue: -keyboardHeight,
            duration: 190,
            useNativeDriver: true,
        }).start();
    };

    const keyboardWillHide = () => {
        Animated.timing(topValue, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
        }).start();
    };
    const InputStyle = {
        transform: [
            {
                translateY: topValue.interpolate({
                    inputRange: [0, 300],
                    outputRange: [0, 350],
                }),
            },
        ],
    };
    const [comment, setComment] = useState("");

    return (
        <Animated.View style={[commentsStyles.inputWrapper, InputStyle]}>
            <View>
                <TextInput
                    style={commentsStyles.input}
                    value={comment}
                    onChangeText={(value) => setComment(value)}
                    multiline={true}
                />
            </View>

            <TouchableWithoutFeedback
                style={commentsStyles.sendButton}
                onPress={Keyboard.dismiss}
            >
                <FontAwesome
                    name="send-o"
                    size={24}
                    color={colors.buttonActive}
                />
            </TouchableWithoutFeedback>
        </Animated.View>
    );
};
