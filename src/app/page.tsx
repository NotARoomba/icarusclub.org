"use client";

import theme from "@hackclub/theme";
import { Theme, ThemeUIProvider, Box, Text } from "theme-ui";
export default function Home() {
  return (
    <ThemeUIProvider theme={theme as Theme}>
      <Text as="h1">Welcome to Icarus Club</Text>
    </ThemeUIProvider>
  );
}
