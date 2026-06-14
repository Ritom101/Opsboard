import API_BASE_URL from "../config";

function IncidentCard({ incident, onIncidentUpdated }) {

  const markResolved = async () => {
    const response = await fetch(
      `${API_BASE_URL}/incidents/${incident.id}?status=resolve`,
      {
        method: "PUT",
      }
    )

    if (response.ok) {
      onIncidentUpdated()
    }
  }

  const deleteIncident = async () => {
    const response = await fetch(
      `${API_BASE_URL}/incidents/${incident.id}`,
      {
        method: "DELETE",
      }
    )

    if (response.ok) {
      onIncidentUpdated()
    }
  }

  return (
    <div className="incident-card">
      <h3>{incident.title}</h3>

      <p>Severity: {incident.severity}</p>

      <p>Status: {incident.status}</p>

      {incident.status !== "resolve" ? (
        <button onClick={markResolved}>
          Mark Resolved
        </button>
      ) : (
        <button onClick={deleteIncident}>
          Delete Incident
        </button>
      )}
    </div>
  )
}

export default IncidentCard