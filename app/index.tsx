import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: "#e4e4e4" }}>
            <View>
                <Text>HomeScreen</Text>
            </View>
        </SafeAreaView>
    );
}
