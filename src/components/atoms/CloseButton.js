"use client";

import Icon from "@/core/utils/icon";

function CloseButton({ closeModal, check }) {
  return (
    <button
      className={`absolute top-0 ${
        check ? "right-0 mr-4" : "left-0 ml-4"
      } mt-4 text-[#171717] size-[22px] flex justify-center items-center`}
      onClick={closeModal}
    >
      <Icon
        name="close"
        className="w-full h-full"
        fill="none"
        stroke="#171717"
      />
    </button>
  );
}

export default CloseButton;
