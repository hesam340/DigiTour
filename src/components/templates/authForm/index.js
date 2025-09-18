"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useGetUserData } from "@/core/services/queries";
import SendOtpForm from "@/components/templates/authForm/SendOtpForm";
import CheckOtpForm from "@/components/templates/authForm/CheckOtpForm";
import ModalContainer from "@/components/partials/container/ModalContainer";

function AuthForm() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const { data } = useGetUserData();
  useEffect(() => {
    if (data?.data && isOpen) {
      setIsOpen(false);
      router.push("/profile");
    }
  }, [data?.data, router, isOpen]);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#auth") {
        setStep(1);
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    checkHash();

    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const closeModal = () => {
    router.replace(document.location.pathname);
    setIsOpen(false);
  };

  if (!isOpen) return;

  return (
    <>
      {step === 1 && (
        <ModalContainer>
          <SendOtpForm
            mobile={mobile}
            setMobile={setMobile}
            closeModal={closeModal}
            setStep={setStep}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer>
          <CheckOtpForm
            mobile={mobile}
            setStep={setStep}
            closeModal={closeModal}
          />
        </ModalContainer>
      )}
    </>
  );
}

export default AuthForm;
