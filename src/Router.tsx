import React from "react"
import { BrowserRouter } from 'react-router-dom';
import { useAuthContext } from "./context/AuthContext";
import AuthorizedRoutes from "./Routes/AuthorizedRoutes";
import UnauthorizedRoutes from "./Routes/UnauthorizedRoutes";

const Router: React.FC = () => {

  const { isAuthenticated } = useAuthContext()

  return(
    
    <BrowserRouter>
      {isAuthenticated ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}
    </BrowserRouter>
  )
}

export default Router