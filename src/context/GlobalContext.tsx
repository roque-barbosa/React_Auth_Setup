import React from 'react'
import { AuthContextProvider } from './AuthContext'

const GlobalContext: React.FC = ({children}) => {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  )
}
export default GlobalContext