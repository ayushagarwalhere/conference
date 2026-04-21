import Navbar from "../../../components/navbar";
import PageHeaderBanner from "../../../components/page-header-banner";

const highlights = [
  {
    title: "Host Department",
    text: "The ECE Department at NIT Hamirpur brings strong teaching and research capability across electronics, communication, embedded systems, and VLSI design.",
  },
  {
    title: "Conference Vision",
    text: "CIVCS 2027 is designed to connect researchers, practitioners, and students around practical work in computational intelligence, hardware, and signal processing.",
  },
  {
    title: "Professional Community",
    text: "The event aims to strengthen collaboration through IEEE-aligned scholarly exchange, technical sessions, and community building.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen home-texture px-5 pb-16 pt-36 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <PageHeaderBanner title="About CIVCS" />

          <section className="rounded-lg border border-slate-300 bg-white p-6 sm:p-8">
            <h1 className="text-4xl font-bold text-[#0b2a89] sm:text-5xl">
              About CIVCS 2027
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700 sm:text-xl">
              The International Conference on Computational Intelligence in
              VLSI, Communication and Signal Processing brings together
              academia and industry to share research, applications, and
              emerging ideas across intelligent hardware and communication
              systems.
            </p>
          </section>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-slate-300 bg-white p-6 shadow-sm"
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
