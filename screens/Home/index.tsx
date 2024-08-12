import { Header } from "@/components/Header";
import { colors } from "@/constants/colors";
import { CoffeeList } from "@/feature/home/CoffeeList";
import { SearchField } from "@/feature/home/SearchField";
import { TopCoffeeCarousel } from "@/feature/home/TopCoffeeCarousel";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeScreen() {
    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: "#e4e4e4" }}>
            <ScrollView>
                <Header />
                <SearchField />
                <TopCoffeeCarousel />
                <CoffeeList />
            </ScrollView>

            <StatusBar backgroundColor={colors.neutral.gray100} style="light" />
        </SafeAreaView>
    );
}
