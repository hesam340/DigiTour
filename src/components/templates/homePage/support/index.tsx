import Image from "next/image";

import support from "@/constants/supportTitlesInfo";

function SupportTitles() {
  return (
    <section className="border-t border-[#00000033] mt-2 max-md:mx-8 md:px-[57px] md:mx-auto">
      <div className="container max-md:px-3 m-auto flex flex-col lg:flex-row lg:justify-between items-start gap-y-2 mt-8">
        {support.map((item) => (
          <>
            <div className="flex items-center gap-x-3 mb-5">
              <Image
                src={item.image}
                width={100}
                height={100}
                priority={false}
                className="w-[71px] lg:w-[121px] h-[64px] lg:h-[109px]"
                alt={item.title}
              />
              <div className="flex flex-col">
                <p className="text-sm lg:text-[26px] font-normal lg:font-light font-vazir mb-1">
                  {item.title}
                </p>
                <span className="block text-xs lg:text-base font-extralight lg:font-light text-[#282828] font-vazir lg:w-[202px]">
                  {item.description}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default SupportTitles;
