import React, { useEffect, useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const submitregister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photourl = e.target.photourl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must have at least 1 uppercase, 1 lowercase letter and be 6 characters long."
      );
      toast.error(
        "Password must have at least 1 uppercase, 1 lowercase letter and be 6 characters long."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        result.user.displayName = name;
        result.user.photoURL = photourl;
        toast.success("Registration Successful!");
        navigate(from, { replace: true });
      })
      .catch(() => {
        setError("Registration failed. Try again.");
        toast.error("Error creating account!");
      });
  };

  const handleGoogleRegister = () => {
    googleLogin()
      .then(() => {
        toast.success("Registered with Google!");
        navigate(from, { replace: true });
      })
      .catch(() => {
        toast.error("Google registration failed!");
      });
  };

  useEffect(() => {
    document.title = "NeonBytes Store | Register";
  }, []);

  return (
    <div className="hero max-w-11/12 mx-auto bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-[#e0f2f5] w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-[#0cc0df]">
                Register Now
              </h1>
            </div>

            <form onSubmit={submitregister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                  required
                />
                <label className="label">Photo Url</label>
                <input
                  name="photourl"
                  type="text"
                  className="input"
                  placeholder="Photo Url"
                />
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
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
                <ul className="text-left text-gray-500 text-sm mt-2">
                  <li>• Must have an Uppercase letter</li>
                  <li>• Must have a Lowercase letter</li>
                  <li>• Length must be at least 6 characters</li>
                </ul>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <button
                  type="submit"
                  className="btn mt-4 bg-[#0cc0df] text-white w-full"
                >
                  Register
                </button>
              </fieldset>
            </form>

            <div className="divider">OR</div>

            <button
              onClick={handleGoogleRegister}
              className="btn w-full border border-[#0cc0df] text-[#0cc0df] hover:bg-[#0cc0df] hover:text-white"
            >
              Continue with Google
            </button>

            <p className="text-center mt-4 text-gray-600">
              Already Have an Account?{" "}
              <NavLink
                to="/login"
                state={{ from }}
                className="text-[#04a8c5] font-semibold link-hover"
              >
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
