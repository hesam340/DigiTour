"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

import Icon from "@/core/utils/icon";
import Loader from "@/components/atoms/Loader";
import { setCookie } from "@/core/utils/cookie";
import { e2p } from "@/core/utils/replaceNumber";
import { useGetUserData } from "@/core/services/queries";

function LoginButton() {
  const { data, error, isPending } = useGetUserData();
  const router = useRouter();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (error && error?.status !== 401 && error?.status !== 404) {
      router.push("/");
      toast.error("مشکلی پیش آمده ، بعدا دوباره وارد شوید");
    }
  }, [error, router]);

  const handleHash = () => (window.location.hash = "#auth");

  const logOutHandler = () => {
    setCookie("accessToken", "", 0);
    setCookie("refreshToken", "", 0);
    queryClient.removeQueries({ queryKey: ["user-data"] });
    router.refresh();
  };

  return (
    <>
      {isPending ? (
        <div>
          <Loader />
        </div>
      ) : data?.data ? (
        <>
          <div className="relative">
            <div className="flex items-center justify-between gap-x-1 cursor-pointer group after:absolute after:top-5 after:left-0 after:bg-transparent after:content-[' '] after:w-full after:h-5 after:cursor-pointer">
              <Icon
                className="size-[14px] md:size-6"
                name="profile"
                fill="#fdb713"
                stroke="none"
              />
              <span className="block text-primary text-sm md:text-lg">
                {e2p(data.data.mobile)}
              </span>
              <Icon
                className="size-4 md:size-6 group-hover:rotate-180 transition-all duration-300"
                name="arrow-down"
                fill="none"
                stroke="#fdb713"
              />
              <ProfileList
                data={data.data}
                logOutHandler={logOutHandler}
                router={router}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="block md:hidden">
            <Link
              href="#auth"
              onClick={handleHash}
              className="border border-primary rounded-md w-7 h-7 flex justify-center items-center"
            >
              <Icon
                name="login"
                className="size-6"
                fill="none"
                stroke="#fdb713"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <Link
              href="#auth"
              onClick={handleHash}
              className="border-2 border-primary rounded-md flex items-center justify-around lg:px-2 text-primary font-vazir w-[130px] lg:w-[160px] md:h-10 hover:scale-105 transition-all duration-[0.2s]"
            >
              <Icon
                name="profile"
                className="size-[22px]"
                fill="#fdb713"
                stroke="none"
              />
              <p className="text-base lg:text-lg font-medium">
                ورود<span className="mx-1 lg:mx-2">|</span>ثبت نام
              </p>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default LoginButton;

function ProfileList({ data, logOutHandler, router }) {
  const [forceClose, setForceClose] = useState(false);

  const closeMenu = () => {
    setForceClose(true);
    setTimeout(() => setForceClose(false), 200);
  };

  return (
    <div
      className={`absolute top-6 -left-6 md:top-8 md:-left-10 lg:top-9 lg:-left-11 z-30 bg-white w-[157px] md:w-[246px] h-fit rounded-[11px] ${
        forceClose ? "hidden" : "hidden group-hover:block hover:block"
      }`}
    >
      <ul>
        <li className="flex items-center gap-x-2 px-3 py-2 bg-[#F4F4F4] rounded-t-[11px]">
          <div className="size-7 rounded-full bg-[#D9D9D9]">
            <Icon
              name="profile"
              className="size-4 mx-auto mt-1"
              fill="#696969"
              stroke="none"
            />
          </div>
          <p className="text-primary font-normal text-sm md:text-base">
            {e2p(data.mobile)}
          </p>
        </li>
        <li className="px-3 py-2 cursor-pointer">
          <button
            onClick={() => {
              router.push("/profile");
              closeMenu();
            }}
            className="flex items-center gap-x-2 "
          >
            <Icon
              name="profile"
              className="size-4 md:size-5"
              fill="none"
              stroke="#282828"
            />
            <p className="text-xs md:text-sm font-light md:font-normal text-textColor">
              اطلاعات حساب کاربری
            </p>
          </button>
        </li>
        <li className="px-3 py-2 border-t border-t-[#00000033] text-[#D40000] cursor-pointer">
          <button className="flex items-center gap-x-2" onClick={logOutHandler}>
            <Icon
              name="logout"
              className="size-4 md:size-5"
              fill="none"
              stroke="#d40000"
            />
            <p className="text-xs md:text-sm font-light md:font-normal">
              خروج از حساب کاربری
            </p>
          </button>
        </li>
      </ul>
    </div>
  );
}
