import { MoonIcon as MoonIconOutline } from "@heroicons/react/outline";
import { MoonIcon as MoonIconSolid } from "@heroicons/react/solid";
import { useThemeContext } from "ThemeContext";
const Header = () => {
  const { theme, toggleTheme } = useThemeContext();
  const isDarkMode = theme === "dark";

  return (
    <header className="bg-abWhite  shadow-sm  h-20  dark:bg-abBlue-100 ">
      <div className="flex items-center  px-5   h-full justify-between max-w-screen-abDesktop mx-auto">
        <h3 className="font-extrabold">Where is the world?</h3>
        <button
          onClick={() => toggleTheme()}
          className="flex items-center gap-1"
        >
          {isDarkMode ? (
            <MoonIconSolid className="w-5" />
          ) : (
            <MoonIconOutline className="w-5" />
          )}
          <span>{isDarkMode ? "Light" : "Dark"} Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
