// src/components/AddProduct.js
import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";

function AddProduct() {
  const [formData, setFormData] = useState({
    category: "",
    productName: "",
    season: "",
    unitsSold: "",
    returns: "",
    revenue: "",
    customerRating: "",
    stockLevel: "",
    trendScore: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/add", formData);
      alert("Product Added Successfully!");
    } catch (err) {
      console.error(err);
      alert("Error adding product.");
    }
  };

  return (
    <div className="addpage-wrapper">
      <div className="add-container">

        <h2 className="add-title">➕ Add New Product</h2>
        <p className="add-subtitle">Fill in the product details below</p>

        <form className="add-form" onSubmit={handleSubmit}>
          
          <div className="form-grid">

            <input type="text" name="category" placeholder="Category" onChange={handleChange} />
            <input type="text" name="productName" placeholder="Product Name" onChange={handleChange} />

            <select name="season" onChange={handleChange}>
              <option value="">Select Season</option>
              <option>Summer</option>
              <option>Winter</option>
              <option>Autumn</option>
              <option>Spring</option>
            </select>

            <input type="number" name="unitsSold" placeholder="Units Sold" onChange={handleChange} />
            <input type="number" name="returns" placeholder="Returns" onChange={handleChange} />
            <input type="number" name="revenue" placeholder="Revenue (£)" onChange={handleChange} />
            <input type="number" name="customerRating" placeholder="Customer Rating (0–5)" onChange={handleChange} />
            <input type="number" name="stockLevel" placeholder="Stock Level" onChange={handleChange} />
            <input type="number" name="trendScore" placeholder="Trend Score (0–100)" onChange={handleChange} />

          </div>

          <button className="add-btn" type="submit">✔ ADD PRODUCT</button>

        </form>
      </div>
    </div>
  );
}

export default AddProduct;
