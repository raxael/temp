import { useEffect, useMemo, useState } from 'react';
import { ThemeContext, type Theme, type ThemeContextValue } from '../context/ThemeContext';

const STORAGE_KEY = 'parse-pay-theme';

const updateDocumentTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? 'light';
    setTheme(stored);
    updateDocumentTheme(stored);
  }, []);

  useEffect(() => {
    updateDocumentTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};


