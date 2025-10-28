import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "@/core/configs/api";
import { TEdit } from "@/types/fetchData";
import { TOrderHandlerFormData } from "@/types/props";

export const useSendOtp = () => {
  const mutationFn = (data: { mobile: string }) =>
    api.post("auth/send-otp", data);

  return useMutation({ mutationFn });
};

export const useCheckOtp = () => {
  const mutationFn = (data: { mobile: string; code: string }) =>
    api.post("auth/check-otp", data);

  return useMutation({ mutationFn });
};

export const useAddBasket = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutationFn = (id: string) => api.put(`basket/${id}`);
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["checkout"] });
      router.push("/checkout");
    },
    onError: (error: any) => {
      if (error.status === 401)
        toast.error("لطفا ابتدا وارد حساب کاربری خود شوید");
    },
  });
};

export const useOrder = () => {
  const mutationFn = (data: TOrderHandlerFormData) => api.post("order", data);
  return useMutation({ mutationFn });
};

export const useEditUserData = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data: TEdit) => api.put("user/profile", data);
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-data"] });
    },
    onError: () => {
      toast.error("مشکلی پیش آمده است");
    },
  });
};
