import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";

function DeleteProduct() {
  const [productName, setProductName] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete("http://localhost:5000/delete", {
        data: { productName },
      });
      alert("Product Deleted!");
    } catch (err) {
      alert("Error deleting product.");
    }
  };

  return (
    <div className="addpage-wrapper">
      <div className="add-container">

        <h2 className="add-title">🗑 Delete Product</h2>
        <p className="add-subtitle">Enter product name to remove it</p>

        <form onSubmit={handleDelete}>
          <input
            type="text"
            placeholder="Product Name"
            onChange={(e) => setProductName(e.target.value)}
          />

          <button className="add-btn" type="submit">DELETE</button>
        </form>

      </div>
    </div>
  );
}

export default DeleteProduct;
