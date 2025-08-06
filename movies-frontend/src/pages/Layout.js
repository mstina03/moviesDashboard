import { Outlet, Link } from "react-router-dom";
import './Layout.css';


const Layout = () => {
    return (
        <>
            <nav>
                <div className="nav-left">
                    {/* <img src="./IMG_5098.jpeg" alt="Logo" className="logo" /> */}
                    <span className="nav-title">Movies Dashboard</span>
                </div>
                <ul>
                    {/* <li>
                        <Link to="/">Home</Link>&nbsp;&nbsp;
                    </li> */}
                    {/* <li>
                        <Link to="/login">Login</Link>&nbsp;&nbsp;
                    </li> */}
                    {/* <li>
                        <Link to="/logout">Logout</Link>&nbsp;&nbsp;
                    </li> */}
                </ul>
            </nav>
            <Outlet />
        </>
    )
};
export default Layout;