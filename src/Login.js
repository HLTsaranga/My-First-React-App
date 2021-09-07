import React from "react";
//document.body.style.backgroundColor = "#ede8e9";

const Login= ()=>{
    return(
        <div>  
            Login now <br></br>
           
        <div><br></br>
            User Name<br/>
            <input
                type="text"
            />      
        </div>
        <div> 
            Password<br/>
            <input
                type="password"
            />   
        </div>  
        <div> <br></br>
            <input
                type="button"
                value="Login"
   
            />  
             
            <div> <br></br> 
            Register here <br></br>
           
            <button onclick="location.href='/Register'">Register</button>
            
        </div>
                 
        </div>
        </div>

    )
}
export default Login;
