// Dependendencias
import React from "react";
import ReactDOM from "react-dom/client";

// Componentes
import App from "./routes/App";

// * Styles * //
// General
import "./styles/global.scss";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Pico CSS
import "@picocss/pico";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
