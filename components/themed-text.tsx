import { Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { useAppearance } from "@/providers/AppearanceProvider";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const { scaleFont, colors } = useAppearance();

  const variantStyle = (() => {
    switch (type) {
      case "title":
        return {
          fontSize: scaleFont(32),
          lineHeight: scaleFont(34),
          fontWeight: "bold",
        };
      case "defaultSemiBold":
        return {
          fontSize: scaleFont(16),
          lineHeight: scaleFont(24),
          fontWeight: "600",
        };
      case "subtitle":
        return {
          fontSize: scaleFont(20),
          fontWeight: "bold",
        };
      case "default":
      default:
        return {
          fontSize: scaleFont(16),
          lineHeight: scaleFont(24),
        };
    }
  })();

  const resolvedColor = type === "link" ? colors.primary : color;

  return (
    <Text
      style={[
        { color: resolvedColor },
        variantStyle,
        style,
      ]}
      {...rest}
    />
  );
}
