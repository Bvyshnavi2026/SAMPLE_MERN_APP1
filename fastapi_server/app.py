from fastapi import FastAPI
from pydantic import BaseModel
class Student(BaseModel):
    name:str
    email:str
    age:int
    mark:float
# where app is varaiable
app=FastAPI()
# localhost:8000/getStudents
@app.get("/getStudents")
def getStudents():
    return"get students api called"
# where Student is class name
@app.post("/register")
def register(stu:Student):
    return stu
@app.put("/updateprofile")
def updateprofile():
    return "update profile called"
@app.delete("/deleteprofile")
def delete():
    return "delete profile called"
@app.get("/getStudentDet/{userid}")
def getStudentDet(userid:int):
    return {"user_id":userid}

@app.get("/getStudentsdetails")
def getstudentsdetails(page:int=1,limit:int=10):
    return {"page":page,"limit":limit}
