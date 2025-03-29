import { createContext, useState } from 'react';

export const AuthContext = createContext({});

export function AuthProvider({ children }){
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);

    function signin(token){
        setIsAuth(true);
        setToken(token);
    }

    function signout(){
        setIsAuth(false);
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{ isAuth, token, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}
