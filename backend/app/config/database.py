from sqlalchemy import create_engine
from app.models.db_models import Base
import os

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)

Base.metadata.create_all(bind=engine)