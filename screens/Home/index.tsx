import { Header } from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeScreen() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: "#e4e4e4" }}>
            <ScrollView>
                <Header />
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
            </ScrollView>
            <StatusBar backgroundColor={colors.neutral.gray100} style="light" />
        </SafeAreaView>
    );
}
