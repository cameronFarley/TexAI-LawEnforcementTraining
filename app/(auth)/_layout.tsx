// Auth layout: hosts the onboarding/login Stack separate from the main tabs.
import { Stack } from "expo-router";

import { useAppearance } from "@/providers/AppearanceProvider";

export default function OnboardingLayout() {
  const { colors } = useAppearance();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="welcome" />
      <Stack.Screen name="name" />
    </Stack>
  );
}
