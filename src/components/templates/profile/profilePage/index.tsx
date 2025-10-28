"use client";

import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

import { useGetUserData } from "@/core/services/queries";
import ProfileSkeleton from "@/skeletons/ProfileSkeleton";
import { profileSchema } from "@/core/utils/profileSchema";
import { useEditUserData } from "@/core/services/mutations";
import PublicUserInfo from "@/templates/profile/profilePage/PublicUserInfo";
import PrivateUserInfo from "@/templates/profile/profilePage/PrivateUserInfo";
import AccountBankUserInfo from "@/templates/profile/profilePage/AccountBankUserInfo";
import { TEdit, TProfile } from "@/core/types/fetchData";

function ProfilePage() {
  const { data, isPending } = useGetUserData();
  const { mutate } = useEditUserData();

  const methods = useForm({
    resolver: yupResolver(profileSchema),
    mode: "onBlur",
  });

  useEffect(() => {
    if (data) {
      methods.reset({
        email: data?.data?.email || "",
        firstName: data?.data?.firstName || "",
        lastName: data?.data?.lastName || "",
        nationalCode: data?.data?.nationalCode || "",
        birthDate: data?.data?.birthDate || "",
        gender: data?.data?.gender || "",
        payment: {
          shaba_code: data?.data?.payment?.shaba_code || "",
          debitCard_code: data?.data?.payment?.debitCard_code || "",
          accountIdentifier: data?.data?.payment?.accountIdentifier || "",
        },
      });
    }
  }, [data, methods]);

  const formHandler = (formData:TEdit) => {
    const birthDate = formData?.birthDate && formData?.birthDate.split("T")[0];
    const newData = {
      ...formData,
      birthDate,
      payment: {
        shaba_code: formData?.payment?.shaba_code || "",
        debitCard_code: formData?.payment?.debitCard_code || "",
        accountIdentifier: formData?.payment?.accountIdentifier || "",
      },
    };
    mutate(newData);
  };
  return (
    <div className="lg:pr-8 mt-5 lg:mt-0 lg:w-[68%] xl:w-[72%] min-h-lvh">
      {isPending ? (
        <>
          <ProfileSkeleton />
          <ProfileSkeleton />
          <ProfileSkeleton />
        </>
      ) : data?.data ? (
        <FormProvider {...methods}>
          <PublicUserInfo data={data.data} formHandler={formHandler} />
          <PrivateUserInfo data={data.data} formHandler={formHandler} />
          <AccountBankUserInfo data={data.data} formHandler={formHandler} />
        </FormProvider>
      ) : null}
    </div>
  );
}

export default ProfilePage;
