from fastapi import APIRouter
from models import Student
from database import student_collection
student_router=APIRouter(prefix="/student",tags=["student"])
# localhost:8000/student/getstudent
#  creating the route 
@student_router.get("/getStudent")
def getStudent():
    return "get student method called"
# localhost:8000/student/addstudent
@student_router.get("/addStudent")
def addStudent():
    return "add student method called"
