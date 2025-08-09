import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';

const Login = ({ uname, handleLogin, unameRef, pwordRef }) => {
    const navigate = useNavigate();
    console.log(`LOGIN: uname=${uname}`)

    useEffect(() => {
        if (uname) {
            console.log(`LOGIN: navigate( '/dashboard')`);
            navigate("/dashboard");
        }
    }, [uname, navigate]);

    return (
        <form>
        <div className="login-container">
            <div className="login-content">
                <h1>Login</h1>

                <div> <input placeholder='Username' type='text' ref={unameRef} /></div>
                <div> <input placeholder='Password' type='password' ref={pwordRef} /></div>
                <button onClick={handleLogin}>Login</button>

                <p style={{ marginTop: '10px' }}>
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </div>
            </div>
        </form>
    );
};

export default Login;
