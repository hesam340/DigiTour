import { serverFetch } from "@/core/services/http";
import TourDetailsPage from "@/components/templates/tourDetails";

async function TourDetails({ params }) {
  const { toursId } = params;

  const data = await serverFetch(`tour/${toursId}`, null, {
    cache: "no-store",
  });

  return <TourDetailsPage data={data} />;
}

export default TourDetails;
