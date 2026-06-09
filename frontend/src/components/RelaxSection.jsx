import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { CTAButton, SectionTag, PlaceholderImage } from "./ui-cdm/Primitives";
import { IMAGES, whatsappLink } from "../lib/brand";

const RelaxSection = () => {
  const { t } = useLang();

  const productVariants = ["relax", "bronze", "mixed", "sage"];

  return (
    <section id="relax" data-testid="relax-section" className="py-24 lg:py-32 bg-[#F5F3E9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <SectionTag color="relax" testId="relax-tag">{t.relax.tag}</SectionTag>
            <h2 className="mt-6 font-heading text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.04] tracking-tight text-[#2C2C2A] font-medium" data-testid="relax-title">
              {t.relax.title}{" "}
              <span className="italic font-light text-[#AFA393]">{t.relax.titleAccent}</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] text-[#5F5E5C] leading-relaxed" data-testid="relax-subtitle">
              {t.relax.subtitle}
            </p>
            <p className="mt-4 text-[14px] text-[#5F5E5C] leading-relaxed" data-testid="relax-description">
              {t.relax.description}
            </p>
          </div>
        </div>

        {/* Hero image + features bento */}
        <div className="mt-14 lg:mt-20 grid lg:grid-cols-12 gap-6">
          {/* Big image */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-cdm-lg" data-testid="relax-hero-image">
            <img
              src={IMAGES.bedroom}
              alt="Camera da letto premium"
              className="w-full h-[440px] lg:h-[540px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2A]/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="text-[#FDFCF0]">
                <p className="text-[11px] uppercase tracking-[0.3em] opacity-80">CDM Relax</p>
                <p className="font-heading text-[26px] lg:text-[32px] tracking-tight leading-tight mt-1">
                  Riposo personalizzato.
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur text-[11px] text-[#2C2C2A] uppercase tracking-[0.2em] font-medium">
                <Sparkles size={12} />
                Made in Italy
              </span>
            </div>
          </div>

          {/* Features list */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3" data-testid="relax-features">
            {t.relax.features.map((f, i) => (
              <div
                key={i}
                data-testid={`relax-feature-${i}`}
                className="p-5 rounded-3xl bg-white border border-[#AFA393]/15 hover:border-[#AFA393]/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between min-h-[120px]"
              >
                <span className="font-heading text-[12px] text-[#AFA393] tracking-[0.15em] uppercase">0{i + 1}</span>
                <span className="font-heading text-[15px] lg:text-[16px] text-[#2C2C2A] leading-snug font-medium mt-3">
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Products row */}
        <div className="mt-16 lg:mt-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-7">
            <h3 className="font-heading text-[24px] lg:text-[30px] tracking-tight text-[#2C2C2A] font-medium">
              Prodotti CDM Relax
            </h3>
            <div className="h-px flex-1 min-w-[80px] bg-[#AFA393]/30 ml-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" data-testid="relax-products">
            {t.relax.products.map((p, i) => (
              <div
                key={i}
                data-testid={`relax-product-${i}`}
                className="group rounded-3xl bg-white border border-[#AFA393]/15 overflow-hidden hover:-translate-y-1 hover:shadow-cdm-md transition-all duration-500"
              >
                <PlaceholderImage
                  variant={productVariants[i % productVariants.length]}
                  className="h-44 w-full rounded-none"
                  testId={`relax-product-image-${i}`}
                  label="immagine prova"
                />
                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#AFA393]">CDM Relax</p>
                  <h4 className="mt-2 font-heading text-[18px] tracking-tight text-[#2C2C2A] font-medium">{p.name}</h4>
                  <p className="mt-1 text-[13px] text-[#5F5E5C]">{p.subtitle}</p>
                  <div className="mt-4 flex items-center gap-2 text-[13px] text-[#2C2C2A] group-hover:text-[#5A9BB8] transition-colors">
                    Scopri
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-wrap gap-3">
          <CTAButton href="#contatti" variant="primary" testId="relax-cta-consult" icon={<ArrowRight size={16} />}>
            {t.relax.cta}
          </CTAButton>
          <CTAButton
            href={whatsappLink("Ciao CDM, vorrei informazioni sui sistemi di riposo.")}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            testId="relax-cta-whatsapp"
          >
            WhatsApp
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default RelaxSection;
