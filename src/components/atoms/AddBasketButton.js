"use client";

import Loader from "@/atoms/Loader";
import { useAddBasket } from "@/services/mutations";

function AddBasketButton({ card, id }) {
  const { mutate, isPending } = useAddBasket();

  return (
    <button
      disabled={isPending}
      onClick={() => mutate(id)}
      className={`cursor-pointer text-center transition-all duration-[0.2s] text-white ${
        isPending
          ? "bg-primary/50 cursor-not-allowed"
          : "bg-primary hover:bg-secondary"
      } ${
        card
          ? "w-[99px] h-[29px] text-[15px] font-light md:font-normal rounded-[4px] cursor-pointer leading-[29px]"
          : "w-[154px] h-[42px] lg:w-[204px] lg:h-[56px] leading-[42px] lg:leading-[56px] text-[20px] lg:text-2xl font-normal rounded-[10px]"
      }`}
    >
      {isPending ? <Loader text="..." /> : card ? "رزرو" : "رزرو و خرید"}
    </button>
  );
}

export default AddBasketButton;
