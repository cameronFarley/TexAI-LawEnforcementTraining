import { useColorScheme as useNativeColorScheme } from "react-native";

import { useAppearance } from "@/providers/AppearanceProvider";

export function useColorScheme() {
  const nativeScheme = useNativeColorScheme();
  const { colorScheme } = useAppearance();

  return colorScheme ?? nativeScheme ?? "dark";
}
