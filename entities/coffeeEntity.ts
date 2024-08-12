import { ImageSourcePropType } from "react-native";

export type CoffeeEntity = {
    image: ImageSourcePropType;
    type: string;
    title: string;
    description: string;
    price: number;
    sizes?: {
        "114": boolean;
        "140": boolean;
        "227": boolean;
    };
};
