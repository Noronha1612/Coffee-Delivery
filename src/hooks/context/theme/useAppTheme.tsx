import { darkTheme } from "@/styles/themes/dark";
import { defaultTheme } from "@/styles/themes/default";
import { createContext, useContext, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

export type ThemesAvailable = "light" | "dark";

type AppThemeContextProps = {
  toggle(): void;
  theme: ThemesAvailable;
};

const AppThemeContext = createContext({} as AppThemeContextProps);

const themes: Record<ThemesAvailable, DefaultTheme> = {
  dark: darkTheme,
  light: defaultTheme,
};

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<AppThemeContextProps["theme"]>("light");

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <AppThemeContext.Provider value={{ toggle, theme }}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(AppThemeContext);
