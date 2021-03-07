import React from "react";
import { View, Text, Animated } from "react-native";
import { colors } from "../constans/theme";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { sideBookMenuStyles } from "../styles";

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
                {`"${bookSelected}"`}
            </Text>
            <View style={sideBookMenuStyles.menuItemsWrapper}>
                <TouchableOpacity style={sideBookMenuStyles.editWrapper}>
                    <AntDesign
                        name="edit"
                        size={24}
                        color={colors.buttonActive}
                        style={{ marginRight: 10 }}
                    />
                    <Text style={sideBookMenuStyles.editText}>
                        Edit details
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleRemoveBook}
                    style={sideBookMenuStyles.deleteWrapper}
                >
                    <MaterialIcons
                        name="delete"
                        size={25}
                        color={colors.buttonActive}
                        style={{ marginRight: 5 }}
                    />
                    <Text style={sideBookMenuStyles.deleteText}>
                        Delete book
                    </Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};
