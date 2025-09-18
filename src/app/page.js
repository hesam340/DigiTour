import { serverFetch } from "@/core/services/http";
import HomePage from "@/components/templates/homePage";

export default async function Home({ searchParams }) {
  const data = await serverFetch("tour", null, { cache: "no-store" });

  const searchedTours = Object.keys(searchParams).length
    ? await serverFetch("tour", searchParams, { cache: "no-store" })
    : [];

  return <HomePage data={data} searchedTours={searchedTours} />;
}
