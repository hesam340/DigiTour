import { serverFetch } from "@/core/services/http";
import HomePage from "@/components/templates/homePage";
import { THomePage } from "@/core/types/props";
import { TMainData } from "@/core/types/fetchData";

export default async function Home({ searchParams }:THomePage) {
  const data:TMainData[] = await serverFetch("tour", undefined, { cache: "no-store" });

  const searchedTours = searchParams && Object.keys(searchParams).length
    ? await serverFetch("tour", searchParams, { cache: "no-store" })
    : [];

  return <HomePage data={data} searchedTours={searchedTours} />;
}
