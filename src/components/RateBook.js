import React, { useState, useCallback } from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { colors, fontSize } from "../constans/theme";
import { addBookStyles } from "../styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const RateBook = ({ onChangeRate, rate }) => {
    const [firstStarClicked, setFirstStar] = useState(false);

    const firstStarSelected =
        rate === 1 || rate === 2 || rate === 3 || rate === 4 || rate === 5;

    const secondStarSelected =
        rate === 2 || rate === 3 || rate === 4 || rate === 5;

    const thirdStarSelected = rate === 3 || rate === 4 || rate === 5;

    const fourthStarSelected = rate === 4 || rate === 5;

    const fifthStarSelected = rate === 5;

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
                <TouchableWithoutFeedback
                    onPress={useCallback(() => {
                        onChangeRate(1);
                    }, [])}
                >
                    <AntDesign
                        name={firstStarSelected ? "star" : "staro"}
                        size={45}
                        color={
                            firstStarSelected
                                ? colors.buttonActive
                                : colors.whiteText
                        }
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={useCallback(() => {
                        onChangeRate(2);
                    }, [])}
                >
                    <AntDesign
                        name={secondStarSelected ? "star" : "staro"}
                        size={45}
                        color={
                            secondStarSelected
                                ? colors.buttonActive
                                : colors.whiteText
                        }
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={useCallback(() => {
                        onChangeRate(3);
                    }, [])}
                >
                    <AntDesign
                        name={thirdStarSelected ? "star" : "staro"}
                        size={45}
                        color={
                            thirdStarSelected
                                ? colors.buttonActive
                                : colors.whiteText
                        }
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={useCallback(() => {
                        onChangeRate(4);
                    }, [])}
                >
                    <AntDesign
                        name={fourthStarSelected ? "star" : "staro"}
                        size={45}
                        color={
                            fourthStarSelected
                                ? colors.buttonActive
                                : colors.whiteText
                        }
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={useCallback(() => {
                        onChangeRate(5);
                    }, [])}
                >
                    <AntDesign
                        name={fifthStarSelected ? "star" : "staro"}
                        size={45}
                        color={
                            fifthStarSelected
                                ? colors.buttonActive
                                : colors.whiteText
                        }
                    />
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};
