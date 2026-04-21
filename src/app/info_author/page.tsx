import Navbar from "../../components/navbar";
import PageHeaderBanner from "../../components/page-header-banner";

export default function InformationForAuthorsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen home-texture px-5 pb-16 pt-36 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <PageHeaderBanner title="Information for Authors" />
          <section className="rounded-lg border border-slate-300 bg-white/78 p-6 backdrop-blur-sm sm:p-8">
            <h1 className="text-4xl font-bold text-[#0b2a89] sm:text-5xl">
              Information for Authors
            </h1>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700 sm:text-xl">
              <p>
                IEEE IC2E3 2026 invites scholars and researchers from all over
                the world to submit their original research papers using CMT by
                February 15, 2026 for consideration to be presented at the
                conference. All submissions will be handled electronically in
                PDF format using CMT via the conference website. Authors are
                hereby instructed not to submit any paper via email directly. By
                submitting a paper, authors agree to the policies of IC2E3-2026.
                Log on to CMT using the link below for submitting your paper to
                IC2E3-2026.
              </p>

              <div className="pt-1">
                <a
                  href="https://cmt3.research.microsoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-red-700 px-6 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-red-800"
                >
                  Submission Page
                </a>
              </div>

              <p>
                The Microsoft CMT service was used for managing the peer-review
                process for this conference. This service was provided for free
                by Microsoft, and they bore all expenses, including costs for
                Azure cloud services as well as software development and
                support.
              </p>

              <p>
                The full papers should have at least 4 pages (with a maximum of
                6 pages) following the IEEE paper template. The IEEE paper
                template (LaTeX/Doc) can be downloaded from the link below.
              </p>

              <div className="pt-1">
                <a
                  href="https://www.ieee.org/conferences/publishing/templates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md border border-[#0b2a89] px-6 py-3 text-lg font-semibold text-[#0b2a89] transition hover:bg-[#0b2a89] hover:text-white"
                >
                  Word and Latex IEEE Format
                </a>
              </div>

              <p>
                All submitted papers will be peer-reviewed by at least 2
                reviewers, and acceptance will be announced on April 01, 2026.
                In order to be included in the conference proceedings, at least
                one co-author of each accepted paper must be registered for the
                conference and present it in location. For more information,
                refer to the Registration page.
              </p>
            </div>
          </section>

          <section className="mt-8 rounded-lg border border-slate-300 bg-white/78 p-6 backdrop-blur-sm sm:p-8">
            <h2 className="text-3xl font-semibold text-slate-900">
              Additional Notes
            </h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">
              <li>
                Authors are advised to ensure the plagiarism limit as per IEEE
                standards.
              </li>
              <li>
                Accepted papers will be submitted for inclusion into IEEE Xplore
                subject to meeting IEEE Xplore scope and quality requirements.
              </li>
            </ul>

            <div className="mt-8 rounded-md border border-amber-300/60 bg-amber-50/85 p-5 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-slate-900">
                IC2E3 2026 Best Paper Awards
              </h3>
              <p className="mt-3 text-lg leading-8 text-slate-700">
                The authors of all accepted papers are automatically eligible
                for IC2E3-2026 Best Paper Awards.
              </p>
            </div>

            <div className="mt-6 rounded-md border border-amber-300/60 bg-amber-50/85 p-5 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-slate-900">
                IC2E3 2026 Reviewer Recognition
              </h3>
              <p className="mt-3 text-lg leading-8 text-slate-700">
                The IC2E3 conference features a rigorous review process for
                submitted manuscripts. This would not have been possible without
                the dedication of a large pool of reviewers. To recognize
                voluntary contributions, all reviewers are automatically
                eligible for IC2E3 2026 Outstanding Reviewer Awards.
              </p>
              <p className="mt-3 text-lg leading-8 text-slate-700">
                The IC2E3-2026 Awards will be announced during the conference.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
