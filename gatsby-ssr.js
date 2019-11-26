import React from 'react';
import { useLocalStorage } from './src/hooks/local-storage';
import { ThemeContext } from './src/contexts/theme';

const App = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
