from fastapi import APIRouter
from models import Staff
from database import student_collection
staff_router=APIRouter(prefix="/staff",tags=["staff"])
# localhost:8000/staff/getstaffs
#  creating the route 
@staff_router.get("/getStaffs")
def getStaffs():
    return "get staff method called"
# localhost:8000/staff/addstaffs
@staff_router.get("/addStaff")
def addStaffs():
    return "add staff method called"









