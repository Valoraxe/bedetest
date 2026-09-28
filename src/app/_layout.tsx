import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "BEDE TEST",
        headerBackTitle: "Back",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  );
}
