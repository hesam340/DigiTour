export const mapDays = (
  { date, today, currentMonth, isSameDate },
  minDate,
  maxDate
) => {
  let style = {
    borderRadius: "50%",
    fontSize: "1rem",
    backgroundColor: date.month.index === currentMonth.index ? "#fff" : "",
    color: "#333",
  };

  if (date < minDate || date > maxDate) {
    style.color = "#ccc";
    if(date.weekDay.index === 6){
      style.color = "#e6394675"
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
