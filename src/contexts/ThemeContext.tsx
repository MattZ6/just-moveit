import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import {
  ThemeProvider as StyleComponentsThemeProvider,
  DefaultTheme,
} from 'styled-components'
import Cookies from 'js-cookie';

import GlobalStyle from '@styles/GlobalStyle';

import light from '@styles/themes/light';
import dark from '@styles/themes/dark';

interface IThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContextData);

export const IS_DARK_THEME_KEY = 'IS_DARK_THEME';

export const ThemeProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>();

  const theme = useMemo(() => {
    return isDark ? dark : light;
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setIsDark(state => !state);
  }, []);

  useEffect(() => {
    function saveThemeCookie() {
      if (isDark === undefined) {
        const data = Cookies.get(IS_DARK_THEME_KEY);

        if (!data) {
          setIsDark(false);
        } else {
          setIsDark(data === 'true');
        }

      } else {
        Cookies.set(IS_DARK_THEME_KEY, String(isDark));
      }
    }

    saveThemeCookie();
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
