// Dependencias
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Info from "../pages/Info";
import New from "../pages/New";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Ajedrez/" element={<Home />} />
        <Route path="/Ajedrez/new/" element={<Info />} />
        <Route path="/Ajedrez/about/" element={<New />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
