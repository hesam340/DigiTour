"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Icon from "@/core/utils/icon";
import Loader from "@/components/atoms/Loader";
import UserInput from "@/components/atoms/UserInput";
import { useOrder } from "@/core/services/mutations";
import { stayingDays } from "@/core/utils/tourFuncs";
import { userSchema } from "@/core/utils/userSchema";
import { e2p, sp } from "@/core/utils/replaceNumber";
import { useQueryClient } from "@tanstack/react-query";
import CustomDatePicker from "@/components/atoms/CustomDatePicker";
import CheckoutSkeleton from "@/components/skeletons/CheckoutSkeleton";
import {
  useCheckout,
  useGetUserData,
  useUserTours,
} from "@/core/services/queries";
import { TOrderHandlerFormData } from "@/core/types/props";

function CheckoutPage() {
  const [showGender, setShowGender] = useState<boolean>(false);
  const [canPurchase, setCanPurchase] = useState<boolean>(true);
  const { data: tour, refetch } = useCheckout();
  const { data: userTours} = useUserTours();
  const { data: userData } = useGetUserData();
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(userSchema),
    mode: "onChange",
  });

  useEffect(() => {
    refetch();
    if (userData?.data) {
      const fullName = `${userData?.data.firstName} ${userData?.data.lastName}`;
      reset({
        fullName,
        gender: userData?.data.gender,
        nationalCode: userData?.data.nationalCode,
        birthDate: userData?.data.birthDate,
      });
    }
  }, [refetch, reset, userData?.data]);

  useEffect(() => {
    setCanPurchase(true);
    const userTour = userTours?.data?.find((i) => i.id === tour?.data?.id);
    if (userTour) setCanPurchase(false);
  }, [userTours, tour]);

  const { isPending: orderPending, mutate } = useOrder();

  const generateId = Math.sqrt(Math.random());

  const orderHandler = (data:TOrderHandlerFormData) => {
    mutate(data, {
      onSuccess: () => {
        router.push(
          `/payment?status=success&tour=${tour?.data?.title}&id=${tour?.data?.id}`
        );
        queryClient.invalidateQueries({ queryKey: ["user-tours"] });
        localStorage.setItem("key", JSON.stringify(generateId));
      },
      onError: () => {
        router.push(
          `/payment?status=failed&tour=${tour?.data?.title}&id=${tour?.data?.id}`
        );
        localStorage.setItem("key", JSON.stringify(generateId));
      },
    });
  };

  const days = stayingDays(tour?.data?.startDate || "", tour?.data?.endDate || "");

  return (
    <section className="bg-white w-full h-full md:bg-gray-100 md:py-9 lg:py-20 flex justify-center">
      <div className="container px-8">
        <div className="w-full h-full md:py-4 md:bg-gray-100 mx-auto md:rounded-[10px] lg:flex lg:items-start lg:gap-x-3">
          {tour?.data && userTours?.data ? (
            <>
              <div className="flex flex-col bg-white justify-center font-vazir text-2xl font-normal border border-[#00000033] rounded-[10px] px-6 py-5 mt-5 lg:w-[80%] lg:mt-0">
                {!canPurchase ? (
                  <p className="font-yekan text-center text-2xl font-normal px-8 py-7 leading-10">
                    این تور قبلا توسط شما خریداری شده برای مشاهده جزئیات لطفا به
                    حساب کاربری خود قسمت تورهای من مراجعه کنید.
                  </p>
                ) : (
                  <>
                    <div className="flex items-center gap-x-3 mb-4">
                      <Icon
                        name="profile"
                        className="size-6 fill-black stroke-none"
                      />
                      <h1 className="text-2xl font-normal font-vazir">
                        مشخصات مسافر
                      </h1>
                    </div>
                    <form
                      autoComplete="off"
                      className="lg:flex lg:flex-wrap lg:gap-x-1 lg:items-start lg:justify-between"
                    >
                      <div className="relative w-full order-1 lg:order-1 lg:basis-[32%]">
                        <UserInput name="fullName" control={control} />
                      </div>
                      <div className="relative w-full order-2 lg:order-4 lg:basis-[32%]">
                        <UserInput
                          name="gender"
                          control={control}
                          showGender={showGender}
                          setShowGender={setShowGender}
                        />
                      </div>
                      <div className="relative w-full order-3 lg:order-2 lg:basis-[32%]">
                        <UserInput name="nationalCode" control={control} />
                      </div>
                      <div className="relative w-full order-4 lg:order-3 lg:basis-[32%]">
                        <Controller
                          name="birthDate"
                          control={control}
                          render={({ field, fieldState }) => (
                            <CustomDatePicker
                              user={true}
                              value={field.value}
                              onChange={field.onChange}
                              error={fieldState.error}
                            />
                          )}
                        />
                      </div>
                    </form>
                  </>
                )}
              </div>
              <div className="mt-10 lg:mt-0 bg-white border border-[#0000001A] rounded-[10px] flex flex-col mb-10 py-5 lg:[20%] px-6 lg:px-2">
                <div className="flex items-baseline justify-between mb-5">
                  <h2 className="text-2xl lg:text-[32px] lg:mb-3 font-semibold">
                    {tour?.data?.title}
                  </h2>
                  <p className="text-base lg:text-[20px] text-[#00000070] font-normal">{`${e2p(
                    days
                  )} روز و ${e2p(days - 1)} شب`}</p>
                </div>
                <span
                  className="block border-t border-dashed border-[#00000040] mb-4"
                  style={{
                    borderImage:
                      "repeating-linear-gradient(to right, #00000040 0, #00000040 10px, transparent 4px, transparent 20px)",
                    borderImageSlice: 1,
                  }}
                ></span>
                <div className="flex items-baseline justify-between font-vazir mb-2">
                  <p className="text-base font-normal">قیمت نهایی</p>
                  <p className="text-[#282828CC] text-sx font-normal">
                    <span className="text-[28px] font-medium text-complementry ml-1">
                      {sp(tour?.data?.price)}
                    </span>{" "}
                    تومان
                  </p>
                </div>
                <button
                  onClick={handleSubmit(orderHandler)}
                  disabled={!isValid || !canPurchase}
                  className={`w-[285px] h-[56px] leading-[56px] rounded-[10px] text-2xl font-normal text-center mx-auto font-vazir bg-primary hover:bg-secondary transition-all duration-[0.2s] text-white ${
                    !isValid ||
                    (!canPurchase && "cursor-not-allowed opacity-50")
                  }`}
                >
                  {orderPending ? (
                    <Loader text="در حال خرید ..." />
                  ) : (
                    "ثبت و خرید نهایی"
                  )}
                </button>
              </div>
            </>
          ) : (
            <>
              <CheckoutSkeleton />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;
