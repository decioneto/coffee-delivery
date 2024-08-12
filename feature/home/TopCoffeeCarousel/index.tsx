import * as images from "@/constants/images";
import { CoffeeEntity } from "@/entities/coffeeEntity";
import React from "react";
import { FlatList, View } from "react-native";
import { CarouselCard } from "../CarouselCard";

export function TopCoffeeCarousel() {
    const data: ArrayLike<CoffeeEntity> | undefined = [
        {
            title: "Latte",
            description: "Café expresso com o dobro de leite e espuma cremosa",
            image: images["latte"],
            price: 990,
            type: "tradicional",
        },
        {
            title: "Mocaccino",
            description:
                "Café expresso com calda de chocolate, pouco leite e espuma",
            image: images["mocaccino"],
            price: 990,
            type: "doce",
        },
    ];
    return (
        <View
            style={{
                marginTop: -140,
            }}
        >
            <FlatList
                horizontal
                data={data}
                renderItem={({ item, index }) => (
                    <CarouselCard
                        item={item}
                        index={index}
                        length={data ? data.length : 0}
                        key={item.title}
                    />
                )}
            />
        </View>
    );
}
