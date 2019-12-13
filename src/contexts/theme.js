import { createContext } from "react";

const ThemeContext = createContext("dark");

const getOppositeTheme = theme => (theme === "light" ? "black" : "light");

export { ThemeContext, getOppositeTheme };
