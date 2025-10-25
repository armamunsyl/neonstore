import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import app from "../firebase.config";

const auth = getAuth(app);

const ForgotPass = () => {
  const location = useLocation();
  const prefilledEmail = location.state?.email || "";
  const [email, setEmail] = useState(prefilledEmail);

  useEffect(() => {
    document.title = "Forgot Password";
  }, []);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset link sent! Redirecting to Gmail...");
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 10);
      })
      .catch(() => {
        toast.error("Failed to send reset email!");
      });
  };

  return (
    <div className="hero max-w-11/12 mx-auto bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-[#e0f2f5] w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-[#0cc0df]">
                Reset Password
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Enter your email to receive a reset link
              </p>
            </div>

            <form onSubmit={handleReset}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="btn mt-4 bg-[#0cc0df] text-white w-full"
                >
                  Send Reset Link
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
