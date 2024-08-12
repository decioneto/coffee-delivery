import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { CoffeeEntity } from "@/entities/coffeeEntity";
import React from "react";
import { Image, Text, View } from "react-native";

type CarouselCardType = {
    item: CoffeeEntity;
    index: number;
    length: number;
};

export function CarouselCard({ item, index, length }: CarouselCardType) {
    function formatPrice(price: number) {
        return (price / 100).toFixed(2).replace(".", ",");
    }

    return (
        <View
            style={{
                width: 208,
                marginLeft: index === 0 ? 32 : 16,
                marginRight: index === length - 1 ? 16 : 0,
                transform: [
                    {
                        scale: index === 0 ? 1 : 0.8,
                    },
                ],
            }}
        >
            <View
                style={{
                    alignItems: "center",
                }}
            >
                <Image
                    source={item.image}
                    style={{
                        width: 120,
                        height: 120,
                        marginBottom: -80,
                        zIndex: 1,
                    }}
                />
                <View
                    style={{
                        backgroundColor: colors.neutral.gray800,
                        borderWidth: 0.8,
                        borderColor: colors.neutral.gray700,
                        shadowColor: "#000",
                        shadowOffset: {
                            height: 1.6,
                            width: 0,
                        },
                        shadowOpacity: 0.05,
                        shadowRadius: 6.4,
                        elevation: 1,
                        paddingBottom: 20,
                        paddingHorizontal: 16,
                        paddingTop: 80,
                        borderTopRightRadius: 36,
                        borderTopLeftRadius: 6,
                        borderBottomRightRadius: 6,
                        borderBottomLeftRadius: 36,
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            margin: 16,
                            backgroundColor: colors.purpleLight,
                            paddingVertical: 4,
                            paddingHorizontal: 8,
                            borderRadius: 30,
                            width: "100%",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: fonts.body.bold,
                                fontSize: 10,
                                textTransform: "uppercase",
                                color: colors.purpleDark,
                            }}
                        >
                            {item.type}
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: fonts.title,
                                fontSize: 20,
                                color: colors.neutral.gray200,
                            }}
                        >
                            {item.title}
                        </Text>
                        <Text
                            style={{
                                textAlign: "center",
                                fontFamily: fonts.body.regular,
                                color: colors.neutral.gray400,
                                marginBottom: 14,
                            }}
                        >
                            {item.description}
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                gap: 8,
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    color: colors.yellowDark,
                                    fontFamily: fonts.body.regular,
                                    fontSize: 14,
                                }}
                            >
                                R$
                            </Text>
                            <Text
                                style={{
                                    color: colors.yellowDark,
                                    fontFamily: fonts.body.bold,
                                    fontSize: 20,
                                }}
                            >
                                {formatPrice(item.price)}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
