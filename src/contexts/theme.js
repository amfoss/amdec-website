import { createContext } from 'react';

const ThemeContext = createContext('light');

const getOppositeTheme = theme => (theme === 'light' ? 'dark' : 'light');

export { ThemeContext, getOppositeTheme };
