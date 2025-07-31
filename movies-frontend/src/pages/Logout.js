import { useNavigate } from "react-router-dom";

const Logout = ({ uname }) => {
    const navigate = useNavigate();
    console.log(`HOME: uname=${uname}`)

    return (<div>
        <h1>Logout</h1>
        <h3>Login Successful {uname}</h3>
    </div>)
}
export default Logout;