import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = ({ handleRegister }) => {
    const unameRef = useRef();
    const pwordRef = useRef();
    const pword2Ref = useRef();
    const navigate = useNavigate();

    const onSubmit = () => {
        const uname = unameRef.current.value.trim();
        const pword = pwordRef.current.value.trim();
        const pword2 = pword2Ref.current.value.trim();


        if (!uname || !pword || !pword2) {
            alert("All fields are required.");
            return;
        } else if (pword !== pword2) {
            alert("Passwords does not match.");
            return;

        }

        handleRegister(uname, pword);
        navigate("/login"); // Redirect to login after registration
    };

    return (
        <div className="register-container">
            <div className="register-content">
                <h1>Register User</h1>

                <div>
                    <input placeholder="Username" type="text" ref={unameRef} />
                </div>
                <div>
                    <input placeholder="Password" type="password" ref={pwordRef} />
                </div>
                <div>
                    <input placeholder="Repeat Password" type="password" ref={pword2Ref} />
                </div>

                <button onClick={onSubmit}>Register</button>
            </div>
        </div>
    );
};

export default Register;
