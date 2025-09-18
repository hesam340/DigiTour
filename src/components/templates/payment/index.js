"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useGetUserData } from "@/core/services/queries";

function PaymentPage({ searchParams: { status, tour, id } }) {
  const { data, isPending } = useGetUserData();
  const router = useRouter();

  useEffect(() => {
    if (!data?.data && !isPending) router.push("/");
  }, [data, router, isPending]);

  useEffect(() => {
    const isPermitted = JSON.parse(localStorage.getItem("key"));
    if (!isPermitted) router.push("/");
    setTimeout(() => {
      localStorage.clear();
    }, 1000);
  }, [router]);

  return (
    <section className="bg-white py-6 w-full h-full md:bg-gray-100 md:py-9 lg:py-20 flex justify-center">
      <div className="container px-8">
        <div className="w-full h-full px-6 md:py-4 bg-white mx-auto md:border border-gray-300 md:rounded-[10px] flex flex-col items-center lg:gap-x-3">
          <Image
            src={
              status === "success"
                ? "/images/success-mark.webp"
                : "/images/failed-mark.webp"
            }
            alt={status}
            priority={true}
            width={100}
            height={100}
            className="size-20"
          />
          <p className="pt-4 font-semibold text-xl">
            {status === "success"
              ? "پرداخت شما با موفقیت انجام شد"
              : "پرداخت انجام نشد"}
          </p>
          <p className="text-lg text-gray-800 pt-6 py-4 text-justify-fa">
            {status === "success" ? (
              <>
                <Link
                  href={`/tours/${id}`}
                  className="text-complementry font-semibold cursor-pointer"
                >
                  {tour}
                </Link>{" "}
                برای شما رزرو شد ، جزئیات تور خریداری شده را میتوانید در صفحه
                کاربری خود قسمت{" "}
                <Link
                  href={`/profile/my-tours`}
                  className="text-complementry font-semibold cursor-pointer"
                >
                  تورهای من
                </Link>{" "}
                مشاهده فرمایید
              </>
            ) : (
              <>
                مشکلی در پرداخت شما به وجود آمده لطفا در زمان دیگری اقدام به
                رزرو کنید ، همچنین میتوانید برای حل مشکل در اسرع وقت با{" "}
                <Link
                  href="/"
                  className="text-complementry font-semibold cursor-pointer"
                >
                  تیم پشتیبانی دیجی تور
                </Link>
                مشکل خود را مطرح کنید.
              </>
            )}
          </p>
          <Link
            href="/"
            className="px-6 py-3 rounded-xl border-none bg-primary text-white text-lg font-semibold mt-4 transition-all duration-300 hover:bg-secondary hover:text-white"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PaymentPage;
