import React, { useState } from "react";

export default function UpdateProduct() {
  const [searchName, setSearchName] = useState("");
  const [formData, setFormData] = useState(null);

  return (
    <div>
      <h2 className="page-title">✏ Update Product</h2>

      <div className="form-card">

        <label>Enter Product Name
          <input value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder="Search product..." />
        </label>

        <button>LOAD PRODUCT</button>

        {formData && (
          <>
            <div className="form-grid-2">
              <label>Category
                <input placeholder="Category" />
              </label>

              <label>Season
                <select>
                  <option>Select Season</option>
                  <option>Winter</option>
                  <option>Summer</option>
                  <option>Spring</option>
                  <option>Autumn</option>
                </select>
              </label>

              <label>Units Sold
                <input placeholder="Units" />
              </label>

              <label>Returns
                <input placeholder="Returns" />
              </label>

              <label>Revenue
                <input placeholder="Revenue" />
              </label>

              <label>Rating
                <input placeholder="Rating" />
              </label>

              <label>Stock Level
                <input placeholder="Stock" />
              </label>

              <label>Trend Score
                <input placeholder="Trend Score" />
              </label>
            </div>

            <button>UPDATE ✓</button>
          </>
        )}

      </div>
    </div>
  );
}
