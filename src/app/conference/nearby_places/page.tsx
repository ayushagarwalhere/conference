import Navbar from "../../../components/navbar";
import PageHeaderBanner from "../../../components/page-header-banner";

const places = [
  {
    title: "NIT Hamirpur campus",
    text: "A scenic hill campus with views of the surrounding valleys and a calm environment for academic gatherings.",
  },
  {
    title: "Bhakra Dam region",
    text: "A well-known engineering landmark and a popular excursion destination in the wider region.",
  },
  {
    title: "Local markets and town areas",
    text: "Hamirpur town offers everyday services, food options, and shopping within a short travel distance.",
  },
];

export default function NearbyPlacesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen home-texture px-5 pb-16 pt-36 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <PageHeaderBanner title="Nearby Places" />

          <section className="rounded-lg border border-slate-300 bg-white p-6 sm:p-8">
            <h1 className="text-4xl font-bold text-[#0b2a89] sm:text-5xl">
              Nearby Places
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700 sm:text-xl">
              Delegates visiting NIT Hamirpur can explore a mix of scenic views,
              local culture, and regional landmarks while attending the
              conference.
            </p>
          </section>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {places.map((place) => (
              <article
                key={place.title}
                className="rounded-lg border border-slate-300 bg-white p-6"
              >
                <h2 className="text-2xl font-semibold text-slate-900">
                  {place.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {place.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
