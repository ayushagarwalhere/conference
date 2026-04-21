import Navbar from "../../../components/navbar";
import PageHeaderBanner from "../../../components/page-header-banner";

const options = [
  {
    title: "On-campus stay",
    text: "Limited accommodation may be arranged in and around the institute for invited guests, speakers, and delegates on a priority basis.",
  },
  {
    title: "Nearby hotels",
    text: "Several hotels and guest houses are available in Hamirpur town with easy access to the institute and local transport.",
  },
  {
    title: "Travel support",
    text: "Participants can coordinate arrival details in advance so they can plan transport and check-in smoothly.",
  },
];

export default function AccommodationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen home-texture px-5 pb-16 pt-36 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <PageHeaderBanner title="Accommodation" />

          <section className="rounded-lg border border-slate-300 bg-white p-6 sm:p-8">
            <h1 className="text-4xl font-bold text-[#0b2a89] sm:text-5xl">
              Accommodation
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700 sm:text-xl">
              CIVCS 2027 will share information about stay arrangements so
              delegates can choose between institute options and local lodging
              based on availability and convenience.
            </p>
          </section>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {options.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-slate-300 bg-white p-6"
              >
                <h2 className="text-2xl font-semibold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
