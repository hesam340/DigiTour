import Image from "next/image";

function Banner() {
  return (
    <section>
      <Image
        src="/images/banner.webp"
        priority={true}
        width={1000}
        height={300}
        alt="banner"
        className="w-full h-[119px] mb-6 sm:h-[200px] md:h-[250px] lg:h-[350px]"
      />
    </section>
  );
}

export default Banner;