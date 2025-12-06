import React from "react";
import { FaPlusCircle, FaEdit, FaTrashAlt } from "react-icons/fa";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage">

      {/* --- Hero Section --- */}
      <section className="hero">
        <h1 className="hero-title">Fashion Dashboard</h1>
        <p className="hero-subtitle">
          Modern & Intelligent Inventory Management for Fashion Stores
        </p>
      </section>

      {/* --- Powerful Features --- */}
      <section className="features-section">
        <h2 className="section-title">⚡ Powerful Features</h2>
        <p className="section-subtitle">
          Everything you need to manage your fashion inventory efficiently.
        </p>

        <div className="features-grid">

          {/* Add Product */}
          <div className="feature-card">
            <FaPlusCircle className="feature-icon" />
            <h3>Add Products</h3>
            <p>Insert new items with full details in seconds.</p>
          </div>

          {/* Update Product */}
          <div className="feature-card">
            <FaEdit className="feature-icon" />
            <h3>Update Inventory</h3>
            <p>Modify existing stock, pricing, and trend insights.</p>
          </div>

          {/* Delete Product */}
          <div className="feature-card">
            <FaTrashAlt className="feature-icon" />
            <h3>Remove Products</h3>
            <p>Clean up outdated or unavailable fashion items.</p>
          </div>

        </div>
      </section>

      {/* --- Why Choose Fashion Dashboard --- */}
      <section className="why-section">
        <h2>Why Choose Fashion Dashboard?</h2>

        <div className="why-content">
          <ul>
            <li>Real-time stock & revenue analysis</li>
            <li>Simple & clean user interface</li>
            <li>Instant product updates</li>
            <li>Detailed seasonal insights</li>
            <li>Smart trend-based recommendations</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
