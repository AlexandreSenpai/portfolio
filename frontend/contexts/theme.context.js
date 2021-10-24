import React from 'react'
import { useTheme } from "../hooks/useTheme";
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"

export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themeProfile, toggleThemeProfile] = useTheme()

  return (
    <ThemeContext.Provider value={{ themeProfile, toggleThemeProfile }}>
      <ThemeProvider theme={theme[themeProfile]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}