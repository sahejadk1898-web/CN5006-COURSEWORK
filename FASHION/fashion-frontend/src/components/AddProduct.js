// src/components/AddProduct.js
import React, { useState } from "react";
import api from "../api";

const initial = {
  productCategory: "",
  productName: "",
  unitsSold: "",
  returns: "",
  revenue: "",
  customerRating: "",
  stockLevel: "",
  season: "",
  trendScore: ""
};

export default function AddProduct() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.productName) return "Product Name is required";
    if (!form.productCategory) return "Product Category is required";
    if (!form.season) return "Season is required";
    // numeric checks (optional)
    return null;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const err = validate();
    if (err) return alert(err);

    // convert numeric fields
    const payload = {
      ...form,
      unitsSold: Number(form.unitsSold) || 0,
      returns: Number(form.returns) || 0,
      revenue: Number(form.revenue) || 0,
      customerRating: Number(form.customerRating) || 0,
      stockLevel: Number(form.stockLevel) || 0,
      trendScore: Number(form.trendScore) || 0,
    };

    try {
      setLoading(true);
      const res = await api.post("/addProduct", payload);
      alert("Added: " + (res.data.product?.productName || "success"));
      setForm(initial);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Failed to add product");
    } finally { setLoading(false); }
  };

  return (
    <div className="card">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <label>Product Category
          <input name="productCategory" value={form.productCategory} onChange={handleChange} />
        </label>

        <label>Product Name*
          <input name="productName" value={form.productName} onChange={handleChange} />
        </label>

        <label>Units Sold
          <input name="unitsSold" type="number" value={form.unitsSold} onChange={handleChange} />
        </label>

        <label>Returns
          <input name="returns" type="number" value={form.returns} onChange={handleChange} />
        </label>

        <label>Revenue
          <input name="revenue" type="number" value={form.revenue} onChange={handleChange} step="0.01"/>
        </label>

        <label>Customer Rating
          <input name="customerRating" type="number" min="0" max="5" value={form.customerRating} onChange={handleChange} step="0.1"/>
        </label>

        <label>Stock Level
          <input name="stockLevel" type="number" value={form.stockLevel} onChange={handleChange} />
        </label>

        <label>Season
          <select name="season" value={form.season} onChange={handleChange}>
            <option value="">Select...</option>
            <option>Spring</option>
            <option>Summer</option>
            <option>Autumn</option>
            <option>Winter</option>
          </select>
        </label>

        <label>Trend Score
          <input name="trendScore" type="number" value={form.trendScore} onChange={handleChange} />
        </label>

        <div className="form-actions">
          <button type="submit" disabled={loading}>{loading ? "Adding..." : "Add Product"}</button>
        </div>
      </form>
    </div>
  );
}
