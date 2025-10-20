export default async function sitemap() {
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_BASE_URL;
  const staticRoutes = ["", "tours"];
  const res = await fetch(`${API_URL}tour`, {
    cache: "no-store",
  });
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
