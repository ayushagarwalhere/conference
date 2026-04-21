import Navbar from "../../../components/navbar";
import PageHeaderBanner from "../../../components/page-header-banner";

const keynotePoints = [
  "Keynote speakers will be announced through the conference website and official communication channels.",
  "Sessions will highlight current research trends across intelligent systems, VLSI, communication, and signal processing.",
  "The program is intended to balance foundational insights with practical applications and industry relevance.",
];

export default function KeynotesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen home-texture px-5 pb-16 pt-36 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <PageHeaderBanner title="Keynotes" />

          <section className="rounded-lg border border-slate-300 bg-white p-6 sm:p-8">
            <h1 className="text-4xl font-bold text-[#0b2a89] sm:text-5xl">
              Keynotes
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700 sm:text-xl">
              The keynote program will feature invited experts who can share
              insights on emerging trends and open research problems relevant
              to the CIVCS community.
            </p>
            <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">
              {keynotePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
