export default function SeasonSummary() {
  return (
    <div>
      <h2 className="page-title">📊 Season Summary</h2>

      <div className="form-card">
        <label>Select Season
          <select>
            <option>Winter</option>
            <option>Summer</option>
            <option>Spring</option>
            <option>Autumn</option>
          </select>
        </label>

        <button>VIEW SUMMARY</button>
      </div>

      <div className="form-card">
        <h3>Summary Results</h3>
        <p>Units Sold: —</p>
        <p>Returns: —</p>
        <p>Revenue: —</p>
      </div>
    </div>
  );
}
