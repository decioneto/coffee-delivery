import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { MapPin, ShoppingCart } from "phosphor-react-native";
import React from "react";
import { Text, View } from "react-native";

export function Header() {
    return (
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
    );
}
