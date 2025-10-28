import axios, { AxiosResponse } from "axios";

import { getCookie } from "@/utils/cookie";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_BASE_URL;

const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;

  try {
    const res: AxiosResponse = await axios.post(
      `${API_URL}auth/refresh-token`,
      { refreshToken }
    );
    return { res };
  } catch (error) {
    return { error };
  }
};

export { getNewTokens };
