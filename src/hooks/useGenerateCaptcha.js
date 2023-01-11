import React, { useEffect, useState } from "react";
function useGenerateCaptcha(input) {
  const [captcha, setCaptcha] = useState();
  const [match, setMatch] = useState(false);

  useEffect(() => {
    if (input?.trim() === captcha?.trim()) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  }, [input]);
  const alphabets =
    "!@#$%^&*+_-~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  function generate(chars) {
    let randomCaptcha = "";
    for (let i = 0; i < chars; i++) {
      randomCaptcha += alphabets.charAt(Math.random() * alphabets.length);
    }

    setCaptcha(randomCaptcha);
  }

  return { captcha, generate, match };
}

export default useGenerateCaptcha;
