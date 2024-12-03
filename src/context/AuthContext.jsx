
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider({children}) {
 const [user, setUser] = useState({
    isLogin : false,
    userInfo : {},
 });

 const [loading, setLoading] = useState(true);

 function onAuthChanged(user) {
    setUser(user);
    if(initializing) setLoading(false);
 }

 useEffect(() => {
    const subscriber = onAuthStateChanged(onAuthChanged);
    return subscriber;
 },[])

  return (   
    <AuthContextProvider value={{user,setUser}}>
       {loading ? "Loading........." : children}
    </AuthContextProvider>
  )
}

export default AuthContextProvider;