import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";

function FilterTopUnits() {
  const [limit, setLimit] = useState("");
  const [results, setResults] = useState([]);

  const fetchTop = async () => {
    const res = await axios.get(`http://localhost:5000/top-units/${limit}`);
    setResults(res.data);
  };

  return (
    <div className="addpage-wrapper">
      <div className="add-container">
        <h2 className="add-title">🏆 Top Selling Products</h2>
        <p className="add-subtitle">Enter how many top products you want</p>

        <input
          type="number"
          placeholder="Limit"
          onChange={(e) => setLimit(e.target.value)}
        />

        <button className="add-btn" onClick={fetchTop}>SHOW</button>

        <ul>
          {results.map((item, i) => (
            <li key={i}>{item.productName} – {item.unitsSold} units</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterTopUnits;
