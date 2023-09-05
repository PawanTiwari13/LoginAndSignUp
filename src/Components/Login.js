import React, { useState } from "react";
import "./Login.css";
function Login() {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    console.log("Username:", username);
  };

  return (
    <div>
      <div className="login-container">
        <div className="atlassian-view">
          <img className="image" src="../../src/Images/atlassian.png" />
          <text className="atlassian">ATLASSIAN</text>
        </div>

        <h4 className="loginToContinue">Login to continue</h4>
        <div>
          <input
            type="text"
            placeholder=" Enter Your Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <button className=" button" onClick={handleLogin}>
            Continue
          </button>
        </div>
        <div className="or">
          <text>Or continue with:</text>
        </div>
        <div className="google">
          <img className="icon" src="../../src/Images/atlassian.png" />

          <a className="signInOption">Google</a>
        </div>

        <div className="google">
          <img className="icon" src="../../src/Images/atlassian.png" />
          <text className="signInOption">Microsoft</text>
        </div>
        <div className="google">
          <img className="icon" src="../../src/Images/atlassian.png" />

          <a className="signInOption">Apple</a>
        </div>

        <div className="otherOption">
          <text className="CantLoginIn">can't log in?</text>
          <text className="CantLoginIn">Create an account</text>
        </div>
        <div className="separator"> </div>
        <div className="atlassian-view-two">
        <img className="imageOne" src="../../src/Images/atlassian.png" />
          <text className="atlassianOne">ATLASSIAN</text>
                </div>
                <div>
                    <text className="text">One account for Jira, Confluence, Trello and <text className="more">more</text></text>
                </div>
      </div>
    </div>
  );
}

export default Login;
