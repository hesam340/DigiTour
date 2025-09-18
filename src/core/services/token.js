import axios from "axios";

import { getCookie } from "@/utils/cookie";

const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}auth/refresh-token`,
      { refreshToken }
    );
    return { res };
  } catch (error) {
    return { error };
  }
};

export { getNewTokens };
