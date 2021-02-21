import React from "react";
import { View, Text, TextInput } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../constans/theme";
import { addBookStyles } from "../styles";

export const AddbookFirstSection = () => {
    return (
        <View style={addBookStyles.container}>
            <View>
                <Text style={[addBookStyles.label, { alignSelf: "center" }]}>
                    Book cover
                </Text>
                <View style={addBookStyles.bookCover}>
                    <MaterialIcons
                        name="photo-camera"
                        size={55}
                        color={colors.background}
                    />
                    <Text style={{ color: colors.buttonActive }}>
                        Add cover
                    </Text>
                </View>
            </View>
            <View>
                <View>
                    <Text style={addBookStyles.label}>Author</Text>
                    <TextInput style={addBookStyles.input} />
                </View>
                <View style={{ marginBottom: 20 }} />
                <View>
                    <Text style={addBookStyles.label}>Title</Text>
                    <TextInput style={addBookStyles.input} />
                </View>
                <View style={{ marginBottom: 20 }} />
                <Text style={addBookStyles.label}>Category</Text>
                <RNPickerSelect
                    placeholder={{ label: "Choose book category..." }}
                    onValueChange={(value) => console.log(value)}
                    style={{
                        inputIOS: addBookStyles.inputSelect,
                        placeholder: {
                            color: colors.buttonActive,
                        },
                    }}
                    items={[
                        { label: "Football", value: "football" },
                        { label: "Baseball", value: "baseball" },
                        { label: "Hockey", value: "hockey" },
                    ]}
                />
                <MaterialIcons
                    name="arrow-drop-down"
                    size={30}
                    color={colors.buttonActive}
                    style={addBookStyles.selectIcon}
                />
            </View>
        </View>
    );
};
