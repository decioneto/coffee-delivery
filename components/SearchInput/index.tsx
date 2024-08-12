import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { Search } from "lucide-react-native";
import React, { useState } from "react";
import { TextInput, View } from "react-native";

type SearchInputType = {
    onChangeText?: (value: string) => void;
    value: string;
};

export function SearchInput({ onChangeText, value }: SearchInputType) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View
            style={{
                paddingHorizontal: 16,
                height: 42,
                flexDirection: "row",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colors.neutral.gray200,
                borderRadius: 4,
            }}
        >
            <Search
                size={16}
                color={isFocused ? colors.yellow : colors.neutral.gray400}
            />
            <TextInput
                style={{
                    paddingHorizontal: 16,
                    flex: 1,
                    height: "100%",
                    fontFamily: fonts.body.regular,
                    color: colors.neutral.gray900,
                }}
                placeholder="Pesquisar"
                placeholderTextColor={colors.neutral.gray400}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
}
