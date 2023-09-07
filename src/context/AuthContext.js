import { createContext, useState } from "react";

export const AuthContext = createContext()
export default AuthContext;

export function AuthProvider({children}){
    const persistedAuth = JSON.parse(localStorage.getItem("auth"));
    const [auth, setAuth] = useState(persistedAuth);
    const config = auth && { headers: { Authorization: `Bearer ${auth.token}` } };

    function login(authData){
        setAuth(authData);
        localStorage.setItem("auth", JSON.stringify(authData));
    }

    return(
        <AuthContext.Provider value={{auth, login, config}}>
            {children}
        </AuthContext.Provider>
    )
}

