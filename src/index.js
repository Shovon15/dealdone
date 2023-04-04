import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import ThemeContextProvider from "./Context/ColorContext";
// import ScrollPositionProvider from "./Context/ScrollPosition";
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
