import React from "react";
import { View, Text, TextInput } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { MaterialIcons } from "@expo/vector-icons";

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
                        justifyContent: "center",
                        paddingBottom: 5,
                        paddingLeft: 5,
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
                    <View style={{ marginBottom: 40 }} />
                </View>
            </View>
            <RNPickerSelect
                placeholder={{ label: "Choose book category..." }}
                onValueChange={onChangeCategory}
                style={{
                    inputIOS: addBookStyles.inputSelect,
                    placeholder: {
                        color: colors.buttonActive,
                    },
                }}
                items={[
                    { label: "Horror", value: "Horror" },
                    { label: "Thriller", value: "Thriller" },
                    { label: "Love", value: "Love" },
                    { label: "Science Fiction", value: "Science Fiction" },
                    { label: "Drama", value: "Drama" },
                ]}
            />
            <MaterialIcons
                name="arrow-drop-down"
                size={30}
                color={colors.buttonActive}
                style={addBookStyles.selectIcon}
            />
        </View>
    );
};
