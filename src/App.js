import React, { useState } from 'react'
import Login from './Components/login'
import "./style.css";
import Main from"./Components/main";
import { useSelector } from 'react-redux';
function App() {
   const isLoggedIn=useSelector((state)=>{return state.auth.isLoggedIn})
  
  
  return (
    <>
    {!isLoggedIn && <Login ></Login>}
    {isLoggedIn && <Main></Main>}
    </>
  )
}

export default App