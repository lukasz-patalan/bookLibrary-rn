import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { colors } from "../constans/theme";
import { addBookStyles } from "../styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const RateBook = ({ onChangeRate, rate }) => {
    console.log(rate);
    return (
        <View style={addBookStyles.rateView}>
            <Text
                style={[
                    addBookStyles.label,
                    { alignSelf: "center", marginTop: 10 },
                ]}
            >
                Rate the book
            </Text>
            <View style={addBookStyles.rateContainer}>
                <TouchableWithoutFeedback onPress={() => onChangeRate(1)}>
                    <AntDesign
                        name="staro"
                        size={40}
                        color={colors.whiteText}
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => onChangeRate(2)}>
                    <AntDesign
                        name="staro"
                        size={40}
                        color={colors.whiteText}
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => onChangeRate(3)}>
                    <AntDesign
                        name="staro"
                        size={40}
                        color={colors.whiteText}
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => onChangeRate(4)}>
                    <AntDesign
                        name="staro"
                        size={40}
                        color={colors.whiteText}
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => onChangeRate(5)}>
                    <AntDesign
                        name="staro"
                        size={40}
                        color={colors.whiteText}
                    />
                </TouchableWithoutFeedback>
            </View>
            <Text
                style={[
                    addBookStyles.label,
                    { alignSelf: "center", marginTop: 25 },
                ]}
            >
                very good!
            </Text>
        </View>
    );
};
