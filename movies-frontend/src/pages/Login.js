import { useNavigate } from "react-router-dom";

const Login = ({ uname }) => {
    const navigate = useNavigate();
    console.log(`HOME: uname=${uname}`)

    return (<div>
        <h1>Login</h1>
        <h3>Login Successful {uname}</h3>
    </div>)
}
export default Login;