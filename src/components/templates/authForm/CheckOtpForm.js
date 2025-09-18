"use client";

import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";

import timer from "@/core/utils/timer";
import { setCookie } from "@/core/utils/cookie";
import { e2p } from "@/core/utils/replaceNumber";
import SendButton from "@/components/atoms/SendButton";
import ArrowButton from "@/components/atoms/ArrowButton";
import CloseButton from "@/components/atoms/CloseButton";
import CheckOtpInput from "@/components/atoms/CheckOtpInput";
import { useCheckOtp, useSendOtp } from "@/core/services/mutations";

function CheckOtpForm({ mobile, closeModal, setStep }) {
  const [code, setCode] = useState("");
  const [counter, setCounter] = useState(85);
  const [doShake, setDoShake] = useState(0);
  const [error, setError] = useState("");

  const { isPending, mutate } = useCheckOtp();
  const { mutate: sendMutate } = useSendOtp();

  const queryClient = useQueryClient();

  useEffect(() => {
    if (counter <= 0) return;

    const result = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 1000);

    return () => clearInterval(result);
  }, [counter]);

  const otpHandler = useCallback(() => {
    mutate(
      { code, mobile },
      {
        onSuccess: (data) => {
          setCookie("accessToken", data.data.accessToken, 1);
          setCookie("refreshToken", data.data.refreshToken, 7);
          queryClient.invalidateQueries({ queryKey: ["user-data"] });
          closeModal();
          setStep(1);
        },
        onError: (error) => {
          setError(error.response.data.message);
          setDoShake((shake) => shake + 1);
        },
      }
    );
  }, [code, mobile, mutate, queryClient, closeModal, setStep]);

  useEffect(() => {
    if (code.length === 6) {
      otpHandler();
    }
  }, [code.length, otpHandler]);

  return (
    <>
      <div className="flex justify-between items-center">
        <CloseButton check={true} closeModal={closeModal} />
        <ArrowButton setStep={setStep} />
      </div>
      <h2 className="text-center text-[22px] md:text-[28px] mt-5 font-medium text-[#282828]">
        کد تایید را وارد کنید.
      </h2>
      <p className="text-center text-[14px] md:text-base font-normal font-vazir mt-2 tracking-wider text-[#282828]">
        کد تایید به شماره{" "}
        <span className="text-[16px] md:text-[18px]">{e2p(mobile)}</span> ارسال
        شد
      </p>
      <button
        className="w-fit mt-5 mb-2 font-normal text-complementry text-sm md:text-base mx-auto"
        onClick={() => setStep(1)}
      >
        اصلاح شماره موبایل
      </button>
      <form onSubmit={otpHandler} className="flex flex-col items-center w-full">
        <div>
          <CheckOtpInput
            code={code}
            setCode={setCode}
            doShake={doShake}
            error={error}
          />
          <p className="text-xs md:text-sm w-full text-right text-red-500 mt-1 h-4">
            {error}
          </p>
        </div>
        {!counter ? (
          <button
            className="mt-3 h-6 border-none font-normal text-complementry text-sm md:text-base"
            onClick={() => {
              sendMutate(
                { mobile },
                {
                  onSuccess: (data) => {
                    toast.success(`code for ${mobile} : ${data?.data?.code}`);
                  },
                  onError: (error) => {
                    toast.error("مشکلی پیش آمده است ، لطفا دوباره تلاش کنید");
                  },
                }
              );
              setCounter(85);
            }}
          >
            ارسال مجدد کد پیامکی
          </button>
        ) : (
          <span className="block w-fit mt-3 h-6 font-light text-sm text-center text-[#282828] md:text-base">
            {e2p(timer(counter))} تا ارسال مجدد کد
          </span>
        )}
        <SendButton
          code={code}
          check={true}
          error={error}
          isLoading={isPending}
        />
      </form>
    </>
  );
}

export default CheckOtpForm;
