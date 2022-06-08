import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {login} from "../Redux&Store/auth";

function Login() {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

  const dispatch=useDispatch();
  const handlesubmit=(e)=>{
       e.preventDefault();
       if(!password || !email){
         alert("Enter  Remaining Details");
         return;
       }
       
       dispatch(login());
       

    }
  const handleInput=(e)=>{
    // [e.target.name]=e.target.value;
    if(e.target.name==="email"){
      setemail(e.target.value);
    }
    else{
      setpassword(e.target.value)
    }
  

  }
  return (
    <div className="main-container">
        <div className="container">

        <h1>Login</h1>
        <form onSubmit={handlesubmit}>
        <h4>Email</h4>
        <input type="email" placeholder='enter email' name="email" onChange={(e)=>handleInput(e)}></input>
        <h4>password</h4>
        <input type="password" placeholder='enter password' name="password" onChange={(e)=>handleInput(e)}></input>
        <button type='submit' className='submitBtn'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Login