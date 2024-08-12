import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { CoffeeEntity } from "@/entities/coffeeEntity";
import React from "react";
import { Image, Text, View } from "react-native";

type CoffeeCardType = {
    item: CoffeeEntity;
};

export function CoffeeCard({ item }: CoffeeCardType) {
    function formatPrice(price: number) {
        return (price / 100).toFixed(2).replace(".", ",");
    }

    return (
        <View
            style={{
                flexDirection: "row",
                width: "100%",
                gap: 8,
                backgroundColor: colors.neutral.gray800,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 36,
                borderBottomLeftRadius: 36,
                borderBottomRightRadius: 6,
                padding: 16,
                borderWidth: 1,
                borderColor: colors.neutral.gray700,
                shadowColor: "#000",
                shadowOffset: {
                    height: 1.6,
                    width: 0,
                },
                shadowOpacity: 0.05,
                shadowRadius: 6.4,
                elevation: 1,
            }}
        >
            <View style={{ marginTop: -32 }}>
                <Image source={item.image} />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: fonts.title, fontSize: 16 }}>
                    {item.title}
                </Text>
                <Text style={{ color: colors.neutral.gray400, fontSize: 14 }}>
                    {item.description}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        gap: 4,
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: fonts.body.regular,
                            fontSize: 14,
                            color: colors.yellowDark,
                        }}
                    >
                        R$
                    </Text>
                    <Text
                        style={{
                            fontFamily: fonts.title,
                            fontSize: 20,
                            color: colors.yellowDark,
                        }}
                    >
                        {formatPrice(item.price)}
                    </Text>
                </View>
            </View>
        </View>
    );
}
