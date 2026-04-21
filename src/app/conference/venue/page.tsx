import Navbar from "../../../components/navbar";
import PageHeaderBanner from "../../../components/page-header-banner";

const venueDetails = [
  "Venue: National Institute of Technology Hamirpur, Himachal Pradesh, India.",
  "The campus provides an academic setting suitable for plenary sessions, paper presentations, and networking.",
  "Travel information and room allocation details can be shared with registered participants ahead of the event.",
];

export default function VenuePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen home-texture px-5 pb-16 pt-36 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <PageHeaderBanner title="Venue" />

          <section className="rounded-lg border border-slate-300 bg-white p-6 sm:p-8">
            <h1 className="text-4xl font-bold text-[#0b2a89] sm:text-5xl">
              Venue
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700 sm:text-xl">
              The conference venue will be hosted at NIT Hamirpur, offering a
              professional academic setting with access to lecture halls and
              campus facilities.
            </p>
            <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">
              {venueDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
