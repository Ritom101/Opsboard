import { useState } from "react"
import API_BASE_URL from "../config";

function CreateIncident({ onIncidentCreated }) {
  const [title, setTitle] = useState("")
  const [severity, setSeverity] = useState("Low")

  const createIncident = async () => {
    const response = await fetch(`${API_BASE_URL}/incidents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        severity,
        status: "Open",
      }),
    })

    if (response.ok) {
      alert("Incident Created")

      setTitle("")
      setSeverity("Low")

      onIncidentCreated()
    } else {
      alert("Failed to create incident")
    }
  }

  return (
    <div className="create-incident-card">
      <h3>Create Incident</h3>

      <input
        type="text"
        placeholder="Incident Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
        <option>Critical</option>
      </select>

      <button onClick={createIncident}>
        Create Incident
      </button>
    </div>
  )
}

export default CreateIncident