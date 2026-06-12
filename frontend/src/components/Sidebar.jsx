function Sidebar() {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo-section">
        <h2>☁️ OpsBoard</h2>
        <p>CloudOps Platform</p>
      </div>

      {/* Main Menu */}
      <div className="menu">
        <h4>MENU</h4>

        <div
          className="menu-item active"
          onClick={() => alert("Dashboard Clicked")}
        >
          📊 Dashboard
        </div>

        <div
          className="menu-item"
          onClick={() => alert("Incidents Clicked")}
        >
          🚨 Incidents
        </div>

        <div
          className="menu-item"
          onClick={() => alert("Tasks Clicked")}
        >
          📋 Tasks
        </div>

        <div
          className="menu-item"
          onClick={() => alert("Deployments Clicked")}
        >
          🚀 Deployments
        </div>

        <div
          className="menu-item"
          onClick={() => alert("Monitoring Clicked")}
        >
          📈 Monitoring
        </div>
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <div
          className="menu-item"
          onClick={() => alert("Settings Clicked")}
        >
          ⚙️ Settings
        </div>

        <div
          className="menu-item"
          onClick={() => alert("Logout Clicked")}
        >
          🚪 Logout
        </div>
      </div>
    </div>
  )
}

export default Sidebar