import React from 'react';
import { useLocalStorage } from './src/hooks/local-storage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './src/styles/index.sass';
import 'react-typist/dist/Typist.css';
import 'prismjs/themes/prism-okaidia.css';
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
