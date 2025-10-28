import Link from "next/link";
import Image from "next/image";

import Icon from "@/core/utils/icon";

function CartoonPart() {
  return (
    <section className="container mx-auto px-8 mb-10">
      <div className="flex flex-col md:flex-row border border-[#00000040] h-[190px] md:h-[220px] lg:h-[251px] rounded-[10px]">
        <div className="relative h-[128px] md:h-full md:w-[70%] flex justify-around bg-primary rounded-t-[10px] md:rounded-r-[10px]">
          <div className="text-white text-right w-full pt-3 pr-3 md:pt-8 md:pr-4">
            <p className="text-[22px] md:text-[32px] lg:text-[48px] font-semibold md:font-bold">
              خرید تلفنی از
              <span className="text-[#6b6318] block pr-4 sm:inline">
                دیجی تور
              </span>
            </p>
            <p className="text-[14px] md:text-[25px] lg:text-[32px] font-light lg:font-normal mt-2">
              به هرکجا که میخواهید!
            </p>
          </div>
          <Image
            src="/images/contact_us_banner.webp"
            priority={false}
            width={250}
            height={200}
            className="absolute w-[195px] h-[158px] md:w-[248px] md:h-[187px] lg:w-[308px] lg:h-[225px] -bottom-[2px] left-0 md:left-2 lg:left-4"
            alt="cartoon-image"
          />
        </div>
        <div className="flex md:flex-col md:w-[30%] items-center justify-between md:justify-center md:items-center py-3 px-6 md:py-0">
          <div className="text-textColor md:text-black flex items-center gap-x-2 md:mb-2">
            <p className="font-vazir text-[20px] md:text-[28px] font-semibold md:font-bold">
              ۰۲۱-۱۸۴۰
            </p>
            <Icon
              name="phone"
              className="size-5 md:size-6"
              fill="#282828"
              stroke="none"
            />
          </div>
          <Link
            href="#"
            className="block text-white bg-[#6b6318] hover:scale-110 w-[136px] h-[38px] md:w-[175] md:h-[41px] leading-[38px] md:leading-[41px] lg:leading-[44px] text-center font-vazir rounded-[9px] text-base lg:text-lg font-normal transition-all duration-[0.2s]"
          >
            اطلاعات بیشتر
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CartoonPart;
