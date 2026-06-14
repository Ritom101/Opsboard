import { useEffect, useState } from "react"

import Sidebar from "../components/Sidebar"
import KPICards from "../components/KPICards"
import CreateIncident from "../components/CreateIncident"
import IncidentCard from "../components/IncidentCard"
import SystemHealth from "../components/SystemHealth"
import IncidentTrend from "../components/IncidentTrend"
import AlertPanel from "../components/AlertPanel"
import API_BASE_URL from "../config";

function Dashboard() {
  const [incidents, setIncidents] = useState([])

  const [stats, setStats] = useState({
    total_incidents: 0,
    open_incidents: 0,
    resolved_incidents: 0,
    critical_incidents: 0,
  })

  const loadStats = () => {
    fetch(`${API_BASE_URL}/dashboard/stats`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error(err))
  }

  const loadIncidents = () => {
    fetch(`${API_BASE_URL}/incidents`)
      .then((res) => res.json())
      .then((data) => {
        setIncidents(data)
        loadStats()
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    loadIncidents()
    loadStats()
  }, [])

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="main-content">
        <div className="top-header">
          <div>
            <h1>Dashboard</h1>
            <p>Cloud Operations & Incident Management Platform</p>
          </div>

          <button className="create-project-btn">
            + Create Incident
          </button>
        </div>

        {/* KPI Cards */}
        <KPICards stats={stats} />

        {/* System Health Section */}
        <div>
          <h2 className="section-title">System Health</h2>
          <p className="section-subtitle">
            Infrastructure status and service health
          </p>

          <SystemHealth />
        </div>

        {/* Monitoring Section */}
        <div>
          <h2 className="section-title">Monitoring & Alerts</h2>
          <p className="section-subtitle">
            Metrics, alerts and operational visibility
          </p>

          <div className="monitoring-grid">
            <IncidentTrend />
            <AlertPanel />
          </div>
        </div>

        {/* Create Incident */}
        <div style={{ marginTop: "30px" }}>
          <CreateIncident onIncidentCreated={loadIncidents} />
        </div>

        {/* Incident List */}
        <div style={{ marginTop: "30px" }}>
          <h2>Recent Incidents</h2>

          {incidents.map((incident) => (
            <IncidentCard
              key={incident.id}
              incident={incident}
              onIncidentUpdated={loadIncidents}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard