import React from "react";
import { View, Text, TextInput } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Foundation, Entypo } from "@expo/vector-icons";

import { colors } from "../constans/theme";
import { addBookStyles } from "../styles";
import AddCover from "./AddCover";

export const AddbookFirstSection = ({
    onChangeAuthor,
    onChangeTitle,
    onChangeCategory,
    onChangeCover,
    author,
    title,
    cover,
    category,
    bookCoverStyle,
}) => {
    return (
        <View>
            <View style={addBookStyles.container}>
                <View style={addBookStyles.firstSectionWrapper}>
                    <Foundation
                        name="pencil"
                        size={24}
                        color={colors.whiteText}
                    />
                </View>
                <View style={addBookStyles.insideFirstSection}>
                    <View style={addBookStyles.coverWrapper}>
                        <AddCover
                            onChangeCover={onChangeCover}
                            cover={cover}
                            bookCoverStyle={bookCoverStyle}
                        />
                    </View>
                    <View>
                        <View>
                            <Text style={addBookStyles.label}>Author</Text>
                            <TextInput
                                style={addBookStyles.input}
                                onChangeText={onChangeAuthor}
                                value={author}
                            />
                        </View>
                        <View style={{ marginBottom: 20 }} />
                        <View>
                            <Text style={addBookStyles.label}>Title</Text>
                            <TextInput
                                style={addBookStyles.input}
                                onChangeText={onChangeTitle}
                                value={title}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <RNPickerSelect
                        placeholder={{ label: "Choose book category" }}
                        value={category}
                        onValueChange={onChangeCategory}
                        style={{
                            inputIOS: addBookStyles.inputSelect,
                            placeholder: {
                                color: colors.whiteText,
                            },
                        }}
                        items={[
                            { label: "Horror", value: "Horror" },
                            { label: "Thriller", value: "Thriller" },
                            { label: "Love", value: "Love" },
                            { label: "Weird Fiction", value: "Weird fiction" },

                            {
                                label: "Science Fiction",
                                value: "Science Fiction",
                            },
                            { label: "Drama", value: "Drama" },
                        ]}
                    />
                    <Entypo
                        name="select-arrows"
                        size={15}
                        color={colors.whiteText}
                        style={{ position: "absolute", right: 90, top: 16 }}
                    />
                </View>
            </View>
        </View>
    );
};
