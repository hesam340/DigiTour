import { useEffect, useRef, useState } from "react";
import "react-multi-date-picker/styles/colors/yellow.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker, { DateObject } from "react-multi-date-picker";

import Icon from "@/core/utils/icon";
import { mapDays } from "@/core/configs/datePicker";
import { TDatePicker } from "@/core/types/props";

function CustomDatePicker(props: TDatePicker) {
  const { query, setQuery, user, value, onChange, error } = props as any;

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const datePickerRef = useRef<any>(null);

  useEffect(() => {
    if (user) return;
    if (query.endDate || (!query.startDate && !query.endDate))
      datePickerRef.current.closeCalendar();
  }, [query, user]);

  const dateHandler = (date: DateObject | DateObject[] | null) => {
    if (!("setQuery" in props) || !date || !Array.isArray(date)) return;
    const [from, to] = date;
    const startDate = from ? from.toDate().toISOString() : "";
    const endDate = to ? to.toDate().toISOString() : "";

    setQuery((prev:any) => {
      const newQuery = { ...prev };
      startDate && (newQuery.startDate = startDate);
      endDate && (newQuery.endDate = endDate);
      return newQuery;
    });
  };

  const clearDates = () => {
    if (!("setQuery" in props)) return;
    setIsFocused(false);
    setQuery((prev:any) => {
      const newQuery = { ...prev };
      delete newQuery.startDate;
      delete newQuery.endDate;
      return newQuery;
    });
  };

  const legalAge = new DateObject({ calendar: persian }).subtract(18, "years");
  const minDate = user ? "1310/1/1" : new DateObject({ calendar: persian });
  const maxDate = user
    ? legalAge
    : new DateObject({ calendar: persian }).add(3, "years");
  const currentDate = user ? legalAge : new DateObject({ calendar: persian });

  return (
    <div className={`relative w-full ${user ? "w-full" : "sm:w-[35%]"} `}>
      <DatePicker
        id={user ? "birthDate" : "calendar"}
        value={
          user
            ? value
              ? new Date(value).toLocaleDateString("fa-IR")
              : null
            : [query.startDate, query.endDate]
        }
        ref={datePickerRef}
        inputMode="none"
        calendar={persian}
        locale={persian_fa}
        onChange={
          user ? (date: DateObject | DateObject[] | null) => {
            if (date && !Array.isArray(date)) {
              onChange(date.toDate().toISOString());
            }
          } : dateHandler
        }
        onOpen={() => setIsFocused(true)}
        onClose={() => setIsFocused(false)}
        range={user ? false : true}
        minDate={minDate}
        maxDate={maxDate}
        currentDate={currentDate}
        shadow={false}
        editable={false}
        rangeHover={user ? false : true}
        containerStyle={{ width: "100%" }}
        style={{ width: "100%" }}
        calendarPosition="bottom-center"
        autoFocus={true}
        portal={false}
        dateSeparator={user ? undefined : " - تا - "}
        mapDays={(params) => mapDays(params, minDate, maxDate)}
        monthYearSeparator="|"
        className="yellow"
        inputClass={`border px-3 w-full h-[47px] focus:outline-none focus:border-complementry cursor-pointer ${
          error?.message
            ? "border-red-500"
            : user
            ? "border-[#00000080]"
            : "border-[#00000026]"
        } ${
          user
            ? "text-right rounded-[5px] text-base"
            : "sm:border-none text-center sm:text-right rounded-xl mt-3 sm:mt-0 text-base text-[@282828]"
        }`}
      />
      <label
        htmlFor="calendar"
        className={`absolute w-fit left-1/2 -translate-x-1/2 sm:right-0 sm:-translate-x-1 transition-all duration-200 flex items-center gap-1 bg-white px-1 pointer-events-none ${
          user
            ? "text-gray-400 text-base"
            : "text-gray-600 text-base sm:text-[20px]"
        } ${
          isFocused || value || query?.startDate || query?.endDate
            ? "-translate-y-[60px] sm:-translate-y-[63px]"
            : "-translate-y-[35px]"
        }`}
      >
        <Icon
          name="calendar"
          className="size-[18px] ml-1"
          fill="none"
          stroke="#4b5563"
        />
        تاریخ
      </label>
      {!user && (query.startDate || query.endDate) && (
        <span
          onClick={clearDates}
          className="absolute top-5 left-2 sm:top-1 sm:left-1 p-2 pt-3 rounded-full bg-gray-400/70 text-white z-20 size-5 flex justify-center items-center leading-5 cursor-pointer"
        >
          x
        </span>
      )}
    </div>
  );
}

export default CustomDatePicker;
