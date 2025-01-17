import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { colors } from "../constans/theme";

import { smallButtonStyle } from "../constans/theme";
import { createBlogStyles } from "../styles";

export const CreatePostNav = ({
    returnToDashboard,
    handleSubmitPost,
    isButtonDisabled,
    isAddingPost,
    title,
    buttonTitle,
}) => {
    return (
        <View style={createBlogStyles.createBlogNav}>
            <TouchableWithoutFeedback onPress={returnToDashboard}>
                <AntDesign name="close" size={24} color={colors.whiteText} />
            </TouchableWithoutFeedback>
            <Text style={createBlogStyles.headerNav}>{title}</Text>
            <Button
                buttonStyle={smallButtonStyle}
                onPress={handleSubmitPost}
                title={buttonTitle}
                disabled={isButtonDisabled}
                loading={isAddingPost}
            />
        </View>
    );
};
