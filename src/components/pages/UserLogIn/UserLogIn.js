import React from "react";
import { useState } from "react";
import LogIn from "../../LogIn/LogIn";
import SignUp from "../../SignUp/SignUp";
import SocialLogIn from "../../SocialLogIn/SocialLogIn";
import "./UserLogIn.css";
const UserLogIn = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="login-form">
      <div className="form-container">
        <div className="left-content">
          {isClick ? <LogIn /> : <SignUp />}
          <SocialLogIn/>
        </div>
        <div className="right-content p-4 d-flex justify-content-center align-items-center">
          {isClick ? (
            <div>
              <h2 className="fw-bold">Hello, Friend!</h2>
              <p>Enter your personal details and start journey with us</p>
              <button
                onClick={() => setIsClick(!isClick)}
                className="btn btn-outline-light"
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div>
              <h2 className="fw-bold">Welcome Back!</h2>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => setIsClick(!isClick)}
                className="btn btn-outline-light"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserLogIn;
