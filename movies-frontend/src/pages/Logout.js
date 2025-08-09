import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ uname, handleLogout }) => {
    const navigate = useNavigate();

    console.log(`LOGIN: uname=${uname}`)
    
    useEffect(() => {
        if (!uname) {
            console.log(`LOGIN: navigate( '/login')`);
            navigate('/login'); // <-- redirect
        }
    }, [uname, navigate]);

    return (
        <div className="login-container">
            <div className="login-content">
                <h1>Logout</h1>
                <h5>Click to logout, {uname}</h5>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}
export default Logout;