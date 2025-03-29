import { ChangeEvent, FC, ReactNode, useContext } from "react";
import { Theme, ThemeContextType } from "../../types/theme";
import { ThemeContext } from "../ThemeContext";

export const ThemeWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);

  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };
  return (
    <div data-theme={theme}>
      <select name="toggleTheme" onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      {children}
    </div>
  );
};
