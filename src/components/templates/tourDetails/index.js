import Image from "next/image";

import Icon from "@/core/utils/icon";
import { e2p, sp } from "@/core/utils/replaceNumber";
import getPersianDate from "@/core/utils/getPersianDate";
import ErrorOnClient from "@/components/atoms/ErrorOnClient";
import AddBasketButton from "@/components/atoms/AddBasketButton";
import { engVehicleToFarsi, stayingDays } from "@/core/utils/tourFuncs";

function TourDetailsPage({ data }) {
  if (data?.message) return <ErrorOnClient data={data} />;

  const {
    id,
    image,
    title,
    startDate,
    endDate,
    fleetVehicle,
    price,
    availableSeats,
    insurance,
    origin,
  } = data;

  const days = stayingDays(startDate, endDate);

  return (
    <section className="px-8 mx-auto bg-white w-full h-full md:bg-gray-100 md:px-9 md:py-9 lg:px-20 lg:py-20 flex justify-center">
      <div className="container px-8">
        <div className="w-full md:px-4 h-full md:py-4 bg-white md:rounded-[10px]">
          <div className="md:flex md:items-center md:gap-x-4 w-full">
            <Image
              src={image}
              width={350}
              height={300}
              priority={true}
              className="w-full h-[220px] md:w-[330px] md:h-[205px] lg:w-[397px] lg:h-[265px] mb-5 rounded-xl mt-5 md:mt-0"
              alt={title}
            />
            <div className="flex flex-col md:justify-between md:w-[65%]">
              <div className="flex items-center justify-between md:flex-col md:items-start md:gap-y-2 max-md:mt-4 mb-3">
                <h2 className="text-2xl lg:text-[32px] lg:mb-3 font-semibold">
                  {title}
                </h2>
                <p className="text-[15px] lg:text-[20px] text-[#282828] font-normal">{`${e2p(
                  days
                )} روز و ${e2p(days - 1)} شب`}</p>
              </div>
              <div className="flex justify-between mb-8 md:mb-0 md:mt-5 md:mr-2 md:gap-x-2 lg:w-[87%] xl:w-[70%]">
                <div className="flex items-center gap-x-[6px] text-[#7D7D7D]">
                  <Icon
                    name="profile-tick"
                    className="size-[16px] md:size-[18px] lg:size-8 fill-[#7D7D7D] stroke-none"
                  />
                  <span className="text-sm lg:text-xl font-normal">
                    تورلیدر از مبدا
                  </span>
                </div>
                <div className="flex items-center gap-x-[6px] text-[#7D7D7D]">
                  <Icon
                    name="map"
                    className="size-[14px] md:size-[18px] lg:size-6 fill-[#7d7d7d] stroke-none"
                  />
                  <span className="text-sm lg:text-xl font-normal">
                    برنامه سفر
                  </span>
                </div>
                <div className="flex items-center gap-x-[6px] text-[#7D7D7D]">
                  <Icon
                    name="medal-star"
                    className="size-[14px] md:size-[18px] lg:size-6 fill-[#7d7d7d] stroke-none"
                  />
                  <span className="text-sm lg:text-xl font-normal">
                    تضمین کیفیت
                  </span>
                </div>
              </div>
              <div className="flex justify-between md:hidden">
                <Features
                  fleetVehicle={fleetVehicle}
                  availableSeats={availableSeats}
                  insurance={insurance}
                />
              </div>
              <div className="flex items-center justify-between mt-8 mb-8 md:flex-row-reverse md:mt-11 md:mb-0 lg:w-full">
                <AddBasketButton card={false} id={id} />
                <p className="text-[10px] lg:text-sm font-normal text-[#282828CC]">
                  <span className="text-2xl lg:text-[28px] font-medium text-complementry">
                    {sp(price)}
                  </span>{" "}
                  تومان
                </p>
              </div>
            </div>
          </div>
          <div className="hidden h-[50px] md:flex md:items-center md:justify-between md:mt-5">
            <Features
              fleetVehicle={fleetVehicle}
              availableSeats={availableSeats}
              insurance={insurance}
              startDate={startDate}
              endDate={endDate}
              origin={origin.fa_name}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourDetailsPage;

export function Features({
  fleetVehicle,
  availableSeats,
  insurance,
  origin,
  startDate,
  endDate,
}) {
  return (
    <>
      <div className="md:flex flex-col flex-grow items-center hidden">
        <div className="flex text-[#444444] gap-x-[6px]">
          <Icon
            name="routing"
            className="size-4 lg:size-5 fill-[#444444] stroke-none"
          />
          <span className="text-base lg:text-lg font-normal font-vazir">
            مبدا
          </span>
        </div>
        <p className="text-sm lg:text-base font-medium text-[#282828] font-vazir mt-1">
          {origin}
        </p>
      </div>
      <span className="hidden md:block h-full border-l border-l-[#00000040]"></span>
      <div className="md:flex flex-col flex-grow items-center hidden">
        <div className="flex text-[#444444] gap-x-[6px]">
          <Icon
            name="calendar-2"
            className="size-4 lg:size-5 fill-[#444444] stroke-none"
          />
          <span className="text-base lg:text-lg font-normal font-vazir">
            تاریخ رفت
          </span>
        </div>
        <p className="text-sm lg:text-base font-medium text-[#282828] font-vazir mt-1">
          {getPersianDate(startDate)}
        </p>
      </div>
      <span className="hidden md:block h-full border-l border-l-[#00000040]"></span>
      <div className="md:flex flex-col flex-grow items-center hidden">
        <div className="flex text-[#444444] gap-x-[6px]">
          <Icon
            name="calendar-2"
            className="size-4 lg:size-5 fill-[#444444] stroke-none"
          />
          <span className="text-base lg:text-lg font-normal font-vazir">
            تاریخ برگشت
          </span>
        </div>
        <p className="text-sm lg:text-base font-medium text-[#282828] font-vazir mt-1">
          {getPersianDate(endDate)}
        </p>
      </div>
      <span className="hidden md:block h-full border-l border-l-[#00000040]"></span>
      <div className="flex flex-col flex-grow items-center md:items-center">
        <div className="flex text-[#444444] gap-x-[6px]">
          <Icon
            name="bus"
            className="size-4 lg:size-5 fill-[#444444] stroke-white"
          />
          <span className="text-base lg:text-lg font-normal font-vazir">
            حمل و نقل
          </span>
        </div>
        <p className="text-sm lg:text-base font-medium text-[#282828] font-vazir mt-1">
          {engVehicleToFarsi(fleetVehicle)}
        </p>
      </div>
      <span className="hidden md:block h-full border-l border-l-[#00000040]"></span>
      <div className="flex flex-col flex-grow items-center md:items-center">
        <div className="flex text-[#444444] gap-x-[6px]">
          <Icon
            name="profile-2user"
            className="size-4 lg:size-5 fill-[#444444] stroke-none"
          />
          <span className="text-base lg:text-lg font-normal font-vazir">
            ظرفیت
          </span>
        </div>
        <p className="text-sm lg:text-base font-medium text-[#282828] font-vazir mt-1">{`حداکثر ${e2p(
          availableSeats
        )} نفر`}</p>
      </div>
      <span className="hidden md:block h-full border-l border-l-[#00000040]"></span>
      <div className="flex flex-col flex-grow items-center md:items-center">
        <div className="flex text-[#444444] gap-x-[6px]">
          <Icon
            name="security"
            className="size-4 lg:size-5 fill-[#444444] stroke-none"
          />
          <span className="text-base lg:text-lg font-normal font-vazir">
            بیمه
          </span>
        </div>
        <p className="text-sm lg:text-base font-medium text-[#282828] font-vazir mt-1">
          {insurance ? "بیمه 50 هزار دیناری" : "-"}
        </p>
      </div>
    </>
  );
}
