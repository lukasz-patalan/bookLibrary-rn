import React, { useRef, useState, useEffect } from "react";
import { View, ActivityIndicator, Keyboard, Animated } from "react-native";
import { Book } from "./Book";
import { SideBookMenu } from "./SideBookMenu";
import { NothingFound } from "./NothingFound";
import { BackToBooksCollection } from "./BackToBooksCollection";
import { emptyCollectionStyles } from "../styles";

export const BooksList = ({
    isFetchingBooks,
    books,
    handleOpenBookMenu,
    toggleMenu,
    bookSelected,
    handleCloseBookMenu,
    removeBook,
    bookId,
    filteredBooks,
    isSearching,
    backToCollection,
    searchValue,
    navigation,
}) => {
    const scrollY = useRef(new Animated.Value(0)).current;
    const ITEM_SIZE = 210;
    const [isDetailsMenuOpen, setDetailsMenuOpen] = useState(false);
    const hideMenuY = useRef(new Animated.Value(isDetailsMenuOpen ? -280 : 0))
        .current;

    const openDetailsMenu = () => {
        Animated.timing(hideMenuY, {
            toValue: isDetailsMenuOpen ? 0 : -280,
            duration: 200,
            useNativeDriver: true,
        }).start(() => {
            if (isDetailsMenuOpen) setDetailsMenuOpen(false);
        });
    };
    const transformDetailsMenuStyle = {
        transform: [
            {
                translateY: hideMenuY,
            },
        ],
    };

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
                openDetailsMenu={openDetailsMenu}
                toggleMenu={toggleMenu}
                id={item.id}
                scale={scale}
                opacity={opacity}
                setDetailsMenuOpen={setDetailsMenuOpen}
            />
        );
    };

    const handleBackToCollection = () => {
        Keyboard.dismiss();
        backToCollection();
    };
    const noResults =
        books && filteredBooks.length === 0 && isSearching && searchValue;
    useEffect(() => {
        navigation.addListener("focus", () => {
            setDetailsMenuOpen(false);
        });
    }, [navigation]);
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
                <View style={emptyCollectionStyles.wrapper}>
                    <ActivityIndicator size="large" />
                </View>
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

            {isDetailsMenuOpen && (
                <SideBookMenu
                    bookSelected={bookSelected}
                    handleCloseBookMenu={handleCloseBookMenu}
                    removeBook={removeBook}
                    bookId={bookId}
                    transformDetailsMenuStyle={transformDetailsMenuStyle}
                    openDetailsMenu={openDetailsMenu}
                    setDetailsMenuOpen={setDetailsMenuOpen}
                />
            )}
        </View>
    );
};
