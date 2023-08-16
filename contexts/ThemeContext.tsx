import { createContext, useContext, useState } from "react";

//crate the contexts
const ThemeContext = createContext<string | undefined>("light");
const ThemeUpdateContext = createContext<Function | undefined>(undefined);

//use custom hooks to give easy access
export const useTheme = () => {
  return useContext(ThemeContext);
};
export const useUpdateTheme = () => {
  return useContext(ThemeUpdateContext);
};

//ThemeProvider component property type
type ThemeProviderProps = {
  children: React.ReactNode;
};

//component to wrap elements to use the theme context
export default function ThemeProvider({
  children,
}: ThemeProviderProps): React.JSX.Element {

  //state to hold theme value, when changed, state will re render components below
  const [theme, setTheme] = useState<string | undefined>("light");

  //function to update theme
  const updateTheme: Function = (theme: string): void => {
    setTheme((prevTheme) => theme);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={setTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
