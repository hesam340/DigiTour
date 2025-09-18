import Icon from "@/core/utils/icon";
import { e2p, sp } from "@/utils/replaceNumber";
import getPersianDate from "@/core/utils/getPersianDate";
import { getDay, scheduleTime } from "@/core/utils/tourFuncs";
import { vehicle, weekDays } from "@/core/constants/tourOptions";

function UserToursCard({ tour }) {
  const {
    title,
    fleetVehicle,
    origin,
    destination,
    startDate,
    endDate,
    id,
    price,
  } = tour;

  const tourNumber = id.split("-")[4].slice(0, 8);
  const schedule = scheduleTime(startDate, endDate);

  return (
    <div className="relative flex flex-col border border-[#00000033] rounded-[10px] pb-3 pt-8 mb-5">
      <div className="flex items-center px-6 mb-4">
        <div className="flex flex-1 items-center gap-x-2">
          <Icon
            name="sun-fog"
            className="size-[18px]"
            fill="white"
            stroke="#282828"
          />
          <p className="text-sm font-normal">{title}</p>
        </div>
        <div className="flex flex-1 items-center gap-x-2">
          <Icon
            name={vehicle.find((i) => i.en_name === fleetVehicle)?.icon}
            className="size-[18px] md:size-6 fill-white stroke-[#282828]"
          />
          <p className="text-sm font-normal">
            سفر با {vehicle.find((i) => i.en_name === fleetVehicle)?.fa_name}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-6">
        <div className="flex md:flex-1 items-center max-md:justify-between md:gap-x-2 mb-4">
          <p className="text-base font-medium">
            {origin.fa_name} به {destination.fa_name}
          </p>
          <p className="flex items-center text-sm font-normal text-[#00000099]">
            <span className="block before:content-['.'] before:pb-6 before:ml-2 before:text-xl"></span>
            {weekDays[getDay(startDate)]} {getPersianDate(startDate)}
          </p>
        </div>
        <div className="flex md:flex-1 items-center max-md:justify-between md:gap-x-2 mb-2">
          <p className="text-base font-medium">تاریخ برگشت</p>
          <p className="flex items-center text-sm font-normal text-[#00000099]">
            <span className="block before:content-['.'] before:pb-6 before:ml-2 before:text-xl"></span>
            {weekDays[getDay(endDate)]} {getPersianDate(endDate)}
          </p>
        </div>
      </div>
      <div>
        <span className="block h-px border-t border-[#00000033]"></span>
        <div className="flex items-center max-md:justify-between md:gap-x-6 mt-3 px-2">
          <p className="flex items-center gap-x-2 text-[10px] md:text-sm font-normal text-[#00000080]">
            شماره‌تور{" "}
            <span className="text-sm md:text-base font-medium text-[#282828]">
              {e2p(tourNumber)}
            </span>
          </p>
          <span className="block -my-3 h-8 border-l border-[#00000033]"></span>
          <p className="flex items-center gap-x-2 text-[10px] md:text-sm font-normal text-[#00000080]">
            مبلغ‌پرداخت‌شده{" "}
            <span className="text-sm md:text-base font-medium text-[#282828]">
              {sp(price)}
            </span>{" "}
            تومان
          </p>
        </div>
      </div>
      <div
        className={`absolute top-[6px] left-[6px] px-2 py-1 rounded-[27px] ${
          schedule === "waiting"
            ? "text-complementry bg-[#009eca30]"
            : schedule === "finished"
            ? "text-primary bg-[#28a74530]"
            : "text-[#D1B900] bg-[#D1B90030]"
        }`}
      >
        <p className="text-[11px] md:text-[13px] font-normal">
          {schedule === "waiting"
            ? "هنوز شروع نشده"
            : schedule === "finished"
            ? "به اتمام رسیده"
            : "در حال برگزاری"}
        </p>
      </div>
    </div>
  );
}

export default UserToursCard;
