import Link from "next/link";
import Image from "next/image";

import {
  footerImages,
  servicesTitles,
  digiTourTitles,
} from "@/constants/footerTitles";

function Footer() {
  return (
    <footer className="w-full">
      <span
        className="block border-t border-dashed border-[#00000040] mb-5"
        style={{
          borderImage:
            "repeating-linear-gradient(to right, #00000040 0, #00000040 10px, transparent 4px, transparent 20px)",
          borderImageSlice: 1,
        }}
      ></span>
      <div className="container mx-auto px-8 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="grid grid-cols-2 mb-6 gap-10 md:gap-0">
            <div className="text-[#282828] tracking-wider justify-self-start">
              <p className="text-[22px] md:text-[24px] font-medium mb-3 lg:font-semibold">
                دیجی تور
              </p>
              <ul className="text-base font-light lg:text-lg lg:font-normal">
                {digiTourTitles.map((title) => (
                  <li key={title.id} className="mb-2">
                    <Link href={title.href}>{title.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-[#282828] tracking-wider justify-self-end">
              <p className="text-[22px] md:text-[24px] font-medium mb-3 lg:font-semibold">
                خدمات مشتریان
              </p>
              <ul className="text-base font-light lg:text-lg lg:font-normal">
                {servicesTitles.map((title) => (
                  <li key={title.id} className="mb-2">
                    <Link href={title.href}>{title.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-1 md:justify-self-end md:gap-0">
            <div className="justify-self-start md:order-2">
              <div className="flex flex-wrap justify-center gap-3">
                {footerImages.map((image) => (
                  <Link
                    href={image.href}
                    key={image.id}
                    className="relative w-9 h-10 md:w-14 md:h-16 lg:w-[70px] lg:h-[68px]"
                  >
                    <Image
                      src={image.src}
                      fill
                      sizes="(max-width: 768px) 36px, (max-width: 1024px) 56px, 70px"
                      className="object-fill"
                      alt={image.alt}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="justify-self-end md:order-1">
              <div className="flex flex-col items-end gap-y-3">
                <Image
                  src="/images/logo.webp"
                  width={150}
                  height={100}
                  priority={false}
                  className="w-[100px] h-[30px] lg:w-[146px] lg:h-[44px]"
                  alt="Torino-logo"
                />
                <p className="text-sm font-normal text-black tracking-wide lg:text-base">
                  تلفن پشتیبانی : ۸۵۷۴-۰۲۱
                </p>
              </div>
            </div>
          </div>
        </div>
        <span className="block border-t border-[#00000040] w-full mt-2"></span>
        <p className="text-center text-xs font-light pt-2 pb-1 md:text-[15px] md:font-normal md:text-[#282828]">
          کلیه حقوق این وب سایت متعلق به دیجی تور میباشد.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
