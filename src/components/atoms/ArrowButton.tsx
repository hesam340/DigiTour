"use client";

import { TArrowButton } from "@/core/types/props";
import Icon from "@/core/utils/icon";

function ArrowButton({ setStep }: TArrowButton) {
  return (
    <button
      className="absolute top-0 left-0 ml-3 mt-3 text-[#171717]"
      onClick={() => setStep(1)}
    >
      <Icon name="arrow-right" className="size-8 rotate-180 stroke-[#171717]" />
    </button>
  );
}

export default ArrowButton;
