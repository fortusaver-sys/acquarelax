import React from "react";
import { ArrowRight, Armchair } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { CTAButton, SectionTag, PlaceholderImage } from "./ui-cdm/Primitives";
import { IMAGES, whatsappLink } from "../lib/brand";

const ArmchairsSection = () => {
  const { t } = useLang();

  return (
    <section id="poltrone" data-testid="armchairs-section" className="py-24 lg:py-32 bg-[#FDFCF0] relative overflow-hidden">
      <div aria-hidden className="absolute -bottom-32 -right-20 w-[420px] h-[420px] rounded-full bg-[#DCD3C6] opacity-50 blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Image side */}
          <div className="lg:col-span-6 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-cdm-lg" data-testid="armchairs-hero-image">
              <img src={IMAGES.armchair} alt="Poltrona relax di design" className="w-full h-[460px] lg:h-[560px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2A]/30 via-transparent to-transparent" />
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur text-[11px] uppercase tracking-[0.25em] text-[#2C2C2A] font-medium flex items-center gap-2">
                <Armchair size={12} />
                Poltrone
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:col-span-6 lg:order-1">
            <SectionTag color="relax" testId="armchairs-tag">{t.armchairs.tag}</SectionTag>
            <h2 className="mt-6 font-heading text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.05] tracking-tight text-[#2C2C2A] font-medium" data-testid="armchairs-title">
              {t.armchairs.title}
            </h2>
            <p className="mt-6 text-[15px] text-[#5F5E5C] leading-relaxed font-medium" data-testid="armchairs-subtitle">
              {t.armchairs.subtitle}
            </p>
            <p className="mt-4 text-[14px] text-[#5F5E5C] leading-relaxed" data-testid="armchairs-description">
              {t.armchairs.description}
            </p>

            {/* Features chip grid */}
            <div className="mt-8 grid grid-cols-2 gap-2.5" data-testid="armchairs-features">
              {t.armchairs.features.map((f, i) => (
                <div
                  key={i}
                  data-testid={`armchairs-feature-${i}`}
                  className="px-4 py-3 rounded-2xl bg-white border border-[#AFA393]/15 text-[13px] text-[#2C2C2A] flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#AFA393]" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products row */}
        <div className="mt-20 lg:mt-28">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-7">
            <h3 className="font-heading text-[24px] lg:text-[30px] tracking-tight text-[#2C2C2A] font-medium">
              I modelli
            </h3>
            <div className="h-px flex-1 min-w-[80px] bg-[#AFA393]/30 ml-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6" data-testid="armchairs-products">
            {t.armchairs.products.map((p, i) => (
              <div
                key={i}
                data-testid={`armchairs-product-${i}`}
                className="group rounded-3xl bg-white border border-[#AFA393]/15 overflow-hidden hover:-translate-y-1 hover:shadow-cdm-md transition-all duration-500"
              >
                <PlaceholderImage
                  variant={i === 0 ? "bronze" : i === 1 ? "relax" : "mixed"}
                  className="h-56 w-full rounded-none"
                  testId={`armchairs-product-image-${i}`}
                  label="immagine prova"
                />
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#AFA393]">CDM Relax</p>
                  <h4 className="mt-2 font-heading text-[22px] tracking-tight text-[#2C2C2A] font-medium">{p.name}</h4>
                  <p className="mt-1 text-[13px] text-[#5F5E5C]">{p.subtitle}</p>
                  <div className="mt-5 pt-5 border-t border-[#AFA393]/15 flex items-center justify-between">
                    <span className="text-[12px] text-[#5F5E5C]">Tessuti · Ecopelle</span>
                    <ArrowRight size={16} className="text-[#2C2C2A] group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-wrap gap-3">
          <CTAButton href="#showroom" variant="primary" testId="armchairs-cta-showroom" icon={<ArrowRight size={16} />}>
            {t.armchairs.cta}
          </CTAButton>
          <CTAButton
            href={whatsappLink("Ciao CDM, vorrei informazioni sulle poltrone relax.")}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            testId="armchairs-cta-whatsapp"
          >
            WhatsApp
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default ArmchairsSection;
