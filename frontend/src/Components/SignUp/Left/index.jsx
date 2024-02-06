import React, { useRef } from "react";
import useStoryContext from "../../../hooks/useProductContext";

export default function Index() {
  let useRefLogin = useRef();
  let useRefSignUp = useRef();
  let useRefCredEmailBox = useRef();
  let {
    login,
    setLogin,
    name,
    setName,
    password,
    setPassword,
    email,
    setEmail,
  } = useStoryContext();
  let onClickSetLogin = () => {
    useRefSignUp.current.style.color = "#A8A8A8";
    useRefLogin.current.style.color = "#2e2a2a";
    useRefCredEmailBox.current.style.borderRight = "0.5rem solid #7836FE";
    setLogin(true);
  };
  let onClickSetSignUp = () => {
    useRefCredEmailBox.current.style.borderRight = "none";
    useRefSignUp.current.style.color = "#2e2a2a";
    useRefLogin.current.style.color = "#A8A8A8";
    setLogin(false);
  };

  let saveEmailId = () => {
    localStorage.setItem("email", email);
  };

  return (
    <div className="left-forms-container">
      <form
        method="post"
        action={`${process.env.REACT_APP_HOST}/register-login`}
      >

        <div className="forms-captions-contents">
          <h2 className="heading-content">We are</h2>
          <h2 className="heading-content tricolour">Abstract World</h2>
          <p className="heading-caption">
            Welcome back, Please login to the account
          </p>
        </div>
        <div className="login-signup-caption">
          <p
            className="login-caption"
            onClick={() => onClickSetLogin()}
            ref={useRefLogin}
          >
            Login/Admin Login
          </p>
          <p
            className="signup-caption"
            onClick={() => onClickSetSignUp()}
            ref={useRefSignUp}
          >
            Sign Up
          </p>
        </div>
        <div className="inputs-cred-user">
          {!login && (
            <div className="input-name">
              <p className="your-name-caption">Your Name</p>
              <input
                type="text"
                name="name"
                className="name"
                placeholder="Name..."
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="input-email-id" ref={useRefCredEmailBox}>
            <p className="your-email-caption">Your Email</p>
            <input
              type="email"
              name="email"
              className="email-id"
              placeholder="abc@xyz.com"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-passwd">
            <p className="your-passwd-caption">Password</p>
            <input
              type="password"
              name="password"
              className="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="forgot-passwd">
          <p className="forgot-passwd-caption">Forgot Password?</p>
        </div>
        <div className="login-signup-btns">
          {login && (
            <button
              type="submit"
              className="login-btn"
              onClick={() => saveEmailId()}
            >
              Login
            </button>
          )}
          {!login && (
            <button
              type="submit"
              className="signup-btn"
              onClick={() => saveEmailId()}
            >
              Sign Up
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
