import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "@/core/configs/api";
import { toast } from "react-toastify";

export const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);

  return useMutation({ mutationFn });
};

export const useCheckOtp = () => {
  const mutationFn = (data) => api.post("auth/check-otp", data);

  return useMutation({ mutationFn });
};

export const useAddBasket = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutationFn = (id) => api.put(`basket/${id}`);
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries(["checkout"]);
      router.push("/checkout");
    },
    onError: (error) => {
      if (error.status === 401)
        toast.error("لطفا ابتدا وارد حساب کاربری خود شوید");
    },
  });
};

export const useOrder = () => {
  const mutationFn = (data) => api.post("order", data);
  return useMutation({ mutationFn });
};

export const useEditUserData = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.put("user/profile", data);
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries(["user-data"]);
    },
    onError: () => {
      toast.error("مشکلی پیش آمده است");
    },
  });
};
