// src/components/FilterByRating.js
import React, { useState } from "react";
import api from "../api";

export default function FilterByRating() {
  const [season, setSeason] = useState("");
  const [minRating, setMinRating] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!season) return alert("Select season");
    if (minRating === "") return alert("Enter minimum rating");
    try {
      setLoading(true);
      const res = await api.get(`/ratingFilter/${encodeURIComponent(season)}/${encodeURIComponent(minRating)}`);
      setResults(res.data || []);
    } catch (err) {
      console.error(err);
      alert("Search failed");
    } finally { setLoading(false); }
  };

  return (
    <div className="card">
      <h2>Products where Customer Rating ≥ value</h2>
      <div className="inline-row">
        <select value={season} onChange={e => setSeason(e.target.value)}>
          <option value="">Season...</option>
          <option>Spring</option><option>Summer</option><option>Autumn</option><option>Winter</option>
        </select>
        <input placeholder="Min rating (0-5)" type="number" step="0.1" min="0" max="5" value={minRating} onChange={e => setMinRating(e.target.value)} />
        <button onClick={handleSearch} disabled={loading}>{loading ? "Searching..." : "Search"}</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Customer Rating</th>
            <th>Units Sold</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {results.map(r => (
            <tr key={r._id || r.productName}>
              <td>{r.productName}</td>
              <td>{r.customerRating}</td>
              <td>{r.unitsSold}</td>
              <td>{r.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
