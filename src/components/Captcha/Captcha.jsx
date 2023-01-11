import React, { useEffect, useState } from "react";
import "./captcha.css";
import RESET_ICON from "../../assets/reset_icon.svg";

function Captcha({ captcha, generate }) {
  return (
    <div className="captcha__container">
      <div className="captcha__wrapper">
        <input
          className="display__captcha"
          type="text"
          readOnly
          value={captcha}
        />

        <img
          onClick={() => generate(6)}
          className="reset__btn"
          src={RESET_ICON}
          alt="reset"
        />
      </div>
    </div>
  );
}

export default Captcha;
