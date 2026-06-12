function AlertPanel() {
  return (
    <div className="alert-panel">

      <h3>Latest Alerts</h3>

      <div className="alert-item">
        High CPU Usage detected
      </div>

      <div className="alert-item">
        AKS Pod Restarted
      </div>

      <div className="alert-item">
        Failed Deployment
      </div>

    </div>
  )
}

export default AlertPanel