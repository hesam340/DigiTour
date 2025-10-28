"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Icon from "@/core/utils/icon";
import { TPublicProps } from "@/core/types/props";
import { useGetUserData } from "@/core/services/queries";
import profileSidebarOptions from "@/constants/profileSidebarOptions";
import ProfileSidebarSkeleton from "@/components/skeletons/ProfileSidebarSkeleton";

function ProfileSidebar({ children }:TPublicProps) {
  const [clicked, setClicked] = useState<number | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const { data, isPending } = useGetUserData();

  useEffect(() => {
    if (!data?.data && !isPending) router.push("/");
  }, [data, router, isPending]);

  useEffect(() => {
    const current = profileSidebarOptions.find(
      (item) => item.href === pathname
    );
    if (current) setClicked(current.id);
  }, [pathname]);

  return (
    <div className="container w-full px-8 mx-auto flex flex-col lg:flex-row lg:justify-between lg:mt-10">
      {isPending ? (
        <ProfileSidebarSkeleton />
      ) : (
        <ul className="flex items-center justify-between lg:flex-col lg:items-start lg:justify-center lg:h-fit w-full lg:w-[30%] xl:w-[25%] lg:ml-3 gap-0 lg:border lg:border-[#00000033] lg:rounded-[10px] lg:divide-y-2 max-lg:sticky max-md:top-[52px] max-lg:top-[76px] max-lg:pt-5 max-lg:z-40 bg-white">
          {profileSidebarOptions.map((i) => {
            const isActive = clicked === i.id;

            return (
              <li key={i.id} className={`flex-1 lg:w-full`}>
                <button
                  onClick={() => {
                    router.push(i.href);
                    setClicked(i.id);
                  }}
                  className={`w-full flex items-center justify-center lg:justify-start gap-x-2 pb-2 lg:py-5 lg:px-4 ${
                    isActive
                      ? "text-primary border-b-2 border-b-primary lg:border-none lg:bg-[#28A74540]"
                      : "text-[#282828] border-b border-b-[#00000040] lg:border-none"
                  }`}
                >
                  <Icon
                    name={i.icon}
                    className="size-4 lg:size-5"
                    fill={isActive ? "#fdb713" : i.fill}
                    stroke={isActive ? "#fdb713" : i.stroke}
                  />
                  <p className="text-sm font-normal">{i.title}</p>
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {children}
    </div>
  );
}

export default ProfileSidebar;
