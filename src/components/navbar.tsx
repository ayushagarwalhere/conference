"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Conference", href: "/conference/conf_scope" },
  { label: "Registration & Fees", href: "/reg&fees" },
  { label: "Information for Authors", href: "/info_author" },
  { label: "Important Dates", href: "/imp_dates" },
  { label: "Committee", href: "/committees" },
  { label: "Contact & VISA", href: "/contact_visa" },
];

const CONFERENCE_DROPDOWN_LINKS = [
  { label: "Conference Scope", href: "/conference/conf_scope" },
  { label: "About", href: "/conference/about" },
  { label: "Keynotes", href: "/conference/keynotes" },
  { label: "Venue", href: "/conference/venue" },
  { label: "Accommodation", href: "/conference/accommodation" },
  { label: "Nearby Places", href: "/conference/nearby_places" },
  { label: "Partners", href: "/conference/partners" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close burger on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .civcs-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: background 0.35s ease, box-shadow 0.35s ease, padding 0.35s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .civcs-nav.transparent {
          background: transparent;
          padding: 0;
        }
        .civcs-nav.solid {
          background: rgba(10, 13, 20, 0.97);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 rgba(184, 145, 58, 0.2);
          padding: 0;
        }

        /* ── Inner bar ── */
        .civcs-nav-inner {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 0 0.85rem 0 0.35rem;
          height: 88px;
          max-width: none;
          margin: 0;
        }

        /* ── Logo ── */
        .civcs-logo {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          text-decoration: none;
          flex-shrink: 0;
        }
        .civcs-logo-mark {
          width: 62px;
          height: 62px;
          object-fit: cover;
          border-radius: 50%;
          border: 1px solid rgba(212,168,75,0.45);
          box-shadow: 0 0 0 1px rgba(10,13,20,0.6);
        }
        .civcs-logo-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .civcs-logo-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.04em;
          line-height: 1;
        }
        .civcs-logo-main span {
          color: #d4a84b;
        }
        .civcs-logo-sub {
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.42);
          font-weight: 300;
        }

        /* ── Desktop links ── */
        .civcs-links {
          display: flex;
          align-items: center;
          gap: 0;
          list-style: none;
          margin-left: auto;
        }
        .civcs-links li {
          position: relative;
        }
        .civcs-links li a {
          display: block;
          padding: 0 0.6rem;
          font-size: 0.9rem;
          font-weight: 400;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: rgba(255,255,255);
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s ease;
          line-height: 88px;
          position: relative;
        }
        .civcs-links li a::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0.6rem; right: 0.6rem;
          height: 1px;
          background: #d4a84b;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .civcs-links li a:hover,
        .civcs-links li a.active {
          color: #d4a84b;
        }
        .civcs-links li a:hover::after,
        .civcs-links li a.active::after {
          transform: scaleX(1);
        }

        /* Conference dropdown */
        .civcs-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          min-width: 260px;
          background: #e5e7eb;
          border: 1px solid #d4a84b;
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.22);
          padding: 10px 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(8px);
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
          z-index: 1001;
        }
        .civcs-dropdown li {
          list-style: none;
        }
        .civcs-dropdown li a {
          display: block;
          line-height: normal;
          font-size: 0.92rem;
          letter-spacing: 0.03em;
          text-transform: none;
          color: #1f2f45;
          padding: 12px 16px;
        }
        .civcs-dropdown li a::after {
          display: none;
        }
        .civcs-dropdown li a:hover {
          color: #000000;
          background: #ffffff;
        }
        .civcs-has-dropdown:hover .civcs-dropdown,
        .civcs-has-dropdown:focus-within .civcs-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        /* Submit CTA */
        .civcs-cta {
          display: inline-block;
          margin-left: 2.4rem;
          padding: 1.1rem 2.6rem;
          background: #b8913a;
          color: #fff ;
          font-size: 1.2rem ;
          font-weight: 500;
          letter-spacing: 0.1em ;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
          line-height: 1.4 !important;
        }
        .civcs-cta::after { display: none !important; }
        .civcs-cta:hover { background: #d4a84b !important; transform: translateY(-1px); }

        /* ── Burger button ── */
        .civcs-burger {
          position: absolute;
          right:0;
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;
          width: 40px;
          height: 32px;
          background: none;
          border: 1px solid rgba(184,145,58,0.35);
          cursor: pointer;
          padding: 0;
          flex-shrink: 0;
        }
        .civcs-burger span {
          display: block;
          width: 32px;
          height: 2.5px;
          background: rgba(255,255,255,0.8);
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
          transform-origin: center;
        }
        .civcs-burger.is-open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .civcs-burger.is-open span:nth-child(2) { opacity: 0; width: 0; }
        .civcs-burger.is-open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* ── Mobile drawer ── */
        .civcs-drawer {
          position: fixed;
          top: 88px; left: 0; right: 0; bottom: 0;
          background: rgba(10, 13, 20, 0.98);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          padding: 2rem 4vw 3rem;
          transform: translateX(100%);
          opacity: 0;
          transition: transform 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.38s ease;
          pointer-events: none;
          overflow-y: auto;
        }
        .civcs-drawer.open {
          transform: translateX(0);
          opacity: 1;
          pointer-events: all;
        }
        .civcs-drawer-links {
          list-style: none;
          flex: 1;
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(184,145,58,0.15);
        }
        .civcs-drawer-links li {
          border-bottom: 1px solid rgba(184,145,58,0.1);
        }
        .civcs-drawer-links li a {
          display: flex;
          align-items: center;
          padding: 1.1rem 0;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 400;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: color 0.2s, padding-left 0.2s;
        }
        .civcs-drawer-links li a:hover {
          color: #d4a84b;
          padding-left: 0.5rem;
        }
        .civcs-drawer-links li a::before {
          content: '—';
          margin-right: 1rem;
          color: rgba(184,145,58,0.4);
          font-size: 0.7rem;
          transition: color 0.2s;
        }
        .civcs-drawer-links li a:hover::before {
          color: #d4a84b;
        }
        .civcs-drawer-cta {
          display: block;
          margin-top: 2rem;
          padding: 1rem;
          text-align: center;
          background: #b8913a;
          color: #fff;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.2s;
        }
        .civcs-drawer-cta:hover { background: #d4a84b; }
        .civcs-drawer-footer {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(184,145,58,0.12);
          text-align: center;
        }
        .civcs-drawer-footer p {
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          line-height: 1.8;
        }

        /* ── Responsive breakpoint ── */
        @media (max-width: 1180px) {
          .civcs-nav-inner {
            height: 80px;
          }
          .civcs-logo-mark {
            width: 54px;
            height: 54px;
          }
          .civcs-logo-main {
            font-size: 1.7rem;
          }
          .civcs-logo-sub {
            font-size: 0.74rem;
            letter-spacing: 0.1em;
          }
          .civcs-links li a {
            padding: 0 0.45rem;
            font-size: 0.8rem;
            line-height: 80px;
          }
          .civcs-links li a::after {
            left: 0.45rem;
            right: 0.45rem;
          }
          .civcs-drawer {
            top: 80px;
          }
        }
        @media (max-width: 1023px) {
          .civcs-links { display: none; }
          .civcs-burger { display: flex; }
        }
        @media (min-width: 1024px) {
          .civcs-drawer { display: none !important; }
        }
      `}</style>

      <nav
        className={`civcs-nav ${scrolled || open ? "solid" : "transparent"}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="civcs-nav-inner">
          {/* Logo */}
          <Link href="/" className="civcs-logo">
            <Image
              src="/image.png"
              alt="CIVCS conference logo"
              width={42}
              height={42}
              className="civcs-logo-mark"
              priority
            />
            <span className="civcs-logo-text">
              <span className="civcs-logo-main">
                <span>CIVCS</span> 2027
              </span>
              <span className="civcs-logo-sub">NIT Hamirpur, India</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="civcs-links">
            {NAV_LINKS.map((link) =>
              link.label === "Conference" ? (
                <li key={link.label} className="civcs-has-dropdown">
                  <a
                    href={link.href}
                    className={activeLink === link.href ? "active" : ""}
                    onClick={() => setActiveLink(link.href)}
                    aria-haspopup="true"
                  >
                    {link.label}
                  </a>
                  <ul className="civcs-dropdown">
                    {CONFERENCE_DROPDOWN_LINKS.map((item) => (
                      <li key={item.label}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={activeLink === link.href ? "active" : ""}
                    onClick={() => setActiveLink(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>

          {/* Burger */}
          <button
            className={`civcs-burger${open ? " is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`civcs-drawer${open ? " open" : ""}`} aria-hidden={!open}>
        <ul className="civcs-drawer-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/info_author.tsx"
          className="civcs-drawer-cta"
          onClick={() => setOpen(false)}
        >
          Submit Paper →
        </a>
        <div className="civcs-drawer-footer">
          <p>International Conference 2027</p>
          <p>12–14 August · NIT Hamirpur</p>
        </div>
      </div>
    </>
  );
}
