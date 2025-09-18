"use client";

import Icon from "@/core/utils/icon";

function SearchInput({
  originCities,
  destinationCities,
  origin,
  query,
  setQuery,
  showOptions,
  setShowOptions,
}) {
  const isOpen = showOptions === (origin ? "origin" : "destination");
  const toggleOptions = () => {
    if (isOpen) {
      setShowOptions(null);
    } else {
      setShowOptions(origin ? "origin" : "destination");
    }
  };

  const selectCities = (e, city) => {
    e.preventDefault();
    const key = origin ? "originInfo" : "destinationInfo";
    setQuery((prev) => ({ ...prev, [key]: city }));
    setShowOptions(null);
  };

  const removeCities = () => {
    const key = origin ? "originInfo" : "destinationInfo";
    setQuery((prev) => ({ ...prev, [key]: "" }));
  };

  return (
    <div className="w-full relative *:cursor-pointer">
      <input
        type="text"
        id={origin ? "originSearch" : "destinationSearch"}
        readOnly
        onClick={toggleOptions}
        onBlur={() => setShowOptions(null)}
        value={
          origin
            ? query.originInfo?.fa_name || ""
            : query.destinationInfo?.fa_name || ""
        }
        className="border border-[#00000026] sm:border-transparent sm:border-l sm:border-l-[#00000033] sm:rounded-r-2xl sm:rounded-none sm:px-3 sm:focus:border-transparent sm:focus:border-l sm:focus:border-l-[#00000033] text-center sm:text-right rounded-xl px-3 w-full h-[47px] text-base md:text-lg text-[#282828] focus:outline-none focus:border-complementry"
      />
      <label
        htmlFor={origin ? "originSearch" : "destinationSearch"}
        className={`absolute left-1/2 -translate-x-1/2 w-fit sm:right-0 sm:-translate-x-1 top-3 flex items-center px-2 text-sm sm:text-[20px] bg-white transition-all duration-300 text-gray-600 ${
          isOpen ||
          (origin && query.originInfo) ||
          (!origin && query.destinationInfo)
            ? "labelFloating sm:-top-4"
            : ""
        }`}
      >
        {origin ? (
          <Icon
            name="location"
            className="size-[18px] ml-1"
            fill="none"
            stroke="#4b5563"
          />
        ) : (
          <Icon
            name="global-search"
            className="size-[18px] ml-1"
            fill="none"
            stroke="#4b5563"
          />
        )}
        {origin ? "مبدا" : "مقصد"}
      </label>
      <div
        className={`size-5 absolute left-1 top-3 transition-all duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
        onClick={toggleOptions}
      >
        <Icon
          name="arrow-down"
          className="w-full h-full"
          fill="none"
          stroke="#2c2c2c"
        />
      </div>
      {isOpen && (
        <div className="absolute top-[54px] w-full z-10 bg-[#F8F8F8] border rounded-lg border-[#00000033]">
          <ul>
            <li className="text-[13px] bg-[#F8F8F8] text-[#282828B2] font-light font-vazir p-2">
              پرتردد
            </li>
            <li className="divide-y divide-[#0000001F] bg-white max-h-[148px] overflow-y-auto">
              {(origin ? originCities : destinationCities).map((city) => (
                <div
                  key={city.id}
                  className="flex items-center py-2 px-2 cursor-pointer hover:bg-black/10"
                  onMouseDown={(e) => selectCities(e, city)}
                >
                  {origin ? (
                    <Icon
                      name="location"
                      className="size-[18px] ml-1 stroke-[#808080] md:stroke-[#2c2c2c]"
                      fill="none"
                    />
                  ) : (
                    <Icon
                      name="global-search"
                      className="size-[18px] ml-1 stroke-[#808080] md:stroke-[#2c2c2c]"
                      fill="none"
                    />
                  )}

                  <p className="text-sm font-light pr-1 w-fit md:text-base md:font-normal md:py-2">
                    {city.fa_name}
                  </p>
                </div>
              ))}
            </li>
          </ul>
        </div>
      )}
      {((origin && query.originInfo) || (!origin && query.destinationInfo)) && (
        <span
          className="absolute top-1 left-6 sm:-top-1 sm:left-4 p-2 pt-3 rounded-full bg-gray-400/70 text-white z-20 size-5 flex justify-center items-center leading-5 cursor-pointer"
          onClick={removeCities}
        >
          x
        </span>
      )}
    </div>
  );
}

export default SearchInput;
