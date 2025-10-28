import Card from "@/components/atoms/Card";
import { THomePageProps } from "@/core/types/props";
import ShowMoreWrapper from "@/components/atoms/ShowMoreWrapper";
import CartoonPart from "@/templates/homePage/cartoonPart/index";
import Banner from "@/components/templates/homePage/banner/index";
import SearchForm from "@/components/templates/homePage/searchForm/index";
import SupportTitles from "@/components/templates/homePage/support/index";
import WhyDigiTour from "@/components/templates/homePage/why-digiTour/index";

function HomePage({ data, searchedTours }: THomePageProps) {
  return (
    <>
      <Banner />
      <SearchForm data={data} />
      <section className="mt-10 mb-14 mx-auto container px-8">
        <p className="text-[20px] md:text-3xl font-light md:font-normal mb-4">
          {searchedTours.length ? "نتیجه جستجو" : "همه تور ها"}
        </p>
        <ShowMoreWrapper initialCount={4}>
          {(searchedTours.length ? searchedTours : data).map((tour, index) => (
            <Card key={tour.id} data={tour} index={index} />
          ))}
        </ShowMoreWrapper>
      </section>
      <CartoonPart />
      <WhyDigiTour />
      <SupportTitles />
    </>
  );
}

export default HomePage;
