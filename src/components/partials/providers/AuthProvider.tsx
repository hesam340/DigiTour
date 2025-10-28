"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { TPublicProps } from "@/core/types/props";
import { useGetUserData } from "@/core/services/queries";

function AuthProvider({ children }: TPublicProps) {
  const router = useRouter();

  const { data, isPending } = useGetUserData();

  useEffect(() => {
    if (!data?.data && !isPending) router.push("/");
  }, [router, data, isPending]);

  return children;
}

export default AuthProvider;
