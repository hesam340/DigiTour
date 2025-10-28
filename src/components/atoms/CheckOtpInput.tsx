"use client";

import OTPInput from "react-otp-input";
import { useEffect, useState } from "react";

import { TCheckOtpInput } from "@/core/types/props";
import { e2p, p2e } from "@/core/utils/replaceNumber";

function CheckOtpInput({ code, setCode, error, doShake }: TCheckOtpInput) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const screen = () => {
      if (window.innerWidth >= 768) {
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
      }
    };
    screen();

    window.addEventListener("resize", screen);

    return () => window.removeEventListener("resize", screen);
  }, []);

  useEffect(() => {
    if (doShake) {
      setIsShaking(false);
      requestAnimationFrame(() => setIsShaking(true));
    }
  }, [doShake]);

  return (
    <OTPInput
      value={e2p(code)}
      onChange={(value) => setCode(p2e(value))}
      numInputs={6}
      renderInput={(props) => (
        <input {...props} className={`${isShaking ? "shake" : ""}`} />
      )}
      inputStyle={{
        width: isLargeScreen ? "57px" : "48px",
        height: isLargeScreen ? "53px" : "45px",
        border: error ? "1px solid #ef4444" : "1px solid #00000040",
        borderRadius: "6px",
        fontSize: isLargeScreen ? "1.8rem" : "1.25rem",
        textAlign: "center",
        outline: "none",
        color: "#000000",
      }}
      containerStyle={{
        direction: "ltr",
        display: "flex",
        justifyContent: "center",
        gap: 10,
      }}
    />
  );
}

export default CheckOtpInput;
