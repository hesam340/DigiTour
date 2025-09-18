import { useQuery } from "@tanstack/react-query";

import api from "@/core/configs/api";

export const useGetUserData = () => {
  const queryKey = ["user-data"];
  const queryFn = () => api.get("user/profile");

  return useQuery({ queryKey, queryFn });
};

export const useCheckout = () => {
  const queryKey = ["checkout"];
  const queryFn = () => api.get("basket");

  return useQuery({ queryKey, queryFn });
};

export const useUserTours = () => {
  const queryKey = ["user-tours"];
  const queryFn = () => api.get("user/tours");

  return useQuery({ queryKey, queryFn });
};

export const useUserTransactions = () => {
  const queryKey = ["userTransactions"];
  const queryFn = () => api.get("user/transactions");
  return useQuery({ queryKey, queryFn });
};
