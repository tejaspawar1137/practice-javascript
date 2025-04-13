import React,{createContext, useState} from 'react'

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
 console.log(user,'user')
  const login = (username) => setUser({name: username});
  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{user,logout,login}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}