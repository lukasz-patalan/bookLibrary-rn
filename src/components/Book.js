import React from "react";
import { View, Text, Image } from "react-native";
import {
    Octicons,
    MaterialCommunityIcons,
    FontAwesome,
    Ionicons,
    FontAwesome5,
    AntDesign,
    Entypo,
} from "@expo/vector-icons";

import { colors } from "../constans/theme";
import { booksCollection } from "../styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Book = ({
    author,
    title,
    cover,
    category,
    rate,
    status,
    handleOpenBookMenu,
    toggleMenu,
    id,
}) => {
    const isReadingStatus = status === "Reading";
    const onPressSideMenu = (book) => {
        handleOpenBookMenu();
        toggleMenu(book, id);
    };
    return (
        <View style={booksCollection.bookView}>
            {cover ? (
                <Image source={{ uri: cover }} style={booksCollection.cover} />
            ) : (
                <View
                    style={[
                        booksCollection.cover,
                        { justifyContent: "center", alignItems: "center" },
                    ]}
                >
                    <Entypo
                        name="open-book"
                        size={80}
                        color={colors.darkViolet}
                    />
                </View>
            )}
            <View>
                <AntDesign
                    name="star"
                    size={55}
                    color={colors.buttonActive}
                    style={booksCollection.starIcon}
                />
                <Text style={booksCollection.starText}>{rate}</Text>
            </View>
            <View style={booksCollection.detailsView}>
                <View style={{ width: 240 }}>
                    <TouchableOpacity onPress={() => onPressSideMenu(title)}>
                        <Octicons
                            name="kebab-horizontal"
                            size={24}
                            color={colors.buttonActive}
                            style={booksCollection.kebabIcon}
                        />
                    </TouchableOpacity>
                    <View style={booksCollection.titleWrapper}>
                        <FontAwesome
                            name="book"
                            size={18}
                            color={colors.whiteText}
                            style={booksCollection.icon}
                        />
                        <Text style={booksCollection.titleText}>{title}</Text>
                    </View>

                    <View style={booksCollection.itemWrapper}>
                        <MaterialCommunityIcons
                            name="account-edit"
                            size={20}
                            color={colors.whiteText}
                            style={booksCollection.icon}
                        />
                        <Text style={booksCollection.itemText}>{author}</Text>
                    </View>

                    <View style={booksCollection.categoryWrapper}>
                        <AntDesign
                            name="pushpin"
                            size={16}
                            color={colors.whiteText}
                            style={booksCollection.icon}
                        />
                        <Text style={booksCollection.itemText}>{category}</Text>
                    </View>
                    <View style={booksCollection.statusWrapper}>
                        {isReadingStatus ? (
                            <FontAwesome5
                                name="book-open"
                                size={16}
                                color={colors.textGray}
                                style={booksCollection.icon}
                            />
                        ) : (
                            <Ionicons
                                name="checkmark-done"
                                size={20}
                                color={colors.markedGreen}
                                style={{ marginRight: 10 }}
                            />
                        )}
                        <Text
                            style={
                                ([booksCollection.itemText],
                                {
                                    color: isReadingStatus
                                        ? colors.textGray
                                        : colors.markedGreen,
                                })
                            }
                        >
                            {status}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
