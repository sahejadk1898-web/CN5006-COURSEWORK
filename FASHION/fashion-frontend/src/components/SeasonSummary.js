import React, { useEffect, useState } from "react";
import "./SeasonSummary.css";

function SeasonSummary() {
  const [summary, setSummary] = useState([]);

  // --- Temporary Sample Data (Replace with backend later) ---
  useEffect(() => {
    const sampleData = [
      {season: "Summer", revenue: 12500, units: 380, rating: 4.7 },
      { season: "Winter", revenue: 8400, units: 260, rating: 4.3 },
      { season: "Autumn", revenue: 9500, units: 300, rating: 4.4 },
      { season: "Spring", revenue: 7200, units: 210, rating: 4.1 },
    ];
    setSummary(sampleData);
  }, []);

  return (
    <div className="summary-container">
      <h2 className="summary-title">Season Summary</h2>

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
            {summary.map((item, index) => (
              <tr key={index}>
                <td>{item.season}</td>
                <td>£{item.revenue}</td>
                <td>{item.units}</td>
                <td>{item.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SeasonSummary;
