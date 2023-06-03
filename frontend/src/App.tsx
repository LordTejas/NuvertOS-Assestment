import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChemicalDetailPage from "./pages/ChemicalDetailPage";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/chemicals/:id" element={<ChemicalDetailPage />} />
        </Routes>
    </div>
  );
}

export default App;
