// src/components/DeleteProduct.js
import React, { useState } from "react";
import api from "../api";

export default function DeleteProduct() {
  const [productName, setProductName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!productName) return alert("Enter product name to delete");
    if (!window.confirm(`Delete "${productName}"?`)) return;
    try {
      setLoading(true);
      const res = await api.post(`/deleteProduct/${encodeURIComponent(productName)}`);
      alert(res.data?.message || "Deleted");
      setProductName("");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Delete failed");
    } finally { setLoading(false); }
  };

  return (
    <div className="card">
      <h2>Delete Product</h2>
      <div className="inline-row">
        <input placeholder="Exact Product Name" value={productName} onChange={e => setProductName(e.target.value)} />
        <button onClick={handleDelete} disabled={loading}>{loading ? "Deleting..." : "Delete"}</button>
      </div>
      <p className="muted">Use exact Product Name as stored in DB.</p>
    </div>
  );
}
