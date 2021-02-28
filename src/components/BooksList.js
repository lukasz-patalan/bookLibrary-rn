import React, { useState } from "react";
import { View, Text, ActivityIndicator, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { colors } from "../constans/theme";
import { Book } from "./Book";
import { SideBookMenu } from "./SideBookMenu";

export const BooksList = ({
    isFetchingBooks,
    books,
    handleOpenBookMenu,
    isBookMenuOpen,
    toggleMenu,
    bookSelected,
    handleCloseBookMenu,
    removeBook,
    bookId,
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
                toggleMenu={toggleMenu}
                id={item.id}
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
                <SideBookMenu
                    bookSelected={bookSelected}
                    handleCloseBookMenu={handleCloseBookMenu}
                    removeBook={removeBook}
                    bookId={bookId}
                />
            )}
        </View>
    );
};
