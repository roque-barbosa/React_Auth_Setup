import React, {createContext, useState} from 'react'
import { AUTHORIZATION_TOKEN, USER_PAYLOAD } from 'src/constants/constants'
import { clearStorage, getStorageItem, setStorageItem } from 'src/utils/storage'
import { LoginType, PropsAuthContext } from './ContextTypes'

/*
  Auth Context default values, what the state has
  This context has a state with the token and 
  the user info, and the functions who deal with
  login and logout
*/
const DEFAULT_VALUE: PropsAuthContext = {
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
}

// Creating AuthContext
const AuthContext = createContext<PropsAuthContext>(DEFAULT_VALUE)

/*
  This function will provide the information to our react components
  Our login token will be kept on the local storage with the user info
  and the context will have the isAuthenticated attribute with the
  functions login and logout
*/ 

const AuthContextProvider: React.FC = ({children}) => {
  const token = getStorageItem(AUTHORIZATION_TOKEN)
  
  const [isAuthenticated, setIsAuthenticated] = useState(() => Boolean(token))
  
  function login({token, user}: LoginType) {
    setIsAuthenticated(true)
    setStorageItem(AUTHORIZATION_TOKEN, token)
    setStorageItem(USER_PAYLOAD, user)
  }

  function logout(){
    setIsAuthenticated(false)
    clearStorage()
  }
  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

/*
  Helper funcion to recuperate the context in a simpler way
*/

export function useAuthContext() {
  const context = React.useContext(AuthContext)
  return context;
}

export {AuthContextProvider}
export default AuthContext