import { useState } from "react"

function Contact(){
    let [name,setName]=useState("")
    let [age,setAge]=useState(18)
    let [emailid,setEmailid]=useState("")
    let [colname,setColname]=useState("VFSTR")
    let RegisterForm=(event)=>{
        event.preventDefault();
        console.log(name);
    }
    return(
        <div>
           <h1>Contact Page </h1>
           <form onSubmit={RegisterForm}>
               <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your name"></input>
            <br/>
                 <input type="number" value={age} onChange={(event)=>setAge(event.target.value)} placeholder="Enter your age"></input>
            <br/>
             <input type="email"  value={emailid} onChange={(event)=>setEmailid(event.target.value)}placeholder="Enter your emailid"></input>
            <br/>
            <input type="college"  value={colname} onChange={(event)=>setColname(event.target.value)}placeholder="Enter your collegename"></input>
            <br/>
               <button type="Submit">Register</button>
           </form>
           <p>{name}</p>
           <p>{age}</p>
           <p>{emailid}</p>
           <p>{colname}</p>
        </div>
    )
}
export default Contact