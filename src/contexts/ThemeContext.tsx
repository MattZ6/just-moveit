import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import {
  ThemeProvider as StyleComponentsThemeProvider,
  DefaultTheme,
} from 'styled-components'
import Cookies from 'js-cookie';

import GlobalStyle from '../styles/GlobalStyle';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface IThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContextData);

const IS_DARK_THEME_KEY = 'IS_DARK_THEME';

export const ThemeProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>();

  const theme = useMemo(() => {
    return isDark ? light : dark;
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setIsDark(state => !state);
  }, []);

  useEffect(() => {
    if (isDark === undefined) {
      setIsDark(!!Cookies.get(IS_DARK_THEME_KEY));

      return;
    }

    Cookies.set(IS_DARK_THEME_KEY, String(isDark));
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyleComponentsThemeProvider theme={theme}>
        <GlobalStyle />

        {children}
      </StyleComponentsThemeProvider>
    </ThemeContext.Provider>
  );
}
