import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";

function FilterTopUnits() {
  const [minUnits, setMinUnits] = useState("");
  const [results, setResults] = useState([]);

  const fetchFiltered = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/filter-units?min=${minUnits}`
      );

      // Show only first 10 records
      setResults(res.data.slice(0, 10));
    } catch (error) {
      console.error("Error fetching units:", error);
    }
  };

  return (
    <div className="addpage-wrapper">
      <div className="add-container">
        <h2 className="add-title">📊 Filter by Units Sold</h2>
        <p className="add-subtitle">
          Enter minimum units sold to display matching products
        </p>

        <input
          type="number"
          placeholder="Enter minimum units sold"
          value={minUnits}
          onChange={(e) => setMinUnits(e.target.value)}
        />

        <button className="add-btn" onClick={fetchFiltered}>
          SHOW
        </button>

        <ul>
          {results.map((item, i) => (
            <li key={i}>
              {item.productName} – {item.unitsSold} units
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterTopUnits;
