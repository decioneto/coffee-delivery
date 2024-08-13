import { Tag } from "@/components/Tag";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import * as images from "@/constants/images";
import { CoffeeEntity } from "@/entities/coffeeEntity";
import React from "react";
import { Text, View } from "react-native";
import { CoffeeCard } from "../CoffeeCard";

export function CoffeeList() {
    const data: ArrayLike<CoffeeEntity> | undefined = [
        {
            title: "Expresso Tradicional",
            description:
                "O tradicional café feito com água quente e grãos moídos",
            image: images["expresso"],
            price: 990,
            type: "tradicional",
        },
    ];
    return (
        <View style={{ marginHorizontal: 32, marginTop: 16 }}>
            <View style={{ flexDirection: "column", gap: 12 }}>
                <Text
                    style={{
                        fontFamily: fonts.title,
                        color: colors.neutral.gray300,
                        fontSize: 16,
                    }}
                >
                    Nossos cafés
                </Text>
                <View style={{ flexDirection: "row", gap: 8 }}>
                    <Tag title="tradicionais" />
                    <Tag title="Doces" />
                    <Tag title="Especiais" />
                </View>
            </View>
            <View style={{ marginTop: 32, flex: 1 }}>
                <CoffeeCard item={data[0]} />
            </View>
        </View>
    );
}
