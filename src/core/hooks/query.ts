import { useRouter, useSearchParams } from "next/navigation";

const useQuery = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(String(searchParams));

  const addQuery = (key: string, value: string | number) => {
    value = String(value);
    params.set(key, value);
    router.replace(`/?${params}`);
  };

  const removeQuery = (key: string) => {
    params.delete(key);
    router.replace(`/?${params}`);
  };

  const getQuery = (key: string) => {
    return params.get(key);
  };

  return { addQuery, removeQuery, getQuery };
};

export default useQuery;
