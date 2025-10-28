"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function ErrorOnClient({ message }: { message: string }) {
  const router = useRouter();

  useEffect(() => {
    if (message) {
      toast.error(message);
      router.push("/");
    }
  }, [message, router]);

  return <></>;
}

export default ErrorOnClient;
