import React from "react";

//document.body.style.backgroundColor = "#ede8e9";
   
const Register= ()=>{
    return(
        <div>  
            Register now <br></br>
           
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
                value="Register"
                
            />  
            
        </div>
        </div>

    )
}
export default Register;
