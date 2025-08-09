import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = ({ handleRegister }) => {
    const unameRef = useRef();
    const pwordRef = useRef();
    const pword2Ref = useRef();
    const navigate = useNavigate();


    const [errors, setErrors] = useState({
        uname: "",
        pword: "",
        pword2: "",
        general: ""
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        const uname = unameRef.current.value.trim();
        const pword = pwordRef.current.value.trim();
        const pword2 = pword2Ref.current.value.trim();

        setErrors({ uname: "", pword: "", pword2: "", general: "" });

        let hasError = false;
        const newErrors = {};

        if (!uname) {
            newErrors.uname = "Username is required.";
            hasError = true;
        }
        if (!pword) {
            newErrors.pword = "Password is required.";
            hasError = true;
        }
        if (!pword2) {
            newErrors.pword2 = "Please repeat the password.";
            hasError = true;
        }
        if (pword && pword2 && pword !== pword2) {
            newErrors.pword2 = "Passwords do not match.";
            hasError = true;
        }

        if (hasError) {
            setErrors(newErrors);
            return;
        }

        try {
            // Step 1: Check if username exists (POST with JSON body)
            const res = await fetch("http://localhost:5050/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ uname })
            });

            if (!res.ok) {
                const text = await res.text();
                console.error("Server error:", text);
                setErrors(prev => ({ ...prev, general: "Server error, please try again." }));
                return;
            }

            const data = await res.json();

            if (data.users && data.users.length > 0) {
                setErrors(prev => ({ ...prev, uname: "Username is taken." }));
                return;
            }

            // Step 2: Register user
            await handleRegister(uname, pword);
            navigate("/login");

        } catch (err) {
            console.error("Registration error:", err);
            setErrors(prev => ({ ...prev, general: "Something went wrong. Please try again." }));
        }

    };

    return (
        <div className="register-container">
            <div className="register-content">
                <form onSubmit={onSubmit}>
                    <h1>Register User</h1>

                    <div>
                        <input placeholder="Username" type="text" ref={unameRef} />
                        {errors.uname && <div className="error">{errors.uname}</div>}
                    </div>

                    <div>
                        <input placeholder="Password" type="password" ref={pwordRef} />
                        {errors.pword && <div className="error">{errors.pword}</div>}
                    </div>

                    <div>
                        <input placeholder="Repeat Password" type="password" ref={pword2Ref} />
                        {errors.pword2 && <div className="error">{errors.pword2}</div>}
                    </div>

                    {errors.general && <div className="error general-error">{errors.general}</div>}

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
