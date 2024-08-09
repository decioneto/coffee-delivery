import { SplashScreen as Splash } from "@/screens/SplashScreen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        "Baloo2-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    });
    const [isShowSplash, setIsShowSplash] = useState(false);

    useEffect(() => {
        if (error) throw error;
        if (loaded || error) {
            SplashScreen.hideAsync();
            setIsShowSplash(true);
            setTimeout(() => {
                setIsShowSplash(false);
            }, 3000);
        }
    }, [loaded, error]);

    if (!loaded && !error) return null;

    if (isShowSplash) {
        return <Splash />;
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
