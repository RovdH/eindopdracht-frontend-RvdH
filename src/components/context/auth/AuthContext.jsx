import {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {isValidToken} from "../../../helpers/isValidToken.js";
import axios from "axios";

export const AuthContext = createContext(null);

export function AuthProvider({children}) {
    const [auth, setAuth] = useState({isAuth: false, user: null, status: "pending"});
    const navigate = useNavigate();

    useEffect(() => {
            const storedToken = localStorage.getItem("token")
            if (storedToken && isValidToken(storedToken)) {
                void signin(storedToken)
            } else {
                void signout();
            }
        },
        []);

    const signin = async (jwtToken) => {
        localStorage.setItem("token", jwtToken);

        try {
           const response = await axios.get(
                `https://frontend-educational-backend.herokuapp.com/api/user`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`,
                    },
                },
            );

            setAuth({
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                    roles: response.data.roles,
                },
                status: "done",
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
            {auth.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}
