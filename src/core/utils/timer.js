const timer = (counter) => {
  return `${Math.floor(counter / 60)}:${(counter % 60)
    .toString()
    .padStart(2, "0")}`;
};

export default timer;
