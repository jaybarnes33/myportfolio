import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

//@ts-ignore
export const AppContext = createContext<{
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}>();
import React from "react";

const App = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("");
  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </AppContext.Provider>
  );
};

export default App;
