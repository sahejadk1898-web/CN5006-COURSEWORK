import React, { useState } from "react";
import "./UpdateProduct.css";

function UpdateProduct() {
  const [formData, setFormData] = useState({
    productId: "",
    name: "",
    category: "",
    price: "",
    unitsSold: "",
    rating: "",
    returns: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Product updated successfully! (Frontend only)");
    console.log("Updated Data →", formData);
  };

  return (
    <div className="update-page-wrapper">
      <div className="update-card">

        <h2 className="update-title">✏️Update Product</h2>
        <p className="update-subtitle">
          Modify product details in your fashion inventory
        </p>

        <form onSubmit={handleUpdate}>
          <div className="update-form-grid">

            {/* Product ID */}
            <div className="update-input-box">
              <label>Product ID</label>
              <input
                type="text"
                name="productId"
                placeholder="Enter Product ID to update"
                value={formData.productId}
                onChange={handleChange}
                required
              />
            </div>

            {/* Product Name */}
            <div className="update-input-box">
              <label>Product Name</label>
              <input
                type="text"
                name="name"
                placeholder="Eg. Summer Jacket"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Category */}
            <div className="update-input-box">
              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            {/* Price */}
            <div className="update-input-box">
              <label>Price (£)</label>
              <input
                type="number"
                name="price"
                placeholder="Eg. 49.99"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>

            {/* Units Sold */}
            <div className="update-input-box">
              <label>Units Sold</label>
              <input
                type="number"
                name="unitsSold"
                placeholder="Eg. 150"
                value={formData.unitsSold}
                onChange={handleChange}
                required
              />
            </div>

            {/* Rating */}
            <div className="update-input-box">
              <label>Rating</label>
              <input
                type="number"
                name="rating"
                placeholder="Eg. 4.5"
                value={formData.rating}
                onChange={handleChange}
                step="0.1"
                min="1"
                max="5"
                required
              />
            </div>

            {/* Returns */}
            <div className="update-input-box">
              <label>Returns</label>
              <input
                type="number"
                name="returns"
                placeholder="Eg. 10"
                value={formData.returns}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <button className="update-btn" type="submit">
            Update Product
          </button>
        </form>

      </div>
    </div>
  );
}

export default UpdateProduct;
