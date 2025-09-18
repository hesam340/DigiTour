"use client";

import Image from "next/image";

function Error({ error, reset }) {
  return (
    <div className="container mx-auto mb-32 flex flex-col items-center justify-center md:flex-row-reverse md:justify-around md:px-9">
      <Image
        src="/images/Error-Lamp-Robot.webp"
        width={400}
        height={400}
        className="w-[322px] h-[322px] md:w-[450px] md:h-[480px] lg:w-[555px] lg:h-[555px]"
        alt="Error-Icon"
        priority={true}
      />
      <div className="flex flex-col items-center -mt-6">
        <h1 className="text-2xl md:text-2xl lg:text-4xl font-semibold text-[#282828]">
          اتصال با سرور برقرار نیست!
        </h1>
        <p
          href="/"
          className="mt-5 flex justify-center items-center md:mt-10 font-medium text-xl lg:text-2xl text-[#282828] lg:font-semibold"
        >
          لطفا بعدا دوباره امتحان کنید.{" "}
        </p>
      </div>
    </div>
  );
}

export default Error;
