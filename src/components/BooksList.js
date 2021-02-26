import React from "react";
import { View, Text, ActivityIndicator, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Book } from "./Book";

export const BooksList = ({ isFetchingBooks, books }) => {
    const renderItem = ({ item }) => {
        return (
            <Book
                author={item.author}
                title={item.title}
                cover={item.cover}
                category={item.category}
                rate={item.rate}
                status={item.status}
            />
        );
    };
    return (
        <View style={{ marginTop: 20 }}>
            {isFetchingBooks ? (
                <ActivityIndicator size="large" />
            ) : (
                <SafeAreaView>
                    <FlatList
                        data={books}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.name}
                    />
                </SafeAreaView>
            )}
        </View>
    );
};
