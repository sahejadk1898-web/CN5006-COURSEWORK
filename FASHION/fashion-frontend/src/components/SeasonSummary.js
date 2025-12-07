import React, { useEffect, useState } from "react";
import "./SeasonSummary.css";

function SeasonSummary() {
  const [summary, setSummary] = useState([]);

  // --- Temporary Sample Data (Replace with backend later) ---
  useEffect(() => {
     // Placeholder data (clean & professional)
  // Placeholder data (clean & professional)
  const placeholderData = [
    { season: "Summer", revenue: "—", units: "—", rating: "—" },
    { season: "Winter", revenue: "—", units: "—", rating: "—" },
    { season: "Autumn", revenue: "—", units: "—", rating: "—" },
    { season: "Spring", revenue: "—", units: "—", rating: "—" },

    ];
    setSummary(placeholderData);
  }, []);

  return (
    <div className="summary-container">
      <h2 className="summary-title">📋Season Summary</h2>

      <div className="summary-card">
        <table className="summary-table">
          <thead>
            <tr>
              <th>Season</th>
              <th>Total Revenue (£)</th>
              <th>Total Units Sold</th>
              <th>Avg Rating</th>
            </tr>
          </thead>
          <tbody>
            {/* ✅ USE THIS — no sampleData anymore */}
            {summary.map((row, index) => (

              <tr key={index}>
                <td>{row.season}</td>
                <td>{row.revenue}</td>
                <td>{row.units}</td>
                <td>{row.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SeasonSummary;
