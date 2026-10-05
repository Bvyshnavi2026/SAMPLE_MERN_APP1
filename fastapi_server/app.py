from fastapi import FastAPI
# calling the models fields
from routes.student import student_router
# where folder name file name and route name
from routes.staff import staff_router
#  5,7 lines is for importing routes to app.py file
#  calling the tables 
# where app is varaiable
app=FastAPI()
# localhost:8000/getStudents
app.include_router(student_router)
app.include_router(staff_router)
# here we including the routers