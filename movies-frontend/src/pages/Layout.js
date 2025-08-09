import { Outlet, Link, useLocation } from "react-router-dom";
import './Layout.css';

const Layout = ({uname}) => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <>
            <nav>
                <div className="nav-left">
                    <span className="nav-title">Movies Dashboard</span>
                </div>
                <ul>
                    {/* <li><Link to="/">Home</Link>&nbsp;&nbsp;</li> */}

                    {currentPath !== "/login" && currentPath !== "/dashboard" && !uname && (
                        <li><Link to="/login">Login</Link>&nbsp;&nbsp;</li>
                    )}

                    {currentPath !== "/login" && currentPath !== "/dashboard" && currentPath !== "/register" && uname && (
                        <li><Link to="/dashboard">Dashboard</Link>&nbsp;&nbsp;</li>
                    )}

                    {currentPath !== "/about" && (
                        <li><Link to="/about">About</Link>&nbsp;&nbsp;</li>
                    )}

                    <li>
                        <a
                            href="https://www.linkedin.com/in/smithtina1203"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>&nbsp;&nbsp;
                    </li>
                    <li>
                        <a
                            href="https://mstina03.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>&nbsp;&nbsp;
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;
