function CheckoutSkeleton() {
  return (
    <>
      <div className="flex flex-col bg-white justify-center rounded-[10px] px-6 py-5 mt-5 lg:w-[80%] lg:mt-0">
        <div className="flex items-center gap-x-3 mb-4">
          <div className="animate-pulse size-7 rounded-full"></div>
          <div className="animate-pulse w-36 h-3"></div>
        </div>
        <div className="lg:flex lg:flex-wrap lg:gap-x-1 lg:items-start lg:justify-between gap-y-4">
          <div className="animate-pulse lg:w-[32%] w-full h-10"></div>
          <div className="animate-pulse lg:w-[32%] w-full max-lg:mt-4 h-10"></div>
          <div className="animate-pulse lg:w-[32%] w-full max-lg:mt-4 h-10"></div>
          <div className="animate-pulse lg:w-[32%] w-full max-lg:mt-4 h-10"></div>
        </div>
      </div>
      <div className="mt-10 bg-white lg:mt-0 rounded-[10px] flex flex-col mb-10 py-5 lg:[20%] px-6 lg:px-2">
        <div className="flex items-baseline justify-between mb-5">
          <div className="animate-pulse w-28 h-3 ml-3"></div>
          <div className="animate-pulse w-28 h-3"></div>
        </div>
        <div className="animate-pulse w-full h-1"></div>
        <div className="flex items-baseline justify-between mb-2 mt-5">
          <div className="animate-pulse w-28 h-3 lg:w-32 lg:h-4 ml-3"></div>
          <div className="animate-pulse w-28 h-3 lg:w-32 lg:h-4"></div>
        </div>
        <div className="animate-pulse w-full mt-3 h-[50px]"></div>
      </div>
    </>
  );
}

export default CheckoutSkeleton;
