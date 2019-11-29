import { createContext } from 'react';

const ThemeContext = createContext('dark');

const getOppositeTheme = theme => (theme === 'light' ? 'dark' : 'light');

export { ThemeContext, getOppositeTheme };
