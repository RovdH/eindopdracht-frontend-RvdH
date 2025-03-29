import React, { useContext } from "react";
import {AuthContext} from "../../components/context/auth/AuthContext.jsx";


function Profile() {
    const { logout } = useContext(AuthContext);

    return (
        <div>
            <h2>Welcome to Your Profile</h2>
            <button onClick={logout}>Sign Out</button>
        </div>
    );
}
export default Profile;