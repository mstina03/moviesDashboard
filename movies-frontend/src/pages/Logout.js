import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ uname, handleLogout }) => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log(`LOGOUT: uname=${uname}`);

        handleLogout();

        navigate('/login');

    }, [handleLogout, navigate]); 

    return (
        <div className="login-container">
            <div className="login-content">
                <h1>Logging out...</h1>
                <p>Goodbye, {uname}</p>
            </div>
        </div>
    );
}

export default Logout;
