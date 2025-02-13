import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Temperature App" }} />
        </Stack>
    );
}
