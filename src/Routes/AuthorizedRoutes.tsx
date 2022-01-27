import React from "react"
import { Routes, Route } from 'react-router-dom';
import DashboardPage from "../pages/Dashboard/Dashboard";

const AuthorizedRoutes: React.FC = () => {

  return(
    
      <Routes>
        <Route path="/dashboard" element={<DashboardPage/>}>
          <Route index element={<DashboardPage/>}/>
        </Route>
        <Route path="/*" element={<DashboardPage/>}>
          <Route index element={<DashboardPage/>}/>
        </Route>
      </Routes> 
    
  )
}

export default AuthorizedRoutes