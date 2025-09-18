import { getShamsiFromMiladi } from "@/utils/tourFuncs";

const getPersianDate = (date) => {
  const newDate = getShamsiFromMiladi(date);
  const farsiDate = new Date(date).toLocaleDateString("fa-IR").split("/");
  farsiDate.splice(1, 1, newDate);
  return [farsiDate[2], farsiDate[1], farsiDate[0]].join(" ");
};

export default getPersianDate;
