import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = ({ uname }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!uname) {
            console.log("Redirecting to /login...");
            navigate('/login');
        }
    }, [uname, navigate]);

   
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Home</h1>
                <h3>Login Successful {uname}</h3>
                
            </div>
        </div>
    );
};

export default Home;
