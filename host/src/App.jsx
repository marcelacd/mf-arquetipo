import React from "react";
import ReactDOM from "react-dom/client";

import Ejemplo from "./components/Ejemplo"
// import "./index.css";

const App = () => (
  <Ejemplo/>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
