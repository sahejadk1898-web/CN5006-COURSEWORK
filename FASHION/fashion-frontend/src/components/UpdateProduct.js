// src/components/UpdateProduct.js
import React, { useState } from "react";
import api from "../api";

export default function UpdateProduct() {
  const [productName, setProductName] = useState("");
  const [form, setForm] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const loadProduct = async () => {
    if (!productName) return alert("Enter product name to load");
    try {
      setLoading(true);
      // Option: endpoint to get single product not in coursework - do whole collection fetch
      const res = await api.get("/topUnits/All/0"); // fallback: get many
      // find locally (this is a convenience - ideally backend has GET /product/:name)
      const found = res.data.find(p => p.productName === productName);
      if (!found) return alert("Not found (use exact productName)");
      setForm({
        productCategory: found.productCategory || "",
        unitsSold: found.unitsSold || 0,
        returns: found.returns || 0,
        revenue: found.revenue || 0,
        customerRating: found.customerRating || 0,
        stockLevel: found.stockLevel || 0,
        season: found.season || "",
        trendScore: found.trendScore || 0
      });
      setResult(found);
    } catch (err) {
      console.error(err);
      alert("Could not load product");
    } finally { setLoading(false); }
  };

  const handleUpdate = async e => {
    e.preventDefault();
    if (!productName) return alert("Enter product name first");
    const payload = {
      productCategory: form.productCategory,
      productName,
      unitsSold: Number(form.unitsSold) || 0,
      returns: Number(form.returns) || 0,
      revenue: Number(form.revenue) || 0,
      customerRating: Number(form.customerRating) || 0,
      stockLevel: Number(form.stockLevel) || 0,
      season: form.season,
      trendScore: Number(form.trendScore) || 0
    };
    try {
      setLoading(true);
      const res = await api.post(`/updateProduct/${encodeURIComponent(productName)}`, payload);
      alert("Updated");
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Update failed");
    } finally { setLoading(false); }
  };

  return (
    <div className="card">
      <h2>Update Product</h2>
      <div className="inline-row">
        <input placeholder="Exact Product Name" value={productName} onChange={e => setProductName(e.target.value)} />
        <button onClick={loadProduct} disabled={loading}>Load</button>
      </div>

      {result && (
        <form onSubmit={handleUpdate} className="form-grid">
          <label>Product Category
            <input name="productCategory" value={form.productCategory} onChange={handleChange} />
          </label>

          <label>Units Sold
            <input name="unitsSold" type="number" value={form.unitsSold} onChange={handleChange} />
          </label>

          <label>Returns
            <input name="returns" type="number" value={form.returns} onChange={handleChange} />
          </label>

          <label>Revenue
            <input name="revenue" type="number" step="0.01" value={form.revenue} onChange={handleChange} />
          </label>

          <label>Customer Rating
            <input name="customerRating" type="number" min="0" max="5" step="0.1" value={form.customerRating} onChange={handleChange} />
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
            <button type="submit" disabled={loading}>Update</button>
          </div>
        </form>
      )}

      {!result && <p className="muted">Load a product to edit its details.</p>}
    </div>
  );
}
