import { Stack } from "expo-router";

// I have no idea wheat this file does tbh
// Why do we have three _layout files?

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#000" },
      }}
    >
      <Stack.Screen name="welcome" />
      <Stack.Screen name="name" />
    </Stack>
  );
}