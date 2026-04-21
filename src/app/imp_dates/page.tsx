import Navbar from "../../components/navbar";
import PageHeaderBanner from "../../components/page-header-banner";

const importantDates = [
  {
    event: "Call for Papers Opens",
    date: "15 October 2026",
  },
  {
    event: "Paper Submission Deadline",
    date: "25 December 2026",
  },
  {
    event: "Notification of Acceptance",
    date: "10 January 2027",
  },
  {
    event: "Camera-Ready Submission Deadline",
    date: "30 January 2027",
  },
  {
    event: "Early Bird Registration Deadline",
    date: "10 February 2027",
  },
  {
    event: "Conference Dates",
    date: "12-14 March 2027",
  },
];

export default function ImportantDatesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen home-texture px-5 pb-16 pt-36 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <PageHeaderBanner title="Important Dates" />
          <header className="rounded-lg border border-slate-300 bg-white/78 p-6 backdrop-blur-sm sm:p-8">
            <h1 className="text-4xl font-bold text-[#0b2a89] sm:text-5xl">
              Important Dates
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-700 sm:text-xl">
              Please note the following deadlines and milestones for CIVCS 2027.
              Authors and participants are advised to complete each activity
              before the corresponding date.
            </p>
          </header>

          <section className="mt-8 rounded-lg border border-slate-300 bg-white/78 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-5">
              {importantDates.map((item, index) => (
                <div
                  key={item.event}
                  className="rounded-md border border-slate-200 bg-white/58 p-5 shadow-sm backdrop-blur-sm"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0b2a89] text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                        {item.event}
                      </h2>
                    </div>
                    <p className="text-lg font-medium text-[#0b2a89] sm:text-xl">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
