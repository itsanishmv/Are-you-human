import React, { useEffect, useState } from "react";
import "./App.css";
import Captcha from "./components/Captcha/Captcha";
import useGenerateCaptcha from "./hooks/useGenerateCaptcha";
function App() {
  const [input, setInput] = useState("");
  const [validateCpatcha, setValidateCaptcha] = useState();
  const [success, setSuccess] = useState(false);
  const { captcha, generate, match } = useGenerateCaptcha(input);
  useEffect(() => {
    generate(6);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (match) {
      setValidateCaptcha(true);
      setSuccess(true);
    } else {
      setValidateCaptcha(false);
    }
    setInput(" ");
    generate(6);
  }
  return (
    <div className="app__container">
      <div className="form__wrapper">
        <img
          style={{
            objectFit: "contain",
            width: "7rem",
          }}
          src="https://softr-prod.imgix.net/applications/9d5e7a64-e0eb-4200-887e-f642ba902626/assets/cf0a1430-49e1-4871-96a4-5fe7ac8617c8.png"
          alt="logo"
        />
        <form onSubmit={(e) => handleSubmit(e)}>
          <input autoComplete="off" required type="email" placeholder="Email" />
          <input
            autoComplete="off"
            required
            type="text"
            placeholder="Full name"
          />
          <input
            autoComplete="off"
            required
            type="password"
            placeholder="Password"
          />
          <Captcha captcha={captcha} generate={generate} />

          <input
            style={{
              border:
                validateCpatcha !== undefined
                  ? !validateCpatcha && "2px solid red"
                  : "",
            }}
            value={input}
            required
            className="captcha__input"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter the captcha here"
          />

          {validateCpatcha !== undefined
            ? !validateCpatcha && (
                <span style={{ marginTop: "-15px", fontSize: "0.625rem" }}>
                  Invalid captcha
                </span>
              )
            : ""}

          <button
            // disabled={isDisabled}
            className="signup__btn"
          >
            Sign-up
          </button>
          {validateCpatcha && (
            <p className="success__message">Successfully registered!!!</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
