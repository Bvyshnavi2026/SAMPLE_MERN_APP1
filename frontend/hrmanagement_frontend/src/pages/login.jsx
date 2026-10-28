import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Login()
{
    let [email,setEmail] =useState("")
    let [password,setPassword]=useState("")
    let navigate=useNavigate()
    let handleLogin=async(event)=>{
        event.preventDefault()
        if(email=="admin@gmail.com"&& password=="admin"){
                // navigate to adminhome
                navigate("/adminhome")
        }else{
            let req = await fetch("http://localhost:3000/api/emp/login",
                {method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({email,password})
                });
            let data=await req.json()
            console.log(data)
            if(data.user){
                if(data.user.role=="HR"){
                    navigate("/hrhome")
                }else{
                    navigate("/emphome")
                }
            }else{

            }
        }
    }
                // check with my db credentials
                // then decide hrhome or emphome
            
    return(<div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <input type="email"
            onChange={(event)=>setEmail(event.target.value)} 
            value={email}
            placeholder="Enter emailid"></input><br/>
            <input type="password"
            onChange={(event)=>setPassword(event.target.value)}
            value={password}
             placeholder="Enter password"></input><br/>
            <button type="submit">Login</button>

        </form>

    </div>)
}
export default  Login
