import ThemeContext, { ThemeContextValue } from "@/contexts/ThemeContext";
import { useContext } from "react";

const useTheme = (): ThemeContextValue => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error(
      "You must wrap your application with ThemeProvider or use the useTheme"
    );
  }
  return theme;
};

export default useTheme;
