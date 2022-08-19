import { MoonIcon as MoonIconOutline } from "@heroicons/react/outline";
import { MoonIcon as MoonIconSolid } from "@heroicons/react/solid";
import Link from "next/link";
import { useThemeContext } from "ThemeContext";
import Button from "./Button";
const Header = () => {
  const { theme, toggleTheme } = useThemeContext();
  const isDarkMode = theme === "dark";

  return (
    <header className="bg-abWhite  shadow-sm  h-20  dark:bg-abBlue-100 ">
      <div className="flex items-center  px-5   h-full justify-between max-w-screen-abDesktop mx-auto">
        <Link href={"/"} passHref>
          <a>
            <h3 className="font-extrabold text-lg cursor-pointer hover:opacity-90">
              Where is the world?
            </h3>
          </a>
        </Link>
        <button
          onClick={() => toggleTheme()}
          className="flex items-center gap-1 group"
        >
          {isDarkMode ? (
            <MoonIconSolid className="w-5 group-hover:scale-110" />
          ) : (
            <MoonIconOutline className="w-5 group-hover:scale-110" />
          )}
          <span>{isDarkMode ? "Light" : "Dark"} Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
