export default function FilterTopUnits() {
  return (
    <div>
      <h2 className="page-title">📈 Top Units Sold</h2>

      <div className="form-card">
        
        <div className="form-grid-2">
          <label>Select Season
            <select>
              <option>Winter</option>
              <option>Summer</option>
              <option>Spring</option>
              <option>Autumn</option>
            </select>
          </label>

          <label>Min Units Sold
            <input placeholder="e.g. 100" />
          </label>
        </div>

        <button>SEARCH</button>
      </div>

      <div className="form-card">
        <h3>Results</h3>
        <p>No data yet</p>
      </div>
    </div>
  );
}
