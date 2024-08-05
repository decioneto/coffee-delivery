import { SplashScreen } from "@/screens/SplashScreen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
    const [loaded, error] = useFonts({
        "Baloo2-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
        "Robot-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    });
    const [isShowSplash, setIsShowSplash] = useState(true);

    useEffect(() => {
        if (error) throw error;

        setTimeout(() => {
            setIsShowSplash(false);
        }, 3000);
    }, [loaded, error]);

    if (!loaded && !error) return null;

    if (isShowSplash) {
        return <SplashScreen />;
    }

    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
}
