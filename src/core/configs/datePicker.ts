// type TDatePicker = {
//   date: {
//     month: { index: number };
//     weekDay: { index: number };
//     valueOf(): number;
//   };
//   today: Date | string;
//   currentMonth: { index: number };
//   isSameDate: (a: { valueOf(): number }, b: Date | string) => boolean;
// };

// export const mapDays = (
//   { date, today, currentMonth, isSameDate }: TDatePicker,
//   minDate: Date | string,
//   maxDate: Date | string
// ) => {
//   let style = {
//     borderRadius: "50%",
//     fontSize: "1rem",
//     backgroundColor: date.month.index === currentMonth.index ? "#fff" : "",
//     color: "#333",
//     fontWeight: "normal",
//   };

//   if (date.valueOf() < new Date(minDate).getTime() || date.valueOf() > new Date(maxDate).getTime()) {
//     style.color = "#ccc";
//     if (date.weekDay.index === 6) {
//       style.color = "#e6394675";
//     }
//   } else {
//     if (date.weekDay.index === 6) {
//       style.color = "#e63946";
//     }
//   }

//   if (isSameDate(date, today)) {
//     style.color = "#fbbf24";
//     style.fontWeight = "bold";
//   }

//   return { style };
// };

import { DateObject } from "react-multi-date-picker";

export type TMapDays = {
  date: DateObject;
  today: DateObject;
  currentMonth: DateObject["month"];
  isSameDate: (a: DateObject, b: DateObject) => boolean;
};

export const mapDays = (
  { date, today, currentMonth, isSameDate }: TMapDays,
  minDate: DateObject | string,
  maxDate: DateObject | string
) => {
  let style: React.CSSProperties = {
    borderRadius: "50%",
    fontSize: "1rem",
    backgroundColor:
      date.month.index === currentMonth.index ? "#fff" : "",
    color: "#333",
    fontWeight: "normal",
  };

  const minTime =
    minDate instanceof DateObject ? minDate.toDate().getTime() : new Date(minDate).getTime();
  const maxTime =
    maxDate instanceof DateObject ? maxDate.toDate().getTime() : new Date(maxDate).getTime();

  if (date.valueOf() < minTime || date.valueOf() > maxTime) {
    style.color = "#ccc";
    if (date.weekDay.index === 6) {
      style.color = "#e6394675";
    }
  } else {
    if (date.weekDay.index === 6) {
      style.color = "#e63946";
    }
  }

  if (isSameDate(date, today)) {
    style.color = "#fbbf24";
    style.fontWeight = "bold";
  }

  return { style };
};
