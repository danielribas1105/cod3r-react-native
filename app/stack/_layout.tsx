import { StackRouter } from "@react-navigation/native";
import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="index"
                options={{
                    title: 'Stack Inicial'
                }}
            />
        </Stack>
    )
}