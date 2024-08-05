import { colors } from "@/constants/colors";
import images from "@/constants/images";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

export function SplashScreen() {
    return (
        <View style={styles.container}>
            <Image source={images.logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.purpleDark,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
