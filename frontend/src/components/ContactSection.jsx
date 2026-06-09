import React from "react";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { CTAButton, SectionTag } from "./ui-cdm/Primitives";
import { BRAND, whatsappLink } from "../lib/brand";

const ContactSection = () => {
  const { t } = useLang();

  return (
    <section id="contatti" data-testid="contact-section" className="py-24 lg:py-32 bg-[#FDFCF0] relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#D6E8ED] opacity-50 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#DCD3C6] opacity-50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="relative p-10 lg:p-16 rounded-[36px] bg-[#2C2C2A] text-[#FDFCF0] overflow-hidden shadow-cdm-lg" data-testid="contact-card">
          <div aria-hidden className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#A3CBE0] opacity-25 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#AFA393] opacity-25 blur-3xl" />

          <div className="relative max-w-3xl">
            <SectionTag color="water" testId="contact-tag">{t.finalCta.tag}</SectionTag>
            <h2 className="mt-7 font-heading text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.03] tracking-tight font-medium" data-testid="contact-title">
              {t.finalCta.title}{" "}
              <span className="italic text-[#A3CBE0] font-light">{t.finalCta.titleAccent}</span>
            </h2>
            <p className="mt-7 text-[15px] lg:text-base text-[#FDFCF0]/75 leading-relaxed max-w-2xl" data-testid="contact-subtitle">
              {t.finalCta.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-3" data-testid="contact-ctas">
              <CTAButton
                href={`mailto:${BRAND.emails[0]}?subject=Richiesta consulenza gratuita CDM Acqua %26 Relax`}
                variant="primary"
                className="!bg-[#FDFCF0] !text-[#2C2C2A] hover:!bg-[#F5F3E9]"
                testId="contact-cta-email"
                icon={<ArrowRight size={16} />}
              >
                {t.finalCta.ctaPrimary}
              </CTAButton>
              <CTAButton
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                testId="contact-cta-whatsapp"
                icon={<MessageCircle size={16} />}
              >
                {t.finalCta.ctaWhatsapp}
              </CTAButton>
              <CTAButton
                href={`tel:${BRAND.phones[0].tel}`}
                variant="outline"
                className="!border-[#FDFCF0]/30 !text-[#FDFCF0] hover:!bg-[#FDFCF0] hover:!text-[#2C2C2A]"
                testId="contact-cta-phone"
                icon={<Phone size={14} />}
              >
                {BRAND.phones[0].label}
              </CTAButton>
            </div>

            {/* Quick contacts */}
            <div className="mt-12 pt-10 border-t border-[#FDFCF0]/15 grid sm:grid-cols-3 gap-6" data-testid="contact-quick-info">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#FDFCF0]/50">Showroom</p>
                <p className="mt-3 text-[14px] leading-relaxed">{BRAND.showroom.line1}<br />{BRAND.showroom.line2}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#FDFCF0]/50">Telefono</p>
                <div className="mt-3 space-y-1">
                  {BRAND.phones.map((p, i) => (
                    <a key={i} href={`tel:${p.tel}`} className="block text-[14px] hover:text-[#A3CBE0] transition-colors">
                      {p.label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#FDFCF0]/50">Email</p>
                <div className="mt-3 space-y-1">
                  {BRAND.emails.map((e, i) => (
                    <a key={i} href={`mailto:${e}`} className="block text-[14px] hover:text-[#A3CBE0] transition-colors break-all">
                      {e}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
