import SearchInput from "@/components/SearchInput";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { StatusBar } from "expo-status-bar";
import { MapPin, ShoppingCart } from "phosphor-react-native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeScreen() {
    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: "#e4e4e4" }}>
            <ScrollView>
                <View
                    style={{
                        backgroundColor: colors.neutral.gray100,
                        padding: 32,
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                    }}
                >
                    <View style={{ flexDirection: "row", gap: 8 }}>
                        <MapPin size={20} color={colors.purple} weight="fill" />
                        <Text
                            style={{
                                color: colors.neutral.gray900,
                                fontSize: 14,
                                fontFamily: fonts.body.bold,
                            }}
                        >
                            Porto Alegre, RS
                        </Text>
                    </View>
                    <View>
                        <ShoppingCart
                            size={20}
                            color={colors.yellowDark}
                            weight="fill"
                        />
                    </View>
                </View>
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
                        <SearchInput />
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor={colors.neutral.gray100} style="light" />
        </SafeAreaView>
    );
}
