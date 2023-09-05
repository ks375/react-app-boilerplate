import { createContext } from 'react';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const ThemeContext = createContext({});

type ThemeContextProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children
}) => {
  return (
    <ThemeContext.Provider value={{ theme: DEFAULT_THEME }}>
      <ThemeProvider focusVisibleRef={null} theme={{ ...DEFAULT_THEME }}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
};

export default ThemeContextProvider;