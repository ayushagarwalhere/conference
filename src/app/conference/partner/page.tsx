import Navbar from "../../../components/navbar";
import PageHeaderBanner from "../../../components/page-header-banner";

const partnerThemes = [
  {
    title: "Industry collaboration",
    text: "The conference encourages participation from semiconductor, telecom, and embedded technology companies.",
  },
  {
    title: "Academic partnerships",
    text: "Research groups and universities can contribute through sponsorship, paper sessions, and joint activities.",
  },
  {
    title: "Student engagement",
    text: "Partners can support student innovation showcases, mentoring, and skill-building opportunities.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen home-texture px-5 pb-16 pt-36 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <PageHeaderBanner title="Partners" />

          <section className="rounded-lg border border-slate-300 bg-white p-6 sm:p-8">
            <h1 className="text-4xl font-bold text-[#0b2a89] sm:text-5xl">
              Partners
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700 sm:text-xl">
              CIVCS 2027 welcomes institutional and industry partners who want
              to support research visibility, student participation, and a
              stronger technical ecosystem.
            </p>
          </section>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {partnerThemes.map((item) => (
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
