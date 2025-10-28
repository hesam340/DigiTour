import { TMainData, TOriOrDes } from "@/types/fetchData";
import { vehicle } from "@/core/constants/tourOptions";
import { miladiToShamsiMonth } from "@/core/constants/tourOptions";

const citiesOfTours = (tours: TMainData[]) => {
  const origins: TOriOrDes[] = [];
  const destinations: TOriOrDes[] = [];

  tours?.map((tour) => {
    if (!origins.find((o) => o.id === tour.origin.id)) {
      origins.push(tour.origin);
    }

    if (!destinations.find((d) => d.id === tour.destination.id)) {
      destinations.push(tour.destination);
    }
  });

  return { origins, destinations };
};

const getShamsiFromMiladi = (date: Date | string) => {
  const month = new Date(date).getUTCMonth();
  const day = new Date(date).getUTCDate();

  const selectedMonth = miladiToShamsiMonth[month];

  return day >= 21 ? selectedMonth.shamsiAfter : selectedMonth?.shamsiBefore;
};

const stayingDays = (startDate: Date | string, endDate: Date | string) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();

  const days = end - start;
  const oneDay = 1 * 24 * 60 * 60 * 1000;

  return Math.floor(days / oneDay);
};

const engVehicleToFarsi = (engVehicle: Date | string) => {
  const transfer = vehicle.find((i) => i.en_name === engVehicle);
  return transfer?.fa_name;
};

const getDay = (date: Date | string) => {
  return new Date(date).getDay();
};

const scheduleTime = (startDate: Date | string, endDate: Date | string) => {
  const now = new Date().getTime();
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();

  if (now < start) {
    return "waiting";
  } else if (now > end) {
    return "finished";
  } else {
    return "doing";
  }
};

export {
  citiesOfTours,
  getShamsiFromMiladi,
  stayingDays,
  engVehicleToFarsi,
  getDay,
  scheduleTime,
};
