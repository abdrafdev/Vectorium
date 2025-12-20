import React, { useEffect, useMemo, useRef, useState } from "react";
import logo from "../assets/logos/logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = useMemo(
    () => [
      { href: "#about", label: "About", icon: "💎" },
      { href: "#vision", label: "Vision", icon: "🔮" },
      { href: "#docs", label: "Docs", icon: "📡" },
      { href: "#team", label: "Team", icon: "⚡" }
    ],
    []
  );

  const sectionRatiosRef = useRef(new Map());

  // Smooth + cheap active-section detection
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace(/^#/, ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    sectionRatiosRef.current.clear();
    ids.forEach((id) => sectionRatiosRef.current.set(id, 0));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          sectionRatiosRef.current.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let bestId = "";
        let bestRatio = 0;
        for (const [id, ratio] of sectionRatiosRef.current.entries()) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        if (bestId && bestRatio > 0) setActiveSection(bestId);
      },
      {
        // Treat “active” as whichever section is closest to the center of the viewport
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6]
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navLinks]);

  // Header background on scroll (throttled)
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        setScrolled(window.scrollY > 20);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  // Mobile menu polish: ESC to close + lock body scroll
  useEffect(() => {
    if (!menuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);


  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <nav className={`container mx-auto px-4 transition-all duration-300 flex justify-between items-center ${scrolled ? 'py-3' : 'py-4'}`}>
          {/* Simplified Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="Vectorium"
              className={`transition-all duration-300 group-hover:scale-105 ${scrolled ? 'h-8 w-auto' : 'h-10 w-auto'}`}
            />
            <div className="hidden sm:block">
              <div className="text-xl font-bold tracking-tight">
                <span className="text-gold">VECT</span>
                <span className="text-gold mx-1">•</span>
                <span className="text-gold">AI</span>
              </div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                Decentralized Intelligence
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex items-center gap-1 px-4 py-2 bg-black/50 backdrop-blur-md rounded-lg border border-gold/20">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    className={`group px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 ${
                      isActive ? 'text-gold bg-gold/10' : 'text-gray-300 hover:text-gold'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{link.icon}</span>
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Simplified CTA */}
            <a 
              href="#buy" 
              className="ml-4 px-6 py-3 bg-gold text-black font-bold text-sm uppercase tracking-wide rounded-lg hover:bg-goldLight transition-all duration-300"
            >
              Buy Tokens
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gold/10 transition-all duration-300"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="vect-mobile-menu"
          >
            <div className="flex flex-col gap-1 w-6">
              <span className={`h-0.5 bg-gold transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`h-0.5 bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 bg-gold transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        id="vect-mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />
        <div className={`absolute top-16 left-4 right-4 mx-auto max-w-md bg-black/80 backdrop-blur-md rounded-xl border border-gold/20 p-6 space-y-4 transition-transform duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-10'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={() => setMenuOpen(false)} 
              className="flex items-center gap-3 p-3 rounded-md hover:bg-gold/10 transition-all duration-300 text-gray-200 hover:text-gold font-medium"
            >
              <span className="text-xl">{link.icon}</span>
              {link.label}
            </a>
          ))}
          <a
            href="#buy"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 bg-gold text-black font-bold text-center uppercase tracking-wide rounded-md hover:bg-goldLight transition-all duration-300"
          >
            Buy Tokens Now
          </a>
        </div>
      </div>

    </>
  );
}
