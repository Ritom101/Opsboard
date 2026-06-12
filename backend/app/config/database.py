from sqlalchemy import create_engine
from app.models.db_models import Base

DATABASE_URL = "postgresql://postgres:Ritom100@localhost:5433/opsboard"

engine = create_engine(DATABASE_URL)

Base.metadata.create_all(bind=engine)