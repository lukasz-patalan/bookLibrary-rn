import React from "react";
import { View, Text, Animated } from "react-native";
import { colors, smallButtonStyle } from "../constans/theme";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { sideBookMenuStyles } from "../styles";
import { Button } from "react-native-elements";

export const SideBookMenu = ({
    bookSelected,
    removeBook,
    bookId,
    transformDetailsMenuStyle,
    openDetailsMenu,
    setDetailsMenuOpen,
}) => {
    const handleRemoveBook = () => {
        setDetailsMenuOpen(false);
        removeBook(bookId);
    };

    const handleCloseSideMenu = () => {
        openDetailsMenu();
    };
    return (
        <Animated.View
            style={[sideBookMenuStyles.wrapper, transformDetailsMenuStyle]}
        >
            <View style={sideBookMenuStyles.closeWrapper}>
                <TouchableOpacity onPress={handleCloseSideMenu}>
                    <AntDesign
                        name="close"
                        size={24}
                        color={colors.buttonActive}
                    />
                </TouchableOpacity>
            </View>
            <Text style={sideBookMenuStyles.titleWrapper}>
                {`Do you want delete "${bookSelected}" ?`}
            </Text>
            <View style={sideBookMenuStyles.menuItemsWrapper}>
                <Button
                    onPress={handleRemoveBook}
                    title="Yes"
                    buttonStyle={smallButtonStyle}
                />
            </View>
        </Animated.View>
    );
};
