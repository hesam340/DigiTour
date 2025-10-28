//----------server fetch

export type TOriOrDes = {
  id: string;
  name: string;
  fa_name: string;
};

export type TMainData = {
  id: string;
  origin: TOriOrDes;
  destination: TOriOrDes;
  startDate: string;
  endDate: string;
  title: string;
  fleetVehicle: string;
  price: number;
  availableSeats: number;
  insurance: boolean;
  options: string[];
  image: string;
  message?: string;
};

export type TFeaturesDetails = {
  fleetVehicle: string;
  availableSeats: number;
  insurance: boolean;
  origin?: TOriOrDes;
  startDate?: string | Date;
  endDate?: string | Date;
};

//-----------reactQuery
//queries

export type TProfile = {
  id: string;
  mobile: string;
  email: string;
  firstName: string;
  lastName: string;
  nationalCode: string;
  birthDate: string;
  gender: string;
  payment: {
    shaba_code: string;
    debitCard_code: string;
    accountIdentifier: string;
  };
  message?: string;
};

export type TTransaction = {
  id: string;
  userId: string;
  amount: number;
  type: string;
  createdAt: string;
  message?: string;
};

export type TUserTours = {
  data: TMainData[];
};

//mutations
export type TEdit = Omit<TProfile, "id">;
