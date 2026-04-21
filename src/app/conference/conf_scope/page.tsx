import Navbar from "../../../components/navbar";
import PageHeaderBanner from "../../../components/page-header-banner";

const scopeSections = [
  {
    title: "1. Next Generation Computing and Applications",
    items: [
      "Software Analytics and Visualization",
      "Computer Architectures using Emerging Technology and Quantum Computing",
      "AI, Data Science and Scalable Machine Learning",
      "Internet of Things and Cyber-Physical Systems",
      "Cloud Systems Security, Privacy and Trust in Distributed Systems",
      "Robotics, Control Systems and AI",
      "Cryptography and Security Solutions",
      "Cyber-Physical System Forensics",
      "Network, Cloud, Distributed and Cyber Systems Security",
      "Multicore System-on-Chip Based Embedded Systems and Applications",
    ],
  },
  {
    title: "2. Power Electronics, Drives and Control",
    items: [
      "Applications of Power Electronics in Renewable Energy",
      "Applications of Power Electronics in Robotics and Automation",
      "Control in Power Electronics",
      "Converter Topologies",
      "Custom Power",
      "Distributed Generation",
      "Electric Drives and Modulation Techniques",
      "Energy Storage and E-Mobility",
      "Lighting and Illumination",
      "Power Electronics Education (Review Papers, Pedagogy, etc.)",
      "Renewable Energy Resources",
      "Ultra Capacitors and Battery Charging Technologies",
      "Wide Band Gap Devices",
      "E-Vehicle Technologies",
      "Advanced Control Techniques",
    ],
  },
  {
    title: "3. Power and Green Energy Systems",
    items: [
      "Advanced Wind Resource Assessment Techniques",
      "Application of Data Analytics in Energy Management",
      "Blockchain Applications for Distributed Energy Generation (DER)",
      "Electric Vehicles and Their Impact on the Grid",
      "Energy Efficient Buildings",
      "Energy Forecasting",
      "Energy Policies and Standards",
      "Energy Storage Solutions for Utility-Scale PV Generation",
      "Hydrogen as a Future Energy Source",
      "IoT in Power System Applications",
      "Modelling of Energy Systems",
      "Resilient Power Generation Systems",
      "Sustainable Energy Technologies",
      "Urban Microgrids and Smart Grids",
    ],
  },
  {
    title: "4. Antenna and RF Technologies",
    items: [
      "Advanced RF Measurement Techniques",
      "Antenna for Mobile and Vehicular Communication Applications",
      "Antennas and Systems for 5G and Beyond",
      "Metamaterials for Antennas",
      "Millimeter and Terahertz Antennas and Systems",
      "MIMO and Arrays",
      "Planar Antennas and Arrays",
      "Remote Sensing Systems",
      "RF and Microwave Circuits for Next-Generation Communications",
      "Terrestrial, Earth-Space and Ionospheric Propagation",
      "Tunable and Reconfigurable Antennas",
    ],
  },
  {
    title: "5. Electronic Circuits, Sensors and Biomedical Systems",
    items: [
      "AR/VR, Entertainment and Gaming",
      "Computer Architecture and Embedded Systems",
      "Consumer Systems for Healthcare and Wellbeing",
      "Devices, Circuits and Systems",
      "Geoscience and Remote Sensing Technology",
      "Industrial Electronics",
      "Next-Generation Communications, Networks and IoT",
      "Sensors, Systems and Applications",
      "Smart Cities, Vehicular Technology and Intelligent Transportation",
      "VLSI for Applied and Future Computing",
      "Multicore System-on-Chip Based Embedded Systems and Applications",
      "Biomedical Imaging and Image Processing",
    ],
  },
];

export default function ConferenceScopePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen home-texture px-5 pb-16 pt-36 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <PageHeaderBanner title="Conference Scope" />
          <section className="rounded-lg border border-slate-300 bg-white p-6 sm:p-8">
            <h1 className="text-4xl font-bold text-[#0b2a89] sm:text-5xl">
              Conference Scope
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700 sm:text-xl">
              The conference aims to gather scholars from across the world to
              present advances in relevant fields and foster a collaborative
              environment for exchanging ideas and technical knowledge. It also
              provides an ideal platform to develop new collaborations and
              interact with experts in the fundamentals, applications, and
              products related to Computing, Electrical, and Electronics
              domains.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700 sm:text-xl">
              Technical papers are solicited on topics pertaining to the
              conference scope, including but not limited to the following
              areas:
            </p>
          </section>

          <div className="mt-8 space-y-6">
            {scopeSections.map((section) => (
              <section
                key={section.title}
                className="rounded-lg border border-slate-300 bg-white p-6 sm:p-8"
              >
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                  {section.title}
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-8 text-slate-700">
                  {section.items.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}