import React, { useEffect, useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const submithandle = (e) => {
        e.preventDefault();
        const password = e.target.password.value;

        loginUser(email, password)
            .then(() => {
                toast.success("Login Successful!");
                navigate(from, { replace: true });
            })
            .catch(() => {
                setError("Invalid email or password!");
                toast.error("Login Failed! Please check credentials.");
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success("Logged in with Google!");
                navigate(from, { replace: true });
            })
            .catch(() => {
                toast.error("Google Login Failed!");
            });
    };

    useEffect(() => {
        document.title = "Login";
    }, []);

    return (
        <div className="hero max-w-11/12 mx-auto bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-[#e0f2f5] w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-[#0cc0df]">Login now!</h1>
                        </div>

                        <form onSubmit={submithandle}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label className="label">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                    required
                                />
                                {error && <p className="text-red-500 mt-2">{error}</p>}
                                <div>
                                    <NavLink
                                        to="/forgotpass"
                                        state={{ email }}
                                        className="link link-hover text-sm text-gray-500"
                                    >
                                        Forgot password?
                                    </NavLink>
                                </div>
                                <button
                                    type="submit"
                                    className="btn mt-4 bg-[#0cc0df] text-white w-full"
                                >
                                    Login
                                </button>
                            </fieldset>
                        </form>

                        <div className="divider">OR</div>

                        <button
                            onClick={handleGoogleLogin}
                            className="btn w-full border border-[#0cc0df] text-[#0cc0df] hover:bg-[#0cc0df] hover:text-white"
                        >
                            Continue with Google
                        </button>

                        <p className="text-center mt-4 text-gray-600">
                            Don’t have an account?{" "}
                            <NavLink
                                to="/register"
                                className="text-[#04a8c5] font-semibold link-hover"
                            >
                                Register
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
