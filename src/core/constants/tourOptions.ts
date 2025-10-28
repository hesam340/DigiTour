import { TDate, Tvehicles } from "@/types/constantsFiles";

const miladiToShamsiMonth: TDate = [
  { miladiMonth: 0, shamsiBefore: "دی", shamsiAfter: "بهمن" },
  { miladiMonth: 1, shamsiBefore: "بهمن", shamsiAfter: "اسفند" },
  { miladiMonth: 2, shamsiBefore: "اسفند", shamsiAfter: "فروردین" },
  { miladiMonth: 3, shamsiBefore: "فروردین", shamsiAfter: "اردیبهشت" },
  { miladiMonth: 4, shamsiBefore: "اردیبهشت", shamsiAfter: "خرداد" },
  { miladiMonth: 5, shamsiBefore: "خرداد", shamsiAfter: "تیر" },
  { miladiMonth: 6, shamsiBefore: "تیر", shamsiAfter: "مرداد" },
  { miladiMonth: 7, shamsiBefore: "مرداد", shamsiAfter: "شهریور" },
  { miladiMonth: 8, shamsiBefore: "شهریور", shamsiAfter: "مهر" },
  { miladiMonth: 9, shamsiBefore: "مهر", shamsiAfter: "آبان" },
  { miladiMonth: 10, shamsiBefore: "آبان", shamsiAfter: "آذر" },
  { miladiMonth: 11, shamsiBefore: "آذر", shamsiAfter: "دی" },
];

const weekDays: string[] = [
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنج شنبه",
  "جمعه",
  "شنبه",
];

const vehicle: Tvehicles = [
  { id: 1, en_name: "Bus", fa_name: "اتوبوس", icon: "bus" },
  { id: 2, en_name: "Ship", fa_name: "کشتی", icon: "ship" },
  { id: 3, en_name: "SUV", fa_name: "شاسی بلند", icon: "suv" },
  { id: 4, en_name: "Airplane", fa_name: "هواپیما", icon: "airplane-two" },
];

export { miladiToShamsiMonth, vehicle, weekDays };
