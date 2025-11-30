// src/components/SeasonSummary.js
import React, { useState } from "react";
import api from "../api";

export default function SeasonSummary() {
  const [season, setSeason] = useState("");
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGet = async () => {
    if (!season) return alert("Select a season");
    try {
      setLoading(true);
      const res = await api.get(`/seasonSummary/${encodeURIComponent(season)}`);
      setSummary(res.data && res.data.length ? res.data[0] : null);
    } catch (err) {
      console.error(err);
      alert("Error retrieving summary");
    } finally { setLoading(false); }
  };

  return (
    <div className="card">
      <h2>Season Summary</h2>
      <div className="inline-row">
        <select value={season} onChange={e => setSeason(e.target.value)}>
          <option value="">Select season</option>
          <option>Spring</option>
          <option>Summer</option>
          <option>Autumn</option>
          <option>Winter</option>
        </select>
        <button onClick={handleGet} disabled={loading}>{loading ? "Loading..." : "Get Summary"}</button>
      </div>

      {summary ? (
        <div className="summary">
          <p><strong>Season:</strong> {summary._id}</p>
          <p><strong>Total Units Sold:</strong> {summary.totalUnitsSold}</p>
          <p><strong>Total Returns:</strong> {summary.totalReturns}</p>
          <p><strong>Total Revenue:</strong> {summary.totalRevenue}</p>
        </div>
      ) : (
        season && <p className="muted">No data found for selected season.</p>
      )}
    </div>
  );
}
