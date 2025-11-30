// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct";
import SeasonSummary from "./components/SeasonSummary";
import FilterTopUnits from "./components/FilterTopUnits";
import FilterByRating from "./components/FilterByRating";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/add" replace />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
          <Route path="/delete" element={<DeleteProduct />} />
          <Route path="/summary" element={<SeasonSummary />} />
          <Route path="/units" element={<FilterTopUnits />} />
          <Route path="/rating" element={<FilterByRating />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
