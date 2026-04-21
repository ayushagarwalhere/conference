"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Navbar from "../components/navbar";

const HP_IMAGES = [
  "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80",
  "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=1600&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80",
  "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1600&q=80",
];

const tracks = [
  {
    icon: "◈",
    title: "Computational Intelligence & Machine Learning for VLSI",
  },
  { icon: "◉", title: "Low-Power VLSI Systems and Chiplet Architectures" },
  { icon: "◐", title: "Signal Processing, AI Vision and Embedded Analytics" },
  { icon: "◑", title: "5G/6G Communication Systems and RF Design" },
  { icon: "◒", title: "Edge Intelligence, IoT and Cyber-Physical Systems" },
  { icon: "◓", title: "EDA Automation, Verification and Hardware Security" },
];

const importantDates = [
  { label: "Call for Papers Opens", value: "15 October 2026" },
  { label: "Paper Submission Deadline", value: "25 December 2026" },
  { label: "Notification of Acceptance", value: "10 January 2027" },
  { label: "Camera-Ready Submission", value: "30 January 2027" },
  { label: "Early Bird Registration", value: "10 February 2027" },
  { label: "Conference Dates", value: "12-14 March 2027" },
];

function ExpandCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(entry.intersectionRatio);
        } else if (entry.boundingClientRect.top > 0) {
          setProgress(0);
        }
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scale = 0.9 + progress * 0.1;
  const opacity = 0.4 + progress * 0.6;

  return (
    <div
      ref={ref}
      style={{
        transform: `scale(${scale})`,
        opacity,
        transition: "transform 120ms ease-out, opacity 120ms ease-out",
      }}
      className={className}
    >
      {children}
    </div>
  );
}

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );

    const node = ref.current;
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 700ms ease ${delay}ms, transform 700ms ease ${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    HP_IMAGES.forEach((src) => {
      const image = new window.Image();
      image.src = src;
    });

    const interval = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % HP_IMAGES.length);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-texture">
        <section
          id="home"
          className="relative flex h-screen min-h-screen items-center justify-center overflow-hidden bg-black pt-20 text-white"
        >
          {HP_IMAGES.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                i === imgIdx ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0d14]/95 via-[#0a0d14]/55 to-[#0a0d14]/25" />

          <div className="relative z-10 w-full px-5 text-center sm:px-8 lg:px-16">
                <div className="mx-auto max-w-6xl xl:max-w-7xl">
                  <h1 className="font-sans text-[clamp(1.6rem,4vw,3rem)] leading-[1.1] text-white sm:text-[clamp(2.3rem,4.8vw,4.25rem)] lg:text-[clamp(2.25rem,3.5vw,3.6rem)]">
                  <span className="block text-balance sm:whitespace-nowrap">
                    International Conference on Computational Intelligence
                  </span>
                  <span className="mt-2 block text-balance sm:mt-0">
                    in VLSI, Communication and Signal Processing
                  </span>
                </h1>
              </div>
          </div>
        </section>

        <section className="bg-transparent px-5 py-16 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-6xl space-y-10">
            <article className="rounded-lg border border-amber-700/20 bg-white/72 backdrop-blur-sm p-7 sm:p-10">
              <h2 className="font-semibold text-2xl text-[#0c1833] sm:text-3xl lg:text-4xl">
                About ECE Department
              </h2>
              <p className="mt-4 text-base leading-9 text-slate-700 sm:text-lg">
                The Department of Electronics and Communication Engineering at
                NIT Hamirpur is a center of academic excellence dedicated to
                high-quality teaching, advanced research, and innovation in
                electronics, communication systems, VLSI design, embedded
                technologies, and signal processing. The department maintains a
                balanced focus on strong theoretical foundations and practical
                engineering applications through modern laboratories,
                interdisciplinary projects, and industry-oriented learning. With
                active faculty research, student development initiatives, and
                collaborative programs, the department contributes significantly
                to preparing competent professionals for emerging technological
                domains.
              </p>
            </article>

            <article className="rounded-lg border border-amber-700/20 bg-white/72 backdrop-blur-sm p-7 sm:p-10">
              <h2 className="font-semibold text-2xl text-[#0c1833] sm:text-3xl lg:text-4xl">
                About CIVCS 2027
              </h2>
              <p className="mt-4 text-base leading-9 text-slate-700 sm:text-lg">
                The International Conference on Computational Intelligence in
                VLSI, Communication and Signal Processing (CIVCS 2027) is
                conceived as a distinguished global forum to connect
                researchers, academicians, and industry experts for meaningful
                technical exchange. The conference is focused on emerging
                technologies in intelligent hardware systems, communication
                engineering, and signal processing, with dedicated tracks
                covering theoretical advances and practical applications. CIVCS
                2027 is designed to encourage high-quality scientific dialogue,
                expert sessions, and collaboration opportunities that contribute
                to long-term research impact.
              </p>
            </article>

            <article className="rounded-lg border border-amber-700/20 bg-white/72 backdrop-blur-sm p-7 sm:p-10">
              <h2 className="font-semibold text-2xl text-[#0c1833] sm:text-3xl lg:text-4xl">
                About IEEE Professional Community
              </h2>
              <p className="mt-4 text-base leading-9 text-slate-700 sm:text-lg">
                The Institute of Electrical and Electronics Engineers (IEEE) is
                a globally recognized professional organization committed to the
                advancement of technology for the benefit of humanity. IEEE
                supports scientific and educational activities in electrical,
                electronics, communication, and computer engineering, along with
                related interdisciplinary fields. Through conferences, technical
                societies, standards, and local sections, IEEE enables
                professionals and researchers to strengthen their careers,
                contribute to innovation ecosystems, and build communities of
                technical excellence.
              </p>
            </article>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-px bg-slate-900/20 sm:grid-cols-3">
          {[
            ["Host Institute", "National Institute of Technology Hamirpur"],
            ["Expected Delegates", "500+ from academia, labs and industry"],
            ["Publication", "Proceedings with indexed publication pathways"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="bg-[#1a3a5c]/82 px-8 py-8 text-center text-white backdrop-blur-sm"
            >
              <h3 className="font-serif text-xl text-amber-300">{title}</h3>
              <p className="mt-2 text-sm text-white/75">{text}</p>
            </div>
          ))}
        </div>

        <section
          id="about"
          className="bg-transparent px-5 py-20 sm:px-8 lg:px-16"
        >
          <FadeUp>
            <p className="text-[11px] uppercase tracking-[0.28em] text-amber-700">
              The Conference
            </p>
            <h2 className="mt-3 font-serif text-4xl text-[#0a0d14]">
              About CIVCS 2027
            </h2>
          </FadeUp>
          <ExpandCard className="mt-10 grid gap-px bg-white/50 md:grid-cols-2">
            <article className="bg-transparent px-8 py-10">
              <div className="mb-6 h-0.5 w-12 bg-amber-600" />
              <p className="text-sm leading-8 text-slate-700 sm:text-base">
                CIVCS 2027 bridges computational intelligence with real-world
                hardware-centric engineering spanning VLSI, communication, and
                signal processing. The conference features keynote talks,
                technical paper sessions, tutorials, innovation showcases, and
                focused panels on emerging semiconductor ecosystems.
              </p>
            </article>
            <article className="bg-white/50 px-8 py-10 backdrop-blur-sm">
              <div className="mb-6 h-0.5 w-12 bg-amber-600" />
              <p className="text-sm leading-8 text-slate-700 sm:text-base">
                NIT Hamirpur is an Institute of National Importance known for
                strong programs in electronics, computer science, electrical
                engineering, and interdisciplinary innovation. Surrounded by the
                Himalayan foothills, the institute offers a vibrant academic
                environment for international events.
              </p>
            </article>
          </ExpandCard>
        </section>

        <section
          id="tracks"
          className="bg-slate-950/78 px-5 py-20 backdrop-blur-sm sm:px-8 lg:px-16"
        >
          <FadeUp>
            <p className="text-[11px] uppercase tracking-[0.28em] text-amber-300">
              Technical Programme
            </p>
            <h2 className="mt-3 font-serif text-4xl text-white">
              Conference Tracks
            </h2>
          </FadeUp>
          <ExpandCard className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track, i) => (
              <FadeUp
                key={track.title}
                delay={i * 80}
                className="rounded-md border border-amber-700/30 bg-white/4 px-6 py-8"
              >
                <div className="text-2xl text-amber-400">{track.icon}</div>
                <h3 className="mt-3 font-serif text-xl leading-7 text-white">
                  {track.title}
                </h3>
              </FadeUp>
            ))}
          </ExpandCard>
        </section>

        <section
          id="dates"
          className="bg-transparent px-5 py-20 sm:px-8 lg:px-16"
        >
          <FadeUp>
            <p className="text-[11px] uppercase tracking-[0.28em] text-amber-700">
              Milestones
            </p>
            <h2 className="mt-3 font-serif text-4xl text-[#0a0d14]">
              Important Dates
            </h2>
          </FadeUp>
          <ExpandCard className="mt-10 grid grid-cols-1 gap-px bg-white/75 md:grid-cols-2">
            {importantDates.map((item, i) => (
              <FadeUp
                key={item.label}
                delay={i * 60}
                className="bg-transparent px-8 py-8"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </p>
                <h3 className="mt-2 font-serif text-3xl text-[#1a3a5c]">
                  {item.value}
                </h3>
              </FadeUp>
            ))}
          </ExpandCard>
        </section>

        <section
          id="registration"
          className="bg-slate-950/60 px-5 py-16 backdrop-blur-sm sm:px-8 lg:px-16"
        >
          <ExpandCard className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/80">
                Call for Papers
              </p>
              <h2 className="mt-2 max-w-2xl font-serif text-3xl text-white sm:text-4xl">
                Present your work to a global audience at CIVCS 2027.
              </h2>
            </div>
            <a
              id="submission"
              href="https://cmt3.research.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-xl bg-red-500 px-10 py-4 text-lg font-bold uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5"
            >
              Paper Submission Link
            </a>
          </ExpandCard>
        </section>

        <section
          id="committee"
          className="bg-transparent px-5 py-20 sm:px-8 lg:px-16"
        >
          <FadeUp>
            <p className="text-[11px] uppercase tracking-[0.28em] text-amber-700">
              Organisation
            </p>
            <h2 className="mt-3 font-serif text-4xl text-[#0a0d14]">
              Committee &amp; Why Attend
            </h2>
          </FadeUp>

          <ExpandCard className="mt-10 grid grid-cols-1 gap-px bg-amber-700/20 md:grid-cols-2">
            <article className="bg-slate-950/80 px-8 py-10 text-white backdrop-blur-sm">
              <h3 className="font-serif text-3xl text-amber-300">
                Committee Snapshot
              </h3>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-white/80">
                <li>Chief Patron: Director, NIT Hamirpur</li>
                <li>
                  General Chairs: Senior Faculty, ECE &amp; EE Departments
                </li>
                <li>
                  Technical Program Chairs: International Research Experts
                </li>
                <li>Industry Liaisons: Semiconductor and Telecom Partners</li>
              </ul>
            </article>

            <article className="bg-transparent px-8 py-10 text-[#0a0d14]">
              <h3 className="font-serif text-3xl">Why Attend</h3>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
                <li>Keynotes from top global universities and R&amp;D labs</li>
                <li>Networking with chip design and communication leaders</li>
                <li>Hands-on tutorials on AI-accelerated VLSI workflows</li>
                <li>
                  Dedicated student innovation and startup showcase tracks
                </li>
              </ul>
            </article>
          </ExpandCard>
        </section>

        <footer className="relative bg-[#1a3a5c]/84 px-5 py-8 text-white backdrop-blur-sm sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-3">
            <div className="text-center lg:text-left">
              <h3 className="font-sans text-2xl font-bold tracking-[0.03em] text-white sm:text-3xl">
                CIVCS-2027
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/90 lg:max-w-none">
                The vision behind organizing this conference is to provide an
                excellent forum for researchers, scientists, and industrialists
                from interdisciplinary areas to showcase their current
                contributions in advanced engineering and intelligent systems.
              </p>
              <div className="mt-5 flex justify-center gap-3 lg:justify-start">
                {[
                  ["T", "Twitter"],
                  ["F", "Facebook"],
                  ["I", "Instagram"],
                  ["IN", "LinkedIn"],
                ].map(([mark, label]) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-[10px] font-semibold text-white/80 transition hover:border-amber-300 hover:text-amber-300 sm:h-8 sm:w-8"
                  >
                    {mark}
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center lg:ml-32 lg:text-left">
              <h4 className="text-lg font-semibold text-white">Useful Links</h4>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-white/80">
                <li>
                  <a href="#home" className="transition hover:text-amber-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="transition hover:text-amber-300">
                    About Conference
                  </a>
                </li>
                <li>
                  <a
                    href="#registration"
                    className="transition hover:text-amber-300"
                  >
                    Registration
                  </a>
                </li>
                <li>
                  <a href="#dates" className="transition hover:text-amber-300">
                    Important Dates
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="transition hover:text-amber-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center lg:ml-24 lg:text-left">
              <h4 className="text-lg text-white">Contact Us</h4>
              <p className="mt-4 text-sm leading-6 text-white/90">
                National Institute of Technology, Hamirpur
                <br />
                Anu, Hamirpur - 177005
                <br />
                Himachal Pradesh, India
              </p>
              <p className="mt-6 text-base leading-7 text-white/95">
                <span className="font-semibold">Phone:</span> +91-9235190599
                <br />
                <span className="font-semibold">Email:</span> abhijit@nith.ac.in
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs leading-6 text-white/90 sm:text-sm">
            <p>© Copyright 2027. All Rights Reserved</p>
            <p className="mt-2">
              Designed by Central Computer Centre, NIT Hamirpur
            </p>
          </div>

          <a
            href="#home"
            aria-label="Back to top"
            className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-lg text-white transition hover:bg-blue-500 sm:h-8 sm:w-8"
          >
            ↑
          </a>
        </footer>
      </div>
    </>
  );
}
