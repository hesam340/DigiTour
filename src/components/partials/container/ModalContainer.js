"use client";

import { useRouter } from "next/navigation";

function ModalContainer({ children }) {
  const router = useRouter();

  return (
    <div
      className="fixed top-0 left-0 backdrop-blur-[1px] bg-[#00000025] w-full h-full flex items-center justify-center z-10"
      onMouseDown={() => router.back()}
    >
      <div
        className="min-w-[358px] bg-white rounded-[20px] p-10 flex flex-col drop-shadow-[0px_4px_4px_0px_#00000040] relative max-md:w-[80%] md:w-[561px]"
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default ModalContainer;
