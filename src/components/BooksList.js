import React, { useRef } from "react";
import { View, ActivityIndicator, Keyboard, Animated } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Book } from "./Book";
import { SideBookMenu } from "./SideBookMenu";
import { NothingFound } from "./NothingFound";
import { BackToBooksCollection } from "./BackToBooksCollection";

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
    filteredBooks,
    isSearching,
    backToCollection,
    searchValue,
}) => {
    const scrollY = useRef(new Animated.Value(0)).current;
    const ITEM_SIZE = 210;

    const renderItem = ({ item, index }) => {
        const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
        const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
        ];

        const scale = scrollY.interpolate({
            inputRange: inputRange,
            outputRange: [1, 1, 1, 0],
        });
        const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
        });
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
                scale={scale}
                opacity={opacity}
            />
        );
    };

    const handleBackToCollection = () => {
        Keyboard.dismiss();
        backToCollection();
    };
    const noResults =
        books && filteredBooks.length === 0 && isSearching && searchValue;
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <BackToBooksCollection
                handleBackToCollection={handleBackToCollection}
                isSearching={isSearching}
                searchValue={searchValue}
            />
            {noResults ? <NothingFound /> : null}
            {isFetchingBooks ? (
                <ActivityIndicator size="large" />
            ) : (
                <Animated.FlatList
                    data={books}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.title}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
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
