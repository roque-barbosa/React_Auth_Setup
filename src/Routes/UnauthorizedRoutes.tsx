import React from "react"
import { Routes, Route } from 'react-router-dom';
import LoginPage from "../pages/login/login";
import SignupPage from "../pages/signup/Signup";

const UnauthorizedRoutes: React.FC = () => {

  return(
    
      <Routes>
        <Route path="/login" element={<LoginPage/>}>
          <Route index element={<LoginPage/>}/>
        </Route>
        <Route path="/signup" element={<SignupPage/>}>
          <Route index element={<SignupPage/>}/>
        </Route>
        <Route path="/*" element={<LoginPage/>}>
          <Route index element={<LoginPage/>}/>
        </Route>
      </Routes> 
    
  )
}

export default UnauthorizedRoutes