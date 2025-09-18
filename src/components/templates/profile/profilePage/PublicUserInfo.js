"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";

import Icon from "@/core/utils/icon";
import { e2p } from "@/utils/replaceNumber";
import UserInput from "@/components/atoms/UserInput";

function PublicUserInfo({ data, formHandler }) {
  const { handleSubmit, control } = useFormContext();
  const [showEdit, setShowEdit] = useState(false);

  return (
    <section className="relative flex flex-col w-full border border-[#00000033] rounded-[10px] px-6 py-3">
      <h2 className="text-base lg:text-lg font-normal">اطلاعات حساب کاربری</h2>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div
          className={`flex items-center max-md:justify-between gap-8 mt-4 md:basis-2/6 ${
            showEdit ? "md:pb-6" : "md:pb-0"
          }`}
        >
          <p className="text-base font-light text-[#282828] max-md:mb-2">شماره موبایل</p>
          <p className="text-base font-normal ml-2">{e2p(data?.mobile)}</p>
        </div>
        {showEdit ? (
          <form autoComplete="off" className="relative mt-3 md:basis-4/6">
            <div className="md:flex md:items-center">
              <div className="md:w-[65%]">
                <UserInput control={control} name="email" />{" "}
              </div>
              <div className="flex flex-col md:flex-row w-full max-md:gap-y-2 gap-x-2 md:mr-2 md:w-[35%] md:mb-7 lg:mb-8">
                <button
                  type="button"
                  onClick={() => {
                    handleSubmit((data) => {
                      formHandler(data);
                      setShowEdit(false);
                    })();
                  }}
                  className="w-full h-[46px] md:w-[84px] xl:w-[122px] leading-[46px] bg-primary hover:bg-secondary rounded-[5px] text-white text-base font-medium transition-all duration-[0.2s]"
                >
                  تایید
                </button>
                <button
                  type="button"
                  onClick={() => setShowEdit(false)}
                  className="w-full h-[46px] md:w-[84px] xl:w-[122px] leading-[46px] bg-rose-500 text-white text-base font-medium hover:bg-rose-500/80 rounded-[5px] transition-all duration-[0.2s]"
                >
                  انصراف
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="flex items-center justify-between mt-4 md:w-[45%]">
            <div className="flex items-center gap-x-8 ml-3">
              <p className="text-base font-light">ایمیل</p>
              <p className="text-base font-normal">
                {data?.email ? data.email : "-"}
              </p>
            </div>
            <button
              onClick={() => setShowEdit(true)}
              className={`flex items-center gap-x-2 text-complementry text-base font-normal ${
                data?.email && "absolute top-3 left-6"
              }`}
            >
              <Icon
                name="edit"
                className="size-4 fill-white stroke-complementry"
              />
              {data?.email ? "ویرایش ایمیل" : "افزودن"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default PublicUserInfo;
