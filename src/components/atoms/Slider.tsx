"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Icon from "@/core/utils/icon";
import { e2p } from "@/core/utils/replaceNumber";
import sliderImages from "@/constants/sliderImages";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) setIsMobile(true);
  }, []);

  return (
    <div className="mx-auto w-full lg:w-[60%]">
      <Swiper
        modules={[Navigation]}
        centeredSlides
        slidesPerView="auto"
        loop={false}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        onSlideChange={(swiper) => {
          const slides = swiper.slides;
          setCurrentSlide(swiper.activeIndex + 1);
          slides.forEach((slide, index) => {
            const slideIndex = index - swiper.activeIndex;
            if (slideIndex === -1) {
              slide.style.transform = isMobile
                ? "translateX(-95%) scale(0.9)"
                : "translateX(-90%) scale(0.9)";
              slide.style.zIndex = "9";
            } else if (slideIndex === -2) {
              slide.style.transform = isMobile
                ? "translateX(-190%) scale(0.8)"
                : "translateX(-180%) scale(0.8)";
              slide.style.zIndex = "8";
            } else if (slideIndex === -3) {
              slide.style.transform = isMobile
                ? "translateX(-285%) scale(0.7)"
                : "translateX(-270%) scale(0.7)";
              slide.style.zIndex = "7";
            }
          });
        }}
        className="w-full mx-auto"
      >
        {sliderImages.map((image) => (
          <SwiperSlide
            key={image.id}
            className=""
            style={{
              width: "390px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={image.src}
              width={390}
              height={479}
              priority={false}
              className="w-[250px] h-[300px] lg:w-[390px] lg:h-[479px] rounded-[35px]"
              alt={String(image.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-6 mt-6">
        <button
          disabled={currentSlide === sliderImages.length}
          className="swiper-next disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Icon
            name="arrow-right"
            className="size-6"
            fill="none"
            stroke="#10411b"
          />
        </button>
        <span className="font-vazir">
          {e2p(currentSlide)}/{e2p(sliderImages.length)}
        </span>

        <button
          disabled={currentSlide === 1}
          className="swiper-prev disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Icon
            name="arrow-right"
            className="size-6 rotate-180"
            fill="none"
            stroke="#10411b"
          />
        </button>
      </div>
    </div>
  );
}

export default Slider;
