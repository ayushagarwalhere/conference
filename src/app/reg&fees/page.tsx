import Navbar from "../../components/navbar";
import PageHeaderBanner from "../../components/page-header-banner";

const categoryA = [
  {
    category: "Students",
    ieee: "INR 6,400 + INR 1,152 (18% GST) = INR 7,552",
    nonIeee: "INR 8,000 + INR 1,440 (18% GST) = INR 9,440",
  },
  {
    category: "Academic Faculty/Scientists",
    ieee: "INR 7,600 + INR 1,368 (18% GST) = INR 8,968",
    nonIeee: "INR 9,500 + INR 1,710 (18% GST) = INR 11,210",
  },
  {
    category: "Industry Delegates",
    ieee: "INR 12,000 + INR 2,160 (18% GST) = INR 14,160",
    nonIeee: "INR 12,000 + INR 2,160 (18% GST) = INR 14,160",
  },
  {
    category: "Foreign Participants",
    ieee: "USD 160",
    nonIeee: "USD 200",
  },
];

const categoryB = [
  {
    category: "Students",
    ieee: "INR 3,200 + INR 576 (18% GST) = INR 3,776",
    nonIeee: "INR 4,000 + INR 720 (18% GST) = INR 4,720",
  },
  {
    category: "Academic Faculty/Scientists",
    ieee: "INR 3,800 + INR 684 (18% GST) = INR 4,484",
    nonIeee: "INR 4,750 + INR 855 (18% GST) = INR 5,605",
  },
  {
    category: "Industry Delegates",
    ieee: "INR 6,000 + INR 1,080 (18% GST) = INR 7,080",
    nonIeee: "INR 6,000 + INR 1,080 (18% GST) = INR 7,080",
  },
  {
    category: "Foreign Participants",
    ieee: "USD 80",
    nonIeee: "USD 100",
  },
];

type FeeRow = {
  category: string;
  ieee: string;
  nonIeee: string;
};

function FeeTable({ rows }: { rows: FeeRow[] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-lg border border-slate-300 bg-white/78 backdrop-blur-sm">
      <table className="w-full min-w-190 border-collapse text-left">
        <thead>
          <tr className="border-b border-slate-300 text-slate-800">
            <th className="px-5 py-4 text-lg font-bold">Category</th>
            <th className="px-5 py-4 text-lg font-bold">
              Registration Fees
              <br />
              for IEEE Members
            </th>
            <th className="px-5 py-4 text-lg font-bold">
              Registration Fees
              <br />
              for Non-IEEE Members
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.category}
              className="border-b border-slate-200 text-slate-700 last:border-b-0"
            >
              <td className="px-5 py-4 text-lg">{row.category}</td>
              <td className="px-5 py-4 text-lg">{row.ieee}</td>
              <td className="px-5 py-4 text-lg">{row.nonIeee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function RegistrationFeesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen home-texture px-5 pb-16 pt-36 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <PageHeaderBanner title="Registration and Fees" />
          <h1 className="text-4xl font-bold text-[#0b2a89] sm:text-5xl">
            Registration & Fees
          </h1>

          <section className="mt-8">
            <h2 className="text-3xl font-semibold text-slate-900">
              <span className="underline">Category A:</span> Registration Fees*
            </h2>
            <p className="mt-3 text-2xl text-slate-700">
              For presenting authors of each accepted regular paper/short
              paper/poster
            </p>
            <FeeTable rows={categoryA} />
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-semibold text-slate-900">
              <span className="underline">Category B:</span> Registration Fees*
            </h2>
            <p className="mt-3 text-2xl text-slate-700">
              For non-authors/non-presenting authors/design contest authors/SRF
              authors
            </p>
            <FeeTable rows={categoryB} />
          </section>

          <section className="mt-12 rounded-lg border border-slate-300 bg-white/78 p-6 backdrop-blur-sm sm:p-8">
            <h2 className="text-3xl font-semibold text-slate-900">
              Guidelines for Registration
            </h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">
              <li>
                Every accepted paper can have up to 6 pages in the final PDF. If
                needed, additional pages (maximum 2 pages beyond the basic 6
                pages) can be added by paying an extra charge of INR 2000 per
                additional page at the time of author registration.
              </li>
              <li>
                At least one author of every accepted paper must register and
                present the paper for inclusion in the conference proceedings
                and subsequent submission to the IEEE Xplore digital library.
              </li>
              <li>
                If more than one author of an accepted paper wishes to attend,
                each additional author must register separately by paying the
                applicable non-presenting author fee.
              </li>
              <li>Each author registration covers only one accepted paper.</li>
              <li>
                Additional authors other than those included in the reviewed
                manuscript cannot be added to the camera-ready paper.
              </li>
              <li>
                Registration fee is non-refundable and must be paid before
                uploading the final IEEE formatted camera-ready paper and
                e-copyright form.
              </li>
            </ul>

            <div className="mt-8 rounded-md border border-amber-300/60 bg-amber-50/85 p-5 text-slate-800 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold">Indian Authors</h3>
              <p className="mt-3 text-lg leading-8">
                The registration link for IC2E3 2026 (only for Indian authors)
                is provided below. Select state as{" "}
                <span className="font-semibold">"Himachal Pradesh"</span> and
                category as
                <span className="font-semibold">
                  {" "}
                  "Fee for Workshop/STC/FDP/Conference/GIAN Courses"
                </span>
                .
              </p>
              <p className="mt-3 text-lg leading-8">
                Authors must select the appropriate category (IEEE Student,
                Non-IEEE Student, Academics, Researchers, Industry, etc.),
                applicable fee, and GST. Kindly fill your paper title in the
                remark field.
              </p>
              <p className="mt-3 text-lg leading-8">
                After submitting the fee, download the fee receipt and complete
                the required Google form.
              </p>
              <a
                href="#"
                className="mt-4 inline-block rounded-md bg-[#0b2a89] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#1538a3]"
              >
                Registration Link
              </a>
            </div>
          </section>

          <section className="mt-10 rounded-lg border border-slate-300 bg-white/78 p-6 backdrop-blur-sm sm:p-8">
            <h2 className="text-3xl font-semibold text-slate-900">
              Foreign Authors Payment Details
            </h2>
            <p className="mt-3 text-lg leading-8 text-slate-700">
              Foreign authors have to pay the registration fee using the
              following account details:
            </p>

            <div className="mt-5 overflow-x-auto rounded-lg border border-slate-300 bg-white/78 backdrop-blur-sm">
              <table className="w-full min-w-190 border-collapse text-left">
                <tbody>
                  <tr className="border-b border-slate-200">
                    <th className="w-[42%] px-5 py-4 text-lg font-semibold text-slate-800">
                      Institution Account Name (As per Bank Record)
                    </th>
                    <td className="px-5 py-4 text-lg text-slate-700">
                      National Institute of Technology Hamirpur
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <th className="px-5 py-4 text-lg font-semibold text-slate-800">
                      Account No.
                    </th>
                    <td className="px-5 py-4 text-lg text-slate-700">
                      37530603682
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <th className="px-5 py-4 text-lg font-semibold text-slate-800">
                      IFSC Code
                    </th>
                    <td className="px-5 py-4 text-lg text-slate-700">
                      SBIN0003181
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <th className="px-5 py-4 text-lg font-semibold text-slate-800">
                      Bank Name (in full)
                    </th>
                    <td className="px-5 py-4 text-lg text-slate-700">
                      State Bank of India
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <th className="px-5 py-4 text-lg font-semibold text-slate-800">
                      Branch Name
                    </th>
                    <td className="px-5 py-4 text-lg text-slate-700">
                      Srinagar (Garhwal)
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <th className="px-5 py-4 text-lg font-semibold text-slate-800">
                      Complete Branch Address
                    </th>
                    <td className="px-5 py-4 text-lg text-slate-700">
                      National Institute Of Technology, Hamirpur, Pin-177005
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <th className="px-5 py-4 text-lg font-semibold text-slate-800">
                      MICR No.
                    </th>
                    <td className="px-5 py-4 text-lg text-slate-700">
                      246002902
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <th className="px-5 py-4 text-lg font-semibold text-slate-800">
                      Swift Code
                    </th>
                    <td className="px-5 py-4 text-lg text-slate-700">
                      SBININBB558
                    </td>
                  </tr>
                  <tr>
                    <th className="px-5 py-4 text-lg font-semibold text-slate-800">
                      Account Type
                    </th>
                    <td className="px-5 py-4 text-lg text-slate-700">
                      Saving Account
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Non-authors/non-presenting authors can also participate in the
              conference after submitting the registration fee on the
              above-mentioned account details. The applicable charges are listed
              under Category B.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
