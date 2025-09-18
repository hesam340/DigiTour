import Image from "next/image";

import Slider from "@/components/atoms/Slider";

function WhyDigiTour() {
  return (
    <section className="container mx-auto px-8">
      {/* <div className="block md:hidden mt-20 px-2 w-full">
        <div className="flex flex-col items-start w-full">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative">
              <Image
                src="/svg/Polygon.svg"
                priority={false}
                width={50}
                height={50}
                className="w-9 h-9"
                alt="why-digiTour"
              />
              <span className="absolute flex justify-center items-center text-2xl inset-0 text-white top-1">
                ؟
              </span>
            </div>
            <p className="font-vazir text-2xl text-[#282828]">
              چرا <span className="text-primary">دیجی تور</span> ؟
            </p>
          </div>
          <Slider />
        </div>
      </div> */}
      <div className="mt-20 px-2 mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:gap-x-5">
          <div className="lg:w-[40%]">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Image
                  src="/svg/Polygon-circle.svg"
                  priority={false}
                  width={50}
                  height={50}
                  className="hidden lg:block w-9 h-9"
                  alt="why-digiTour"
                />
                <Image
                  src="/svg/Polygon.svg"
                  priority={false}
                  width={50}
                  height={50}
                  className="block lg:hidden w-9 h-9"
                  alt="why-digiTour"
                />
                <span className="absolute flex justify-center items-center text-2xl inset-0 text-white top-1">
                  ؟
                </span>
              </div>
              <p className="font-vazir text-2xl lg:text-[40px] text-[#282828]">
                چرا <span className="text-primary">دیجی تور</span> ؟
              </p>
            </div>
            <div className="hidden lg:block">
              <p className="mb-3 text-[#282828] text-lg lg:text-2xl">
                تور طبیعت گردی و تاریخی
              </p>
              <p className="text-base lg:text-xl leading-8 lg:leading-10 font-light text-[#282828] text-justify font-vazir whitespace-pre-line">
                اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در
                دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
                تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
                گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
                فرهنگی و تاریخی را خریداری کنید.
              </p>
            </div>
          </div>
          <Slider />
        </div>
      </div>
    </section>
  );
}

export default WhyDigiTour;
