import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";

function FilterByRating() {
  const [rating, setRating] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:5000/rating/${rating}`);
    setData(res.data);
  };

  return (
    <div className="addpage-wrapper">
      <div className="add-container">
        <h2 className="add-title">⭐ Filter by Rating</h2>
        <p className="add-subtitle">Show products above selected rating</p>

        <input
          type="number"
          placeholder="Enter rating (0–5)"
          onChange={(e) => setRating(e.target.value)}
        />

        <button className="add-btn" onClick={fetchData}>FILTER</button>

        <ul>
          {data.map((item, i) => (
            <li key={i}>{item.productName} — {item.customerRating} ⭐</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterByRating;
