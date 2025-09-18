import { vehicle } from "@/constants/tourOptions";
import { miladiToShamsiMonth } from "@/constants/tourOptions";

const citiesOfTours = (tours) => {
  const origins = [];
  const destinations = [];

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

const getShamsiFromMiladi = (date) => {
  const month = new Date(date).getUTCMonth();
  const day = new Date(date).getUTCDate();

  const selectedMonth = miladiToShamsiMonth[month];

  return day >= 21 ? selectedMonth.shamsiAfter : selectedMonth?.shamsiBefore;
};

const stayingDays = (startDate, endDate) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();

  const days = end - start;
  const oneDay = 1 * 24 * 60 * 60 * 1000;

  return Math.floor(days / oneDay);
};

const engVehicleToFarsi = (engVehicle) => {
  const transfer = vehicle.find((i) => i.en_name === engVehicle);
  return transfer?.fa_name;
};

const getDay = (date) => {
  return new Date(date).getDay();
};

const scheduleTime = (startDate, endDate) => {
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
