import Navbar from "../../components/navbar";
import PageHeaderBanner from "../../components/page-header-banner";

export default function ContactVisaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen home-texture px-5 pb-16 pt-36 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <PageHeaderBanner title="Contact and VISA" />
          <section className="rounded-lg border border-slate-300 bg-white/78 p-6 backdrop-blur-sm sm:p-8">
            <h1 className="text-4xl font-bold text-[#0b2a89] sm:text-5xl">
              Contact and VISA
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-700 sm:text-xl">
              Contact information, travel support, and VISA guidance for
              participants will be updated on this page.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
