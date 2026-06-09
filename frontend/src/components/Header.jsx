import React, { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { CTAButton } from "./ui-cdm/Primitives";
import { whatsappLink } from "../lib/brand";

const NAV_LINKS = [
  { key: "home", href: "#home" },
  { key: "acqua", href: "#acqua" },
  { key: "relax", href: "#relax" },
  { key: "poltrone", href: "#poltrone" },
  { key: "chiSiamo", href: "#chi-siamo" },
  { key: "showroom", href: "#showroom" },
  { key: "contatti", href: "#contatti" },
];

const Header = () => {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#home" data-testid="logo-link" className="flex items-center gap-2.5 group">
          <div className="relative h-9 w-9 rounded-xl bg-[#2C2C2A] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#A3CBE0] via-transparent to-[#AFA393] opacity-40" />
            <span className="relative font-heading font-bold text-[#FDFCF0] text-sm tracking-tight">CDM</span>
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-heading text-[15px] font-semibold text-[#2C2C2A] tracking-tight">
              Acqua & Relax
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#5F5E5C] mt-0.5">
              Made in Italy
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" data-testid="desktop-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              data-testid={`nav-${link.key}`}
              className="text-sm text-[#2C2C2A] hover:text-[#5A9BB8] transition-colors duration-300 relative group"
            >
              {t.nav[link.key]}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#5A9BB8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Lang switcher */}
          <div className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#AFA393]/30 bg-white/60 backdrop-blur" data-testid="lang-switcher">
            <Globe size={13} className="text-[#5F5E5C]" />
            <button
              onClick={() => setLang("it")}
              data-testid="lang-it"
              className={`text-[11px] font-medium px-2 py-0.5 rounded-full transition ${
                lang === "it" ? "bg-[#2C2C2A] text-[#FDFCF0]" : "text-[#5F5E5C] hover:text-[#2C2C2A]"
              }`}
            >
              IT
            </button>
            <button
              onClick={() => setLang("en")}
              data-testid="lang-en"
              className={`text-[11px] font-medium px-2 py-0.5 rounded-full transition ${
                lang === "en" ? "bg-[#2C2C2A] text-[#FDFCF0]" : "text-[#5F5E5C] hover:text-[#2C2C2A]"
              }`}
            >
              EN
            </button>
          </div>

          <CTAButton
            href="#contatti"
            variant="primary"
            className="hidden md:inline-flex !px-5 !py-2.5 !text-[13px]"
            testId="header-cta"
          >
            {t.nav.ctaPrimary}
          </CTAButton>

          {/* Mobile menu trigger */}
          <button
            data-testid="mobile-menu-trigger"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden h-10 w-10 rounded-full border border-[#AFA393]/30 bg-white/70 backdrop-blur flex items-center justify-center"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden mt-3 mx-3 sm:mx-5 rounded-3xl glass-nav p-5 fade-up" data-testid="mobile-menu">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${link.key}`}
                className="px-4 py-3 rounded-2xl text-sm text-[#2C2C2A] hover:bg-[#F5F3E9] transition-colors"
              >
                {t.nav[link.key]}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-2 mt-3">
              <CTAButton href="#contatti" variant="primary" className="!text-[13px]" testId="mobile-cta">
                {t.nav.ctaPrimary}
              </CTAButton>
              <CTAButton href={whatsappLink()} variant="whatsapp" className="!text-[13px]" testId="mobile-whatsapp" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </CTAButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
