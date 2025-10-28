import { Control, FieldError } from "react-hook-form";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { TEdit, TMainData, TOriOrDes, TProfile } from "@/types/fetchData";

export type TPublicProps = {
  children: ReactNode;
};

//-------------------------------app----------------------------------------------
export type TToursPage = {
  params: { toursId: number };
};

export type THomePage = {
  searchParams: null | TQuery;
};

//-------------------------------components---------------------------------------
//-------------atoms Folder--------------
//addBasketButton
export type TAddBasketButton = {
  card: boolean;
  id: string;
};

//arrowButton
export type TArrowButton = {
  setStep: Dispatch<SetStateAction<number>>;
};

//card
export type TCard = {
  data: TMainData;
  index: number;
};

//checkOtpInput
export type TCheckOtpInput = {
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
  error: string;
  doShake: number;
};

//closeButton
export type TCLoseButtonProps = {
  check?: boolean;
  closeModal: () => void;
};

//datepicker
export type TDatePicker =
  | {
      query: {
        startDate?: string;
        endDate?: string;
      };
      setQuery: Dispatch<SetStateAction<{}>>;
    }
  | {
      user: boolean;
      value: Date | string | null;
      onChange: (value: Date | string | null) => void;
      error?: FieldError;
    };

//loader
export type TLoader = {
  text?: string;
};

//searchInput
export type TSearchInput = {
  originCities?: TOriOrDes[];
  destinationCities?: TOriOrDes[];
  origin: boolean;
  query: TQuery;
  setQuery: Dispatch<SetStateAction<{}>>;
  showOptions: string | null;
  setShowOptions: Dispatch<SetStateAction<string | null>>;
};

//sendButton
export type TSendButton = {
  error: string;
  isValid?: boolean;
  code?: string;
  check?: boolean;
  isLoading: boolean;
};

//showMoreWrapper
export type TShowMoreWrapper = {
  children: React.ReactNode[];
  initialCount: number;
};

//UserInput
export type TUserInputs = {
  control: Control<any>;
  name: string;
  showGender?: boolean;
  setShowGender?: Dispatch<SetStateAction<boolean>>;
};

//-------------templates Folder---------------
//------authForm
export type TSendOtpProps = {
  mobile: string;
  setMobile: Dispatch<SetStateAction<string>>;
  closeModal: () => void;
  setStep: Dispatch<SetStateAction<number>>;
};

export type TCheckOtpProps = Omit<TSendOtpProps, "setMobile">;

//------checkout
export type TOrderHandlerFormData = {
  fullName: string;
  gender: string;
  nationalCode: string;
  birthDate: string | Date;
};

//------homePage
export type THomePageProps = {
  data: TMainData[];
  searchedTours: TMainData[] | [];
};

export type TSearchFormProps = Omit<THomePageProps, "searchedTours">;

export type TQuery = {
  originInfo?: TOriOrDes;
  destinationInfo?: TOriOrDes;
  startDate?: string;
  endDate?: string;
};

//------layouts
export type TProfileList = {
  data: TProfile;
  logOutHandler: () => void;
  router: AppRouterInstance;
};

//------payment
export type TPaymentPageProps = {
  searchParams: {
    status: string;
    tour: string;
    id: string;
  };
};

//------profile
export type TUserToursCardProps = {
  tour: TMainData;
};

export type TProfilePageProps = {
  data: TProfile;
  formHandler: (i: TEdit) => void;
};

//------tourDetails
export type TTourDetails = {
  data: TMainData;
};
