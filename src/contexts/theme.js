import { createContext } from 'react';

const ThemeContext = createContext();

const getOppositeTheme = theme => (theme === 'light' ? 'dark' : 'light');

export { ThemeContext, getOppositeTheme };
