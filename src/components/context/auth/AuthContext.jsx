import {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import {isValidToken} from "../../../helpers/isValidToken.js";

export const AuthContext = createContext({});

function AuthProvider({children}) {
    const [auth, setAuth] = useState({isAuth: false, user: null, status: "pending"});
    // const [token, setToken] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("token")
        if (storedToken && isValidToken(storedToken)){ void signin(storedToken)} else { void signout(); } },
        []);

    const signin = async (jwtToken) => {
        const decodedToken = jwtDecode(jwtToken)
        localStorage.setItem("token", jwtToken)

        try {
            const response = await axios.get(`URI/${decodedToken.sub}`, {
                headers: {"Content-type": "application/json"},
                Authorization: `Bearer ${jwtToken}`,
            },);

            setAuth({
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.sub,
                    // await signin(token)
                },
                status: "done"
            });
        } catch (error) {
            console.log(error)
        }


    };

    const signout = async () => {
        localStorage.clear();
        setAuth({
            isAuth: false,
            user: null,
            status: "done",
        });
        navigate("/");
    };

    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        signin,
        signout,
    };

    return (
        <AuthContext.Provider value={data}>
            {auth.status === "done" ? {children} : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthProvider;