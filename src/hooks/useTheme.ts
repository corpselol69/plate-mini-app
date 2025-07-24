import { useState, useEffect } from "react";

export type Theme = "dark" | "light";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Получаем текущую тему из localStorage или используем системную
    const savedTheme = localStorage.getItem("theme") as Theme;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const setSpecificTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return {
    theme,
    toggleTheme,
    setTheme: setSpecificTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
  };
};
