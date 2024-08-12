import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";

type PillType = {
    title: string;
    onPress?: (event: GestureResponderEvent) => void;
    active?: boolean;
};

export function Tag({ title, onPress, active }: PillType) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 100,
                backgroundColor: active ? colors.purple : "transparent",
                borderWidth: 1,
                borderColor: colors.purple,
            }}
        >
            <Text
                style={{
                    fontFamily: fonts.body.bold,
                    textTransform: "uppercase",
                    fontSize: 10,
                    color: active ? colors.neutral.gray900 : colors.purpleDark,
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}
