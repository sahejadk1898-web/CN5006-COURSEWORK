export default function DeleteProduct() {
  return (
    <div>
      <h2 className="page-title">🗑 Delete Product</h2>

      <div className="form-card">
        <label>Enter Product Name
          <input placeholder="e.g. Blue Jacket" />
        </label>

        <button style={{ background: "#ff4d4d" }}>DELETE ✕</button>
      </div>
    </div>
  );
}
