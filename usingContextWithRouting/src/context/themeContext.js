import { createContext, useContext } from "react";

// Create the context
export const ThemeContext = createContext({
    themeMode: 'light',
    darkMode: () => {},
    lightMode: () => {},
});

// Export the Provider component
export const ThemeContextProvider = ThemeContext.Provider;

// Export the custom hook
export function useTheme() {
    return useContext(ThemeContext);
}
