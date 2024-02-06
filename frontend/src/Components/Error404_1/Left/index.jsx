import React from "react";
import "./style.css";
import useStoryContext from "../../../hooks/useProductContext";
import { useNavigate } from "react-router-dom";

export default function Index() {
  let navigate = useNavigate();
  let { setLogin } = useStoryContext();

  let activateLogin = () => {
    setLogin(true);
    navigate("/login-signup");
  };

  let activateSignUp = () => {
    setLogin(false);
    navigate("/login-signup");
  };

  return (
    <div className="left-forms-container">
      {/* Shapes */}
      <div className="eclipse"></div>
      <p className="eclipse-caption">DM.</p>

      <div className="forms-captions-contents">
        <h2 className="heading-content">We are end up in error as </h2>
        <h2 className="heading-content tricolour">Email not found</h2>
        <p className="heading-caption">
          Please login/Sign Up to the account back
        </p>
      </div>
      <div className="login-signup-btns">
        <button
          type="submit"
          className="login-btn"
          onClick={() => activateLogin()}
        >
          Login/Admin Login
        </button>
        <button
          type="submit"
          className="signup-btn"
          onClick={() => activateSignUp()}
        >
          Sign Up
        </button>
      </div>
      {/* Shapes */}
      <div className="circle"></div>
    </div>
  );
}
