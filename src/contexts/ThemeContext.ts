import { createContext } from "react";
import { Theme, ThemeContextType } from "../types/theme";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: (theme: Theme) => console.log(theme),
});
