export default async function sitemap() {
  const staticRoutes = ["", "tours"];
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}tour`
  );
  const tours = await res.json();

  const routes = staticRoutes.map((route) => ({
    url: `http://localhost:3000/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const toursRoutes = tours.map((tour) => ({
    url: `http://localhost:3000/tours/${tour.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));

  return [...routes, ...toursRoutes];
}
