import React from "react";
import { View, Text } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import { colors } from "../constans/theme";
import { addBookStyles } from "../styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const AddBookStatus = ({ onChangeStatus, status }) => {
    const isReadingStatus = status === "Reading";
    const isReadStatus = status === "Read";
    const setReadStatus = () => {
        onChangeStatus("Read");
    };
    const setReadingStatus = () => {
        onChangeStatus("Reading");
    };
    return (
        <View style={{ marginTop: 30 }}>
            <Text
                style={[
                    addBookStyles.label,
                    { alignSelf: "center", marginBottom: 15 },
                ]}
            >
                Status
            </Text>
            <View style={addBookStyles.statusView}>
                <TouchableWithoutFeedback
                    style={addBookStyles.statusContainer}
                    onPress={setReadStatus}
                >
                    <Ionicons
                        name="checkmark-done"
                        size={30}
                        color={
                            isReadStatus ? colors.markedGreen : colors.whiteText
                        }
                    />
                    <Text
                        style={{
                            color: isReadStatus
                                ? colors.markedGreen
                                : colors.whiteText,
                        }}
                    >
                        Read
                    </Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    style={addBookStyles.starsWrapper}
                    onPress={setReadingStatus}
                >
                    <FontAwesome5
                        name="book-open"
                        size={20}
                        color={
                            isReadingStatus
                                ? colors.markedGreen
                                : colors.whiteText
                        }
                    />
                    <Text
                        style={{
                            color: isReadingStatus
                                ? colors.markedGreen
                                : colors.whiteText,
                        }}
                    >
                        Reading
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};
