import { TToursPage } from "@/core/types/props";
import { serverFetch } from "@/core/services/http";
import TourDetailsPage from "@/components/templates/tourDetails";

async function TourDetails({ params }:TToursPage) {
  const { toursId } = params;

  const data = await serverFetch(`tour/${toursId}`, undefined, {
    cache: "no-store",
  });

  return <TourDetailsPage data={data} />;
}

export default TourDetails;
