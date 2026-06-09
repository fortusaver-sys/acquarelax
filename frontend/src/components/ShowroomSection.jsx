import React from "react";
import { MapPin, Phone, Mail, ArrowUpRight, Navigation } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { CTAButton, SectionTag, PlaceholderImage } from "./ui-cdm/Primitives";
import { BRAND } from "../lib/brand";

const ShowroomSection = () => {
  const { t } = useLang();

  return (
    <section id="showroom" data-testid="showroom-section" className="py-24 lg:py-32 bg-[#F5F3E9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: content */}
          <div className="lg:col-span-6">
            <SectionTag color="relax" testId="showroom-tag">{t.showroom.tag}</SectionTag>
            <h2 className="mt-6 font-heading text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.05] tracking-tight text-[#2C2C2A] font-medium" data-testid="showroom-title">
              {t.showroom.title}
            </h2>
            <p className="mt-6 text-[15px] text-[#5F5E5C] leading-relaxed max-w-xl" data-testid="showroom-description">
              {t.showroom.description}
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4" data-testid="showroom-info">
              <InfoCard
                icon={<MapPin size={16} />}
                title={t.showroom.showroomTitle}
                lines={[BRAND.showroom.line1, BRAND.showroom.line2]}
                testId="showroom-address-card"
              />
              <InfoCard
                icon={<MapPin size={16} />}
                title={t.showroom.hqTitle}
                lines={[BRAND.hq.line1, BRAND.hq.line2]}
                testId="showroom-hq-card"
              />
              <InfoCard
                icon={<Phone size={16} />}
                title={t.showroom.phoneTitle}
                lines={BRAND.phones.map((p) => p.label)}
                hrefs={BRAND.phones.map((p) => `tel:${p.tel}`)}
                testId="showroom-phone-card"
              />
              <InfoCard
                icon={<Mail size={16} />}
                title={t.showroom.emailTitle}
                lines={BRAND.emails}
                hrefs={BRAND.emails.map((e) => `mailto:${e}`)}
                testId="showroom-email-card"
              />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <CTAButton
                href={BRAND.showroom.maps}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                testId="showroom-directions"
                icon={<Navigation size={16} />}
              >
                {t.showroom.cta}
              </CTAButton>
            </div>
          </div>

          {/* Right: Map */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-cdm-lg bg-white border border-[#AFA393]/15" data-testid="showroom-map">
              <iframe
                title="CDM Showroom Reggio Calabria"
                src="https://www.google.com/maps?q=Via+Modena+Chiesa+21+Reggio+Calabria&output=embed"
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11px] uppercase tracking-[0.25em] text-[#2C2C2A] font-medium flex items-center gap-2">
                <MapPin size={12} className="text-[#5A9BB8]" />
                Reggio Calabria
              </div>
            </div>
            <div className="mt-4">
              <PlaceholderImage variant="mixed" className="h-40 w-full" testId="showroom-placeholder" label="immagine prova" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, lines, hrefs = [], testId }) => (
  <div
    data-testid={testId}
    className="p-5 rounded-3xl bg-white border border-[#AFA393]/15 hover:border-[#AFA393]/40 transition-colors"
  >
    <div className="flex items-center gap-2 text-[#5A9BB8]">
      {icon}
      <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#5F5E5C]">{title}</span>
    </div>
    <div className="mt-4 space-y-1.5">
      {lines.map((line, i) =>
        hrefs[i] ? (
          <a
            key={i}
            href={hrefs[i]}
            className="block text-[14px] text-[#2C2C2A] hover:text-[#5A9BB8] transition-colors group"
          >
            {line}
            <ArrowUpRight size={12} className="inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ) : (
          <p key={i} className="text-[14px] text-[#2C2C2A] leading-relaxed">{line}</p>
        )
      )}
    </div>
  </div>
);

export default ShowroomSection;
