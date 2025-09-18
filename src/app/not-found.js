"use client";

import Link from "next/link";
import Image from "next/image";

function NotFound() {
  return (
    <div className="container mx-auto mb-32 flex flex-col items-center justify-center md:flex-row-reverse md:justify-around md:px-9">
      <Image
        src="/images/Error-TV.webp"
        width={400}
        height={400}
        className="w-[322px] h-[322px] md:w-[450px] md:h-[480px] lg:w-[555px] lg:h-[555px]"
        alt="Error-Icon"
        priority={true}
      />
      <div className="flex flex-col items-center -mt-6">
        <h1 className="text-2xl lg:text-4xl font-semibold text-[#282828]">
          صفحه مورد نظر یافت نشد!
        </h1>
        <Link
          href="/"
          className="mt-5 flex justify-center items-center md:mt-10 font-medium text-xl md:text-2xl text-primary w-[232px] h-[58px] md:w-[361px] md:h-[75px] md:font-semibold bg-[#D8FFE1] rounded-2xl"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
