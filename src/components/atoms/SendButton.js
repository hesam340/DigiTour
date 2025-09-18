"use client";

import Loader from "@/components/atoms/Loader";

function SendButton({ error, isValid, code, check, isLoading }) {
  return (
    <button
      className={`w-full cursor-pointer rounded-md bg-primary py-3 text-center mt-9 font-vazir text-[18px] text-textButton ${
        (
          check
            ? code.length !== 6 || error || isLoading
            : error || !isValid || isLoading
        )
          ? `opacity-60 hover:cursor-not-allowed`
          : `hover:bg-secondary transition-all duration-[0.2s]`
      }`}
      type="submit"
      disabled={
        check ? code.length !== 6 || error || isLoading : error || !isValid || isLoading
      }
    >
      {isLoading ? (
        <Loader text="در حال ارسال اطلاعات ..." />
      ) : check ? (
        "ورود به تورینو"
      ) : (
        "ارسال کد تایید"
      )}
    </button>
  );
}

export default SendButton;
