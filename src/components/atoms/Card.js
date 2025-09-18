import Link from "next/link";
import Image from "next/image";

import {
  engVehicleToFarsi,
  getShamsiFromMiladi,
  stayingDays,
} from "@/utils/tourFuncs";
import { e2p, sp } from "@/utils/replaceNumber";
import CardSkeleton from "@/skeletons/CardSkeleton";
import AddBasketButton from "@/atoms/AddBasketButton";

function Card({ data, index }) {
  const { id, startDate, endDate, title, image, fleetVehicle, options, price } =
    data;
  return (
    <>
      {data ? (
        <div className="flex flex-col rounded-[12px] w-[327px] md:w-[278px] border border-[#00000040]">
          <Link href={`/tours/${id}`}>
            <div className="relative w-full h-[159px]">
              <Image
                src={image}
                fill
                sizes="(max-width: 768px) 327px, 278px"
                className="object-fill"
                alt={title}
                priority={index < 4 ? true : false}
              />
            </div>
          </Link>
          <div className="flex flex-col">
            <Link
              href={`/tours/${id}`}
              className="text-[22px] w-fit font-light md:font-normal mb-2 cursor-pointer px-2 pt-2"
            >
              {title}
            </Link>
            <p className="text-sm font-light md:font-normal text-[#282828B2] mb-2 px-2">
              {getShamsiFromMiladi(startDate)} ماه .{" "}
              {e2p(stayingDays(startDate, endDate))} روزه -{" "}
              {engVehicleToFarsi(fleetVehicle)} - {options[0].slice(0, 5)} ...
            </p>
            <div className="flex items-center justify-between border-t border-t-[#00000040] px-2 py-1">
              <AddBasketButton card={true} id={id} />
              <p className="text-base font-normal md:font-medium text-complementry">
                {sp(price)}{" "}
                <span className="text-base font-light md:font-normal text-[#282828CC]">
                  تومان
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <CardSkeleton />
      )}
    </>
  );
}

export default Card;
