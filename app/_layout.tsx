// Root layout: wires up the highest-level navigation (auth, main app, modals).
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import {
  AppearanceProvider,
  useAppearance,
} from "@/providers/AppearanceProvider";

function ThemedStatusBar() {
  const { colorScheme, colors } = useAppearance();
  return (
    <StatusBar
      style={colorScheme === "light" ? "dark" : "light"}
      backgroundColor={colors.background}
    />
  );
}

export default function RootLayout() {
  return (
    <AppearanceProvider>
      <ThemedStatusBar />
      <Slot />
    </AppearanceProvider>
  );
}

