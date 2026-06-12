from pydantic import BaseModel
from typing import Optional

class Incident(BaseModel):
    id: Optional[int] = None
    title: str
    severity: str
    status: str