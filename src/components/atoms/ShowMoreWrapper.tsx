"use client";

import { useState } from "react";

import Icon from "@/core/utils/icon";
import { TShowMoreWrapper } from "@/core/types/props";

function ShowMoreWrapper({ children, initialCount }:TShowMoreWrapper) {
  const [showAll, setShowAll] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-wrap justify-center md:justify-between mx-auto gap-4 w-full">
        {children.map((child, index) => (
          <div
            key={index}
            className={`${
              index < initialCount ? "" : showAll ? "block" : "hidden"
            } md:block`}
          >
            {child}
          </div>
        ))}
      </div>
      {children.length > initialCount && (
        <div className="md:hidden flex justify-center mt-6">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center text-[#00000080] hover:text-[#00000090] transition duration-[0.2s]"
          >
            {showAll ? "مشاهده کمتر" : "مشاهده بیشتر"}
            <Icon
              name="arrow-down"
              className={`size-4 mr-2 ${showAll ? "rotate-180" : "rotate-0"}`}
              fill="none"
              stroke="#00000080"
            />
          </button>
        </div>
      )}
    </>
  );
}

export default ShowMoreWrapper;
