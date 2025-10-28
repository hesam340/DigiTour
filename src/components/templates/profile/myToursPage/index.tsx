"use client";

import { toast } from "react-toastify";

import { useUserTours } from "@/core/services/queries";
import ProfileSkeleton from "@/components/skeletons/ProfileSkeleton";
import UserToursCard from "@/templates/profile/myToursPage/UserToursCard";
import { MESSAGES } from "@/core/enums/enums";

function MyToursPage() {
  const { data, error, isPending } = useUserTours();

  if (error) return toast.error(MESSAGES.UNKNOWN_ERRORS);

  if (!data?.data.length && !isPending)
    return (
      <div className="w-full h-lvh">
        <p className="text-center align-middle w-full text-lg font-semibold border border-gray-200 rounded-xl shadow-md py-8 px-3 max-lg:mt-10">
          شما هنوز هیچ یک از تورها رو رزرو نکردید!
        </p>
      </div>
    );

  return (
    <section className="mt-5 lg:mt-0 lg:w-[68%] xl:w-[72%] lg:border lg:border-[#00000033] lg:rounded-[10px] lg:px-3 lg:pt-5 lg:mb-5 min-h-lvh">
      {isPending ? (
        <div className="h-lvh">
          <ProfileSkeleton />
          <ProfileSkeleton />
          <ProfileSkeleton />
        </div>
      ) : (
        data?.data?.map((tour) => <UserToursCard key={tour.id} tour={tour} />)
      )}
    </section>
  );
}

export default MyToursPage;
