import React from "react";
import { View, Text, TextInput } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { MaterialIcons, Foundation } from "@expo/vector-icons";

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
}) => {
    console.log(category);
    return (
        <View>
            <View style={addBookStyles.container}>
                <View
                    style={{
                        position: "absolute",
                        backgroundColor: colors.buttonActive,
                        paddingVertical: 5,
                        paddingHorizontal: 8,
                        borderRadius: 50,
                        top: 15,
                        left: 15,
                        zIndex: 1,
                    }}
                >
                    <Foundation
                        name="pencil"
                        size={24}
                        color={colors.whiteText}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                    }}
                >
                    <View
                        style={{
                            justifyContent: "center",
                            height: 100,
                            marginTop: 50,
                        }}
                    >
                        <AddCover onChangeCover={onChangeCover} cover={cover} />
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
                        placeholder={{ label: "Choose book category..." }}
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
                            {
                                label: "Science Fiction",
                                value: "Science Fiction",
                            },
                            { label: "Drama", value: "Drama" },
                        ]}
                    />
                </View>
            </View>
            {/* 
            <MaterialIcons
                name="arrow-drop-down"
                size={30}
                color={colors.buttonActive}
                style={addBookStyles.selectIcon}
            /> */}
        </View>
    );
};
