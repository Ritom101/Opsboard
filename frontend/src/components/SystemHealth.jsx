function SystemHealth() {
  return (
    <div className="health-grid">
      <div className="health-card">
        <h4>☸️ AKS Cluster</h4>
        <p>Healthy</p>
      </div>

      <div className="health-card">
        <h4>🌐 API Server</h4>
        <p>Healthy</p>
      </div>

      <div className="health-card">
        <h4>🗄️ Database</h4>
        <p>Running</p>
      </div>

      <div className="health-card">
        <h4>💻 Azure VM</h4>
        <p>Running</p>
      </div>
    </div>
  )
}

export default SystemHealth