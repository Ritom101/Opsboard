function KPICards({ stats }) {
  return (
    <div className="kpi-container">
      <div className="kpi-card">
        <h3>Total Incidents</h3>
        <h2>{stats.total_incidents}</h2>
      </div>

      <div className="kpi-card">
        <h3>Open Incidents</h3>
        <h2>{stats.open_incidents}</h2>
      </div>

      <div className="kpi-card">
        <h3>Resolved Incidents</h3>
        <h2>{stats.resolved_incidents}</h2>
      </div>

      <div className="kpi-card">
        <h3>Critical Incidents</h3>
        <h2>{stats.critical_incidents || 0}</h2>
      </div>
    </div>
  )
}

export default KPICards