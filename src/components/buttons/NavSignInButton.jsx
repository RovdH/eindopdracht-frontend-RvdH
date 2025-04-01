import React, { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import { AuthContext } from "../context/auth/AuthContext.jsx";
import SignInButton from "./SignInButton.jsx";

const NavSigninButton = () => {
    const { isAuth, signout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAuth = () => {
        if (isAuth) {
            signout();
        } else {
        navigate('/sign-in' );
        }
    };

    return (
        <SignInButton
            isAuth={isAuth}
            handleAuth={handleAuth}
            variant="btn_lightgreen"
        />
    );
};
export default NavSigninButton;