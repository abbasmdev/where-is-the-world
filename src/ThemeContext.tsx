import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "dark" | "light";

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined" && window.localStorage) {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      return "dark";
    }
    document.documentElement.classList.remove("dark");
  }

  return "light";
};

const useThemeStore = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    const newTheme: Theme = theme === "dark" ? "light" : "dark";
    localStorage.theme = newTheme;
    if (newTheme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    setTheme(newTheme);
  };

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  return { theme, toggleTheme };
};

const ThemeContext = createContext<ReturnType<typeof useThemeStore>>({
  toggleTheme: () => {},
  theme: "light",
});
const useThemeContext = () => useContext(ThemeContext);
const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={useThemeStore()}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
export { useThemeContext };
export type { Theme };
