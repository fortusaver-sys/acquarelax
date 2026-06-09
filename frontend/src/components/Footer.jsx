import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { BRAND } from "../lib/brand";

const Footer = () => {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const navLinks = [
    { key: "home", href: "#home" },
    { key: "acqua", href: "#acqua" },
    { key: "relax", href: "#relax" },
    { key: "poltrone", href: "#poltrone" },
    { key: "chiSiamo", href: "#chi-siamo" },
    { key: "contatti", href: "#contatti" },
  ];

  return (
    <footer data-testid="footer" className="bg-[#F5F3E9] border-t border-[#AFA393]/20 pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="relative h-10 w-10 rounded-xl bg-[#2C2C2A] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A3CBE0] via-transparent to-[#AFA393] opacity-40" />
                <span className="relative font-heading font-bold text-[#FDFCF0] text-sm tracking-tight">CDM</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-[16px] font-semibold text-[#2C2C2A] tracking-tight">
                  Acqua & Relax
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#5F5E5C] mt-0.5">
                  {t.footer.partner}
                </span>
              </div>
            </div>
            <p className="mt-7 text-[14px] text-[#5F5E5C] leading-relaxed max-w-md" data-testid="footer-tagline">
              {t.footer.tagline}
            </p>

            <div className="mt-8 space-y-3" data-testid="footer-contacts">
              <a href={`mailto:${BRAND.emails[0]}`} className="flex items-center gap-3 text-[13px] text-[#2C2C2A] hover:text-[#5A9BB8] transition-colors">
                <Mail size={14} className="text-[#AFA393]" />
                {BRAND.emails[0]}
              </a>
              <a href={`mailto:${BRAND.emails[1]}`} className="flex items-center gap-3 text-[13px] text-[#2C2C2A] hover:text-[#5A9BB8] transition-colors">
                <Mail size={14} className="text-[#AFA393]" />
                {BRAND.emails[1]}
              </a>
              {BRAND.phones.map((p, i) => (
                <a key={i} href={`tel:${p.tel}`} className="flex items-center gap-3 text-[13px] text-[#2C2C2A] hover:text-[#5A9BB8] transition-colors">
                  <Phone size={14} className="text-[#AFA393]" />
                  {p.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#5F5E5C] font-medium">{t.footer.navigate}</h4>
            <ul className="mt-5 space-y-3" data-testid="footer-nav">
              {navLinks.map((l) => (
                <li key={l.key}>
                  <a href={l.href} className="text-[14px] text-[#2C2C2A] hover:text-[#5A9BB8] transition-colors">
                    {t.nav[l.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Showroom / Sede */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#5F5E5C] font-medium">{t.footer.contacts}</h4>
            <div className="mt-5 space-y-5" data-testid="footer-addresses">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-[#AFA393] mt-1 shrink-0" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#5F5E5C] mb-1">Showroom</p>
                  <p className="text-[14px] text-[#2C2C2A] leading-relaxed">
                    {BRAND.showroom.line1}<br />
                    {BRAND.showroom.line2}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-[#AFA393] mt-1 shrink-0" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#5F5E5C] mb-1">Sede legale</p>
                  <p className="text-[14px] text-[#2C2C2A] leading-relaxed">
                    {BRAND.hq.line1}<br />
                    {BRAND.hq.line2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-7 border-t border-[#AFA393]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" data-testid="footer-bottom">
          <p className="text-[12px] text-[#5F5E5C]">
            © {year} CDM Acqua & Relax. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[12px] text-[#5F5E5C] hover:text-[#2C2C2A] transition-colors" data-testid="footer-privacy">
              {t.footer.privacy}
            </a>
            <a href="#" className="text-[12px] text-[#5F5E5C] hover:text-[#2C2C2A] transition-colors" data-testid="footer-cookies">
              {t.footer.cookies}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
