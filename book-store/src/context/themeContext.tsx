import { ReactNode, createContext, useEffect, useState } from "react";
import { ThemeName } from "../style/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../style/global";
import { getTheme } from "../style/theme";

const DEFAULT_THEME_NAME = "light";
const THEME_LOCALSTORAGE_KEY = "book_store_theme";

interface State {
  themeName: ThemeName;
  toggleTheme: () => void;
}

const state: State = {
  themeName: "light",
  toggleTheme: () => {},
};

export const ThemeContext = createContext<State>(state);
export const BookStoreThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [themeName, setThemeName] = useState<ThemeName>("light");

  const toggleTheme = () => {
    setThemeName(themeName == "light" ? "dark" : "light");
    localStorage.setItem(
      THEME_LOCALSTORAGE_KEY,
      themeName == "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    const savedThemeName = localStorage.getItem(
      THEME_LOCALSTORAGE_KEY
    ) as ThemeName;
    setThemeName(savedThemeName || DEFAULT_THEME_NAME);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};