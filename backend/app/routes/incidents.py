from fastapi import APIRouter, HTTPException
from app.models.incident import Incident
from app.config.session import SessionLocal
from app.models.db_models import IncidentDB
from sqlalchemy import text

router = APIRouter()


@router.get("/incidents")
def get_incidents():

    db = SessionLocal()

    incidents = db.query(IncidentDB).all()

    db.close()

    return incidents


@router.post("/incidents")
def create_incident(incident: Incident):

    db = SessionLocal()

    new_incident = IncidentDB(
        title=incident.title,
        severity=incident.severity,
        status=incident.status
    )

    db.add(new_incident)
    db.commit()
    db.refresh(new_incident)

    db.close()

    return {
        "message": "Incident created successfully",
        "incident": new_incident
    }


@router.delete("/incidents/{incident_id}")
def delete_incident(incident_id: int):

    db = SessionLocal()

    incident = db.query(IncidentDB).filter(
        IncidentDB.id == incident_id
    ).first()

    if not incident:
        db.close()

        raise HTTPException(
            status_code=404,
            detail="Incident not found"
        )

    db.delete(incident)

    db.commit()

    db.close()

    return {
        "message": f"Incident {incident_id} deleted successfully"
    }

@router.put("/incidents/{incident_id}")
def update_incident(
    incident_id: int,
    status: str
):

    db = SessionLocal()

    incident = db.query(IncidentDB).filter(
        IncidentDB.id == incident_id
    ).first()

    if not incident:
        db.close()

        raise HTTPException(
            status_code=404,
            detail="Incident not found"
        )

    incident.status = status

    db.commit()

    db.refresh(incident)

    db.close()

    return {
        "message": "Incident updated successfully",
        "incident": incident
    }

@router.get("/health")
def health_check():

    db = SessionLocal()

    try:
        db.execute(text("SELECT 1"))

        db.close()

        return {
            "api": "healthy",
            "database": "connected"
        }

    except Exception:

        db.close()

        return {
            "api": "healthy",
            "database": "disconnected"
        }
    
@router.get("/dashboard/stats")
def dashboard_stats():

    db = SessionLocal()

    total_incidents = db.query(IncidentDB).count()

    open_incidents = db.query(IncidentDB).filter(
        IncidentDB.status == "Open"
    ).count()

    resolved_incidents = db.query(IncidentDB).filter(
        IncidentDB.status == "resolve"
    ).count()

    db.close()

    return {
        "total_incidents": total_incidents,
        "open_incidents": open_incidents,
        "resolved_incidents": resolved_incidents
    }