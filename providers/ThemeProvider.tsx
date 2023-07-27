import ThemeContext from "@/contexts/ThemeContext";
import React, { useEffect, useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    let storedTheme = localStorage.getItem("theme");
    if (!storedTheme || !(storedTheme === "dark" || storedTheme === "light")) {
      storedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onChange = (e: MediaQueryListEvent) => {
      const colorScheme = e.matches ? "dark" : "light";
      setTheme(colorScheme);
    };

    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQueryList.addEventListener("change", onChange);

    return () => {
      mediaQueryList.removeEventListener("change", onChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const currentTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", currentTheme);
      return currentTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
