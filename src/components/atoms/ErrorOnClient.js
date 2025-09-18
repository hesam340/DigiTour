"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function ErrorOnClient({ data }) {
  const router = useRouter();

  useEffect(() => {
    if (data?.message) {
      toast.error(data?.message);
      router.push("/");
    }
  }, [data?.message]);

  return <></>;
}

export default ErrorOnClient;
