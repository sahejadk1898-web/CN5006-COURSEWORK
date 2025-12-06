export default function FilterByRating() {
  return (
    <div>
      <h2 className="page-title">⭐ Filter By Rating</h2>

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

          <label>Min Rating
            <input placeholder="e.g. 4" />
          </label>
        </div>

        <button>FILTER</button>
      </div>

      <div className="form-card">
        <h3>Results</h3>
        <p>No data yet</p>
      </div>
    </div>
  );
}
