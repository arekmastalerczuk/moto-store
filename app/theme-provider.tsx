"use client";

import React from "react";
import {
  ThemeProvider as NextThemeProvider,
  type ThemeProviderProps,
} from "next-themes";

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}

export default ThemeProvider;
