"use client";

import QueryString from "qs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useQuery from "@/core/hooks/query";
import { citiesOfTours } from "@/core/utils/tourFuncs";
import SearchInput from "@/components/atoms/SearchInput";
import CustomDatePicker from "@/components/atoms/CustomDatePicker";

function SearchForm({ data }) {
  const [query, setQuery] = useState({});
  const [showOptions, setShowOptions] = useState(null);
  const router = useRouter();

  const cities = citiesOfTours(data);
  const { getQuery } = useQuery();

  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");

    const originInfo = data.find((i) => i.origin.id === originId)?.origin;
    const destinationInfo = data.find(
      (i) => i.destination.id === destinationId
    )?.destination;

    const startDate = getQuery("startDate");
    const endDate = getQuery("endDate");

    const queryObj = {};

    if (originInfo) queryObj.originInfo = originInfo;
    if (destinationInfo) queryObj.destinationInfo = destinationInfo;
    if (startDate) queryObj.startDate = startDate;
    if (endDate) queryObj.endDate = endDate;

    setQuery(queryObj);
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();

    const { originInfo, destinationInfo, ...rest } = query;
    const newQuery = { ...rest };

    if (originInfo) newQuery.originId = query.originInfo.id;
    if (destinationInfo) newQuery.destinationId = query.destinationInfo.id;

    const queryString = QueryString.stringify(newQuery);
    router.push(`/?${queryString}`);
  };

  const removeQueries = () => {
    setQuery({});
    router.push("/");
  };

  return (
    <section className="container mx-auto relative px-8 sm:-mt-16">
      <div className="bg-white sm:pt-6 sm:pb-2 xl:mx-16 sm:z-[20] sm:rounded-2xl sm:shadow-2xl sm:border sm:border-gray-200">
        <h1 className="text-base text-[#595959] text-center font-medium w-full md:text-xl lg:text-[28px]">
          <span className="text-primary">دیجی تور</span> برگزار کننده بهترین تور
          های داخلی و خارجی
        </h1>
        <form onSubmit={searchHandler} className="w-full px-4">
          <div className="w-full mt-8 mb-2 sm:mb-5 mx-auto sm:flex sm:items-center sm:border sm:border-[#00000026] sm:h-[60px] sm:rounded-[20px] sm:px-[6px] lg:w-[900px]">
            <div className="flex justify-center gap-2 sm:gap-0 sm:w-[65%]">
              <SearchInput
                originCities={cities.origins}
                origin={true}
                query={query}
                setQuery={setQuery}
                showOptions={showOptions}
                setShowOptions={setShowOptions}
              />
              <SearchInput
                destinationCities={cities.destinations}
                origin={false}
                query={query}
                setQuery={setQuery}
                showOptions={showOptions}
                setShowOptions={setShowOptions}
              />
            </div>
            <CustomDatePicker query={query} setQuery={setQuery} />
          </div>
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-5 *:w-full *:sm:w-[30%] *:xl:w-[288px] *:border-none *:rounded-2xl *:h-[47px] *:text-white *:text-xl *:font-light *:mt-3 *:sm:mt-0 *:duration-[0.2s]">
            <button
              type="submit"
              className="bg-primary hover:bg-secondary active:bg-secondary focus:bg-primary"
            >
              جستجو
            </button>
            <button
              type="button"
              onClick={removeQueries}
              disabled={!Object.keys(query).length}
              className="bg-rose-600 hover:bg-rose-500 active:bg-rose-500 focus:bg-rose-600 disabled:bg-rose-400/50 disabled:cursor-not-allowed"
            >
              حذف فیلترها
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
