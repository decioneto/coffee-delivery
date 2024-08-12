import { SearchInput } from "@/components/SearchInput";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import React, { useState } from "react";
import { Text, View } from "react-native";

export function SearchField() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <View
            style={{
                backgroundColor: colors.neutral.gray100,
                paddingHorizontal: 32,
            }}
        >
            <Text
                style={{
                    color: colors.neutral.gray900,
                    fontFamily: fonts.title,
                    fontSize: 20,
                    lineHeight: 20 * 1.3,
                    paddingTop: 16,
                }}
            >
                Encontre o café perfeito para qualquer hora do dia
            </Text>
            <View style={{ paddingTop: 16, paddingBottom: 166 }}>
                <SearchInput
                    value={searchValue}
                    onChangeText={(value) => setSearchValue(value)}
                />
            </View>
        </View>
    );
}
