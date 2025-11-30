// src/components/FilterTopUnits.js
import React, { useState } from "react";
import api from "../api";

export default function FilterTopUnits() {
  const [season, setSeason] = useState("");
  const [minUnits, setMinUnits] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!season) return alert("Select season");
    const value = minUnits === "" ? 0 : Number(minUnits);
    try {
      setLoading(true);
      const res = await api.get(`/topUnits/${encodeURIComponent(season)}/${value}`);
      setResults(res.data || []);
    } catch (err) {
      console.error(err);
      alert("Search failed");
    } finally { setLoading(false); }
  };

  return (
    <div className="card">
      <h2>First 10 Records where Units Sold &gt; value</h2>
      <div className="inline-row">
        <select value={season} onChange={e => setSeason(e.target.value)}>
          <option value="">Season...</option>
          <option>Spring</option><option>Summer</option><option>Autumn</option><option>Winter</option>
        </select>
        <input placeholder="Min units" type="number" value={minUnits} onChange={e => setMinUnits(e.target.value)} />
        <button onClick={handleSearch} disabled={loading}>{loading ? "Searching..." : "Search"}</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Units Sold</th>
            <th>Revenue</th>
            <th>Rating</th>
            <th>Season</th>
          </tr>
        </thead>
        <tbody>
          {results.map(r => (
            <tr key={r._id || r.productName}>
              <td>{r.productName}</td>
              <td>{r.unitsSold}</td>
              <td>{r.revenue}</td>
              <td>{r.customerRating}</td>
              <td>{r.season}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
