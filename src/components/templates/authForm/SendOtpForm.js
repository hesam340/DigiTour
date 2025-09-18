"use client";

import { useState } from "react";
import { toast } from "react-toastify";

import { isValidate } from "@/core/utils/validation";
import { e2p, p2e } from "@/core/utils/replaceNumber";
import { useSendOtp } from "@/core/services/mutations";
import SendButton from "@/components/atoms/SendButton";
import CloseButton from "@/components/atoms/CloseButton";

function SendOtpForm({ mobile, setMobile, closeModal, setStep }) {
  const [error, setError] = useState("");

  const { isPending, mutate } = useSendOtp();

  const sendOtp = (e) => {
    e.preventDefault();

    if (isPending) return;

    if (!isValidate(mobile)) return setError("شماره موبایل معتبر نیست");
    setError("");

    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(`code for ${mobile} : ${data?.data?.code}`);
          setStep(2);
        },
        onError: (error) => {
          toast.error("مشکلی پیش آمده است ، لطفا دوباره تلاش کنید");
        },
      }
    );
  };
  return (
    <>
      <CloseButton closeModal={closeModal} />
      <h2 className="text-center text-[22px] md:text-[28px] font-medium text-textColor">
        ورود به دیجی تور
      </h2>
      <form onSubmit={sendOtp} className="flex flex-col">
        <label
          htmlFor="mobile"
          className="mt-8 text-base font-light mb-2 w-fit"
        >
          شماره موبایل خود را وارد کنید
        </label>
        <input
          type="text"
          id="mobile"
          value={e2p(mobile)}
          onChange={(e) => {
            setMobile(p2e(e.target.value.replace(/[^\d۰-۹]/g, "")));
          }}
          placeholder="۴۲۵۳***۰۹۱۲"
          className={`rounded-md border peer ${
            error ? "border-red-500" : "border-[#00000040]"
          } text-base md:text-xl text-gray-600 placeholder:text-base md:placeholder:text-lg placeholder:text-[#00000070] placeholder:font-vazir font-vazir focus:outline-0 focus:border-gray-700 px-2 py-3`}
        />
        <p className="text-xs md:text-sm peer-focus:text-gray-500 text-red-500 mt-1 h-4">
          {error}
        </p>
        <SendButton
          isValid={isValidate(mobile)}
          error={error}
          isLoading={isPending}
        />
      </form>
    </>
  );
}

export default SendOtpForm;
