import { useState } from "react";
import "./App.css";
import log from "./img/log.svg";
import register from "./img/register.svg";

function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  const mode = isSignIn ? "sign-in-mode" : "sign-up-mode";
  return (
    <div className="App">
      <div className={`container ${mode}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign In</h2>
              <div className="input-field">
                <i>I</i>
                <input type="text" name="" id="" placeholder="Username" />
              </div>
              <div className="input-field">
                <i>I</i>
                <input type="password" name="" id="" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or sign in with social platforms</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  F
                </a>
                <a href="/" className="social-icon">
                  T
                </a>
                <a href="/" className="social-icon">
                  G
                </a>
                <a href="/" className="social-icon">
                  L
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign Up</h2>
              <div className="input-field">
                <i>I</i>
                <input type="text" name="" id="" placeholder="Username" />
              </div>
              <div className="input-field">
                <i>I</i>
                <input type="email" name="" id="" placeholder="Email" />
              </div>
              <div className="input-field">
                <i>I</i>
                <input type="password" name="" id="" placeholder="Password" />
              </div>
              <input type="submit" value="Sign Up" className="btn" />
              <p className="social-text">Or sign up with social platforms</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  F
                </a>
                <a href="/" className="social-icon">
                  T
                </a>
                <a href="/" className="social-icon">
                  G
                </a>
                <a href="/" className="social-icon">
                  L
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here?</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique maxime architecto explicabo, quos optio esse vero
                placeat consectetur alias aspernatur magnam sint aliquam
                exercitationem beatae incidunt quis expedita, dolore
                consequatur?
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </button>
            </div>
            <img src={log} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>New here?</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique maxime architecto explicabo, quos optio esse vero
                placeat consectetur alias aspernatur magnam sint aliquam
                exercitationem beatae incidunt quis expedita, dolore
                consequatur?
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => setIsSignIn(true)}
              >
                Sign In
              </button>
            </div>
            <img src={register} className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
