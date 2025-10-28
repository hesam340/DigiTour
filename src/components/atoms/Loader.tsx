"use client";

import { TLoader } from "@/core/types/props";

function Loader({ text }: TLoader) {
  return (
    <>
      {text ? (
        <span className="mx-auto animate-bounce flex justify-center items-center h-[27px] text-textButton">
          {text}
        </span>
      ) : (
        <div className="relative size-7 md:size-10 md:ml-16">
          <div className="absolute inset-0 border-4 rounded-full border-primary/50"></div>
          <div className="w-full h-full border-4 rounded-full animate-spin border-primary border-t-transparent border-r-transparent border-l-transparent"></div>
        </div>
      )}
    </>
  );
}

export default Loader;
