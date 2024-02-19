// App.tsx
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routers/routers";
import Sidebar from "./components/Sidebar/Sidebar";
import React from "react";
import "./App.css";

interface ThemeContextType {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme?: string;
}

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

/**
 * Componente principal de la aplicación.
 *
 * @returns El componente de la aplicación.
 */
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar />
        <div className="main">
          <AppRoutes />
        </div>
         
      </BrowserRouter>
    </div>
  );
};

export default App;
