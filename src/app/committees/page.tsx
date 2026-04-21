import Navbar from "../../components/navbar";
import PageHeaderBanner from "../../components/page-header-banner";

export default function CommitteesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen home-texture px-5 pb-16 pt-36 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <PageHeaderBanner title="Committees" />
          <section className="rounded-lg border border-slate-300 bg-white/78 p-6 backdrop-blur-sm sm:p-8">
            <h1 className="text-4xl font-bold text-[#0b2a89] sm:text-5xl">
              Committees
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-700 sm:text-xl">
              Details of organizing, technical program, advisory, and review
              committees will be announced here.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
