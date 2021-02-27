import React from "react";
import { View, Text, ActivityIndicator, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { colors } from "../constans/theme";
import { Book } from "./Book";

export const BooksList = ({
    isFetchingBooks,
    books,
    handleOpenBookMenu,
    isBookMenuOpen,
}) => {
    const renderItem = ({ item }) => {
        return (
            <Book
                author={item.author}
                title={item.title}
                cover={item.cover}
                category={item.category}
                rate={item.rate}
                status={item.status}
                key={item.title}
                handleOpenBookMenu={handleOpenBookMenu}
            />
        );
    };
    return (
        <View
            style={{
                marginTop: 10,
                flex: 1,
            }}
        >
            {isFetchingBooks ? (
                <ActivityIndicator size="large" />
            ) : (
                <FlatList
                    data={books}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.title}
                />
            )}
            {isBookMenuOpen && (
                <View
                    style={{
                        width: "100%",
                        height: 300,
                        backgroundColor: colors.textGray,
                        borderRadius: 10,
                    }}
                />
            )}
        </View>
    );
};
